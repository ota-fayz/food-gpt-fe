import {
  init,
  isTMA,
  retrieveLaunchParams,
  // Components
  mountMiniApp,
  closeMiniApp,
  miniAppReady,
  // Theme params
  mountThemeParams,
  themeParamsState,
  isThemeParamsDark,
  isThemeParamsMounted,
  // Main button
  mountMainButton,
  onMainButtonClick,
  setMainButtonParams,
  isMainButtonMounted,
  // Back button
  mountBackButton,
  onBackButtonClick,
  showBackButton,
  hideBackButton as hideBackButtonInternal,
  isBackButtonMounted,
  // Haptic feedback
  hapticFeedbackImpactOccurred,
  hapticFeedbackNotificationOccurred,
  hapticFeedbackSelectionChanged,
  isHapticFeedbackSupported,
  // Cloud storage
  setCloudStorageItem,
  getCloudStorageItem,
  isCloudStorageSupported,
  // Popup
  openPopup,
  isPopupSupported,
} from '@telegram-apps/sdk';

import type { TelegramWebApp, TelegramUser, TelegramInitData, TelegramThemeParams } from '../types/telegram';

// Narrow type for launch params to avoid using any
interface TelegramLaunchParams {
  initData?: TelegramInitData;
}

export class TelegramService {
  private static instance: TelegramService;
  private isInitialized = false;
  private _user: TelegramUser | null = null;
  private _launchParams: TelegramLaunchParams | null = null;

  static getInstance(): TelegramService {
    if (!TelegramService.instance) {
      TelegramService.instance = new TelegramService();
    }
    return TelegramService.instance;
  }

  async initialize(): Promise<void> {
    if (this.isInitialized) return;

    try {
      // Check if we're in Telegram environment
      if (!isTMA()) {
        console.log('Not running in Telegram environment');
        return;
      }

      // Initialize the SDK
      init({
        acceptCustomStyles: true,
      });

      // Get launch parameters
      try {
        this._launchParams = retrieveLaunchParams() as unknown as TelegramLaunchParams;
      } catch (error) {
        console.warn('Failed to retrieve launch params:', error);
      }

      // Initialize components that are available
      try {
        mountMiniApp();
        miniAppReady();
      } catch (error) {
        console.warn('Failed to mount mini app:', error);
      }
      
      try {
        mountThemeParams();
      } catch (error) {
        console.warn('Failed to mount theme params:', error);
      }
      
      try {
        mountMainButton();
      } catch (error) {
        console.warn('Failed to mount main button:', error);
      }
      
      try {
        mountBackButton();
      } catch (error) {
        console.warn('Failed to mount back button:', error);
      }

      // Extract user data from launch params
      if (this._launchParams?.initData?.user) {
        this._user = this._launchParams.initData.user;
      }

      this.isInitialized = true;
    } catch (error) {
      console.error('Failed to initialize Telegram SDK:', error);
      // Don't throw, allow app to work outside Telegram
    }
  }

  get isWebApp(): boolean {
    return this.isInitialized && isTMA();
  }

  get webApp(): TelegramWebApp | null {
    return window.Telegram?.WebApp || null;
  }

  get currentUser(): TelegramUser | null {
    return this._user;
  }

  get colorScheme(): 'light' | 'dark' {
    if (!this.isInitialized || !isThemeParamsMounted()) {
      return 'light';
    }
    return isThemeParamsDark() ? 'dark' : 'light';
  }

  get theme(): TelegramThemeParams | {} {
    if (!this.isInitialized || !isThemeParamsMounted()) {
      return {};
    }
    return themeParamsState();
  }

  // Main Button controls
  setMainButton(params: {
    text: string;
    isVisible?: boolean;
    isActive?: boolean;
    onClick?: () => void;
  }): void {
    if (!isMainButtonMounted()) return;

    if (params.onClick) {
      onMainButtonClick(params.onClick);
    }

    setMainButtonParams({
      text: params.text,
      isVisible: params.isVisible ?? true,
      isEnabled: params.isActive ?? true,
    });
  }

  hideMainButton(): void {
    if (isMainButtonMounted()) {
      setMainButtonParams({ isVisible: false });
    }
  }

  showMainButton(): void {
    if (isMainButtonMounted()) {
      setMainButtonParams({ isVisible: true });
    }
  }

  // Back Button controls
  setBackButton(onClick?: () => void): void {
    if (!isBackButtonMounted()) return;

    showBackButton();
    if (onClick) {
      onBackButtonClick(onClick);
    }
  }

  hideBackButton(): void {
    if (isBackButtonMounted()) {
      hideBackButtonInternal();
    }
  }

  // Haptic feedback
  impactFeedback(style: 'light' | 'medium' | 'heavy' = 'medium'): void {
    if (isHapticFeedbackSupported()) {
      hapticFeedbackImpactOccurred(style);
    }
  }

  notificationFeedback(type: 'error' | 'success' | 'warning'): void {
    if (isHapticFeedbackSupported()) {
      hapticFeedbackNotificationOccurred(type);
    }
  }

  selectionFeedback(): void {
    if (isHapticFeedbackSupported()) {
      hapticFeedbackSelectionChanged();
    }
  }

  // Cloud Storage
  async setCloudData(key: string, value: string): Promise<boolean> {
    if (!isCloudStorageSupported()) {
      console.warn('Cloud storage not supported');
      return false;
    }

    try {
      await setCloudStorageItem(key, value);
      return true;
    } catch (error) {
      console.error('Failed to set cloud data:', error);
      return false;
    }
  }

  async getCloudData(key: string): Promise<string | null> {
    if (!isCloudStorageSupported()) {
      console.warn('Cloud storage not supported');
      return null;
    }

    try {
      return await getCloudStorageItem(key);
    } catch (error) {
      console.error('Failed to get cloud data:', error);
      return null;
    }
  }

  // Popups
  async showAlert(message: string): Promise<void> {
    if (isPopupSupported()) {
      try {
        await openPopup({
          title: 'Внимание',
          message,
          buttons: [{ id: 'ok', type: 'ok' }],
        });
      } catch (error) {
        console.warn('Failed to show popup, using fallback:', error);
        alert(message);
      }
    } else {
      alert(message);
    }
  }

  async showConfirm(message: string): Promise<boolean> {
    if (isPopupSupported()) {
      try {
        const result = await openPopup({
          title: 'Подтверждение',
          message,
          buttons: [
            { id: 'ok', type: 'ok' },
            { id: 'cancel', type: 'cancel' },
          ],
        });
        return result === 'ok';
      } catch (error) {
        console.warn('Failed to show confirm popup, using fallback:', error);
        return confirm(message);
      }
    } else {
      return confirm(message);
    }
  }

  // Utils
  openLink(url: string): void {
    if (this.isWebApp && window.Telegram?.WebApp) {
      window.Telegram.WebApp.openLink(url);
    } else {
      window.open(url, '_blank');
    }
  }

  close(): void {
    try {
      closeMiniApp();
    } catch (error) {
      console.warn('Failed to close mini app:', error);
    }
  }

  // Get launch parameters
  getLaunchParams(): TelegramLaunchParams | null {
    return this._launchParams;
  }
}

export const telegramService = TelegramService.getInstance();