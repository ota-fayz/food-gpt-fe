import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useTelegram } from './useTelegram';
import { authApi } from '../api/auth';
import { STORAGE_KEYS } from '../constants/storage';
import { ROUTER } from '../constants/router';

export interface UseTelegramAuthReturn {
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: () => Promise<void>;
  logout: () => void;
}

export const useTelegramAuth = (): UseTelegramAuthReturn => {
  const { isWebApp, isInitialized, rawInitData } = useTelegram();
  const queryClient = useQueryClient();

  // Check if user is already authenticated
  const isAuthenticated = Boolean(
    typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN) : null
  );

  // Telegram login mutation
  const loginMutation = useMutation({
    mutationFn: async () => {
      console.log('🚀 Starting Telegram login mutation...');
      return authApi.loginWithTelegram();
    },
    onSuccess: (data) => {
      console.log('✅ Telegram login successful:', data);
      
      // Store the token
      localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, data.token);
      
      // Invalidate and refetch user profile
      queryClient.invalidateQueries({ queryKey: ['profile'] });
      
      // Redirect to dashboard if on welcome page
      if (typeof window !== 'undefined') {
        const currentPathname = window.location.pathname;
        if (currentPathname === ROUTER.WELCOME) {
          window.location.replace(ROUTER.DASHBOARD);
        }
      }
    },
    onError: (error) => {
      console.error('❌ Telegram login failed:', error);
    },
  });

  // Auto-login when conditions are met
  const shouldAutoLogin = 
    isInitialized && 
    isWebApp && 
    !isAuthenticated && 
    rawInitData && 
    !loginMutation.isPending;

  if (shouldAutoLogin) {
    console.log('🔄 Auto-login conditions met, triggering login...');
    loginMutation.mutate();
  }

  const login = async (): Promise<void> => {
    if (!isWebApp || !rawInitData) {
      console.warn('⚠️ Cannot login: not in Telegram WebApp or no init data');
      throw new Error('Not in Telegram environment');
    }

    await loginMutation.mutateAsync();
  };

  const logout = () => {
    console.log('🚪 Logging out user...');
    localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
    
    // Clear all queries from cache
    queryClient.clear();
    
    // Redirect to welcome page
    if (typeof window !== 'undefined') {
      window.location.replace(ROUTER.WELCOME);
    }
  };

  return {
    isAuthenticated,
    isLoading: loginMutation.isPending,
    error: loginMutation.error?.message || null,
    login,
    logout,
  };
};
