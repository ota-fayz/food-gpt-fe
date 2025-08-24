import { useQuery } from '@tanstack/react-query';
import { useTelegram } from './useTelegram';
import { authApi } from '../api/auth';
import { STORAGE_KEYS } from '../constants/storage';

export const useAutoAuth = () => {
  const { isWebApp, isInitialized, rawInitData } = useTelegram();
  
  // Check if user is already authenticated
  const isAuthenticated = Boolean(
    typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN) : null
  );

  // Auto-login query
  const autoLoginQuery = useQuery({
    queryKey: ['autoLogin'],
    queryFn: async () => {
      console.log('🚀 Starting auto-login query...');
      const response = await authApi.loginWithTelegram();
      
      // Store the token
      localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, response.token);
      console.log('✅ Auto-login successful, token stored');
      
      return response;
    },
    enabled: isInitialized && isWebApp && !isAuthenticated && Boolean(rawInitData),
    retry: false,
    staleTime: Infinity, // Don't refetch once successful
    gcTime: Infinity, // Keep in cache indefinitely
  });

  return {
    isAuthenticated,
    isLoading: autoLoginQuery.isLoading,
    error: autoLoginQuery.error?.message || null,
    data: autoLoginQuery.data,
  };
};
