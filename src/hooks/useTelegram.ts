import { useEffect, useState, useCallback } from 'react';
import { telegramService } from '../configs/telegram';
import type { TelegramUser, TelegramThemeParams } from '../types/telegram';

export interface UseTelegramReturn {
  isWebApp: boolean;
  user: TelegramUser | null;
  colorScheme: 'light' | 'dark';
  theme: TelegramThemeParams | Record<string, never>;
  isInitialized: boolean;
  rawInitData: string | null;
  setMainButton: (params: {
    text: string;
    isVisible?: boolean;
    isActive?: boolean;
    onClick?: () => void;
  }) => void;
  hideMainButton: () => void;
  showMainButton: () => void;
  setBackButton: (onClick?: () => void) => void;
  hideBackButton: () => void;
  impactFeedback: (style?: 'light' | 'medium' | 'heavy') => void;
  notificationFeedback: (type: 'error' | 'success' | 'warning') => void;
  selectionFeedback: () => void;
  showAlert: (message: string) => Promise<void>;
  showConfirm: (message: string) => Promise<boolean>;
  openLink: (url: string) => void;
  close: () => void;
  setCloudData: (key: string, value: string) => Promise<boolean>;
  getCloudData: (key: string) => Promise<string | null>;
}

export const useTelegram = (): UseTelegramReturn => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [colorScheme, setColorScheme] = useState<'light' | 'dark'>('light');
  const [theme, setTheme] = useState<TelegramThemeParams | Record<string, never>>({});
  const [user, setUser] = useState<TelegramUser | null>(null);

  useEffect(() => {
    const initTelegram = async () => {
      await telegramService.initialize();
      setIsInitialized(true);
      setColorScheme(telegramService.colorScheme);
      setTheme(telegramService.theme);
      setUser(telegramService.currentUser);
    };

    initTelegram();
  }, []);

  const setMainButton = useCallback((params: {
    text: string;
    isVisible?: boolean;
    isActive?: boolean;
    onClick?: () => void;
  }) => {
    telegramService.setMainButton(params);
  }, []);

  const hideMainButton = useCallback(() => {
    telegramService.hideMainButton();
  }, []);

  const showMainButton = useCallback(() => {
    telegramService.showMainButton();
  }, []);

  const setBackButton = useCallback((onClick?: () => void) => {
    telegramService.setBackButton(onClick);
  }, []);

  const hideBackButton = useCallback(() => {
    telegramService.hideBackButton();
  }, []);

  const impactFeedback = useCallback((style: 'light' | 'medium' | 'heavy' = 'medium') => {
    telegramService.impactFeedback(style);
  }, []);

  const notificationFeedback = useCallback((type: 'error' | 'success' | 'warning') => {
    telegramService.notificationFeedback(type);
  }, []);

  const selectionFeedback = useCallback(() => {
    telegramService.selectionFeedback();
  }, []);

  const showAlert = useCallback(async (message: string) => {
    return telegramService.showAlert(message);
  }, []);

  const showConfirm = useCallback(async (message: string) => {
    return telegramService.showConfirm(message);
  }, []);

  const openLink = useCallback((url: string) => {
    telegramService.openLink(url);
  }, []);

  const close = useCallback(() => {
    telegramService.close();
  }, []);

  const setCloudData = useCallback(async (key: string, value: string) => {
    return telegramService.setCloudData(key, value);
  }, []);

  const getCloudData = useCallback(async (key: string) => {
    return telegramService.getCloudData(key);
  }, []);

  return {
    isWebApp: telegramService.isWebApp,
    user,
    colorScheme,
    theme,
    isInitialized,
    rawInitData: telegramService.getRawInitData(),
    setMainButton,
    hideMainButton,
    showMainButton,
    setBackButton,
    hideBackButton,
    impactFeedback,
    notificationFeedback,
    selectionFeedback,
    showAlert,
    showConfirm,
    openLink,
    close,
    setCloudData,
    getCloudData,
  };
};
