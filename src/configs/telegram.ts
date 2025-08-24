import {
  init,
  isTMA,
  retrieveLaunchParams,
  retrieveRawInitData,
  // Components
  closeMiniApp,
  miniAppReady,
  // Theme params
  themeParamsState,
  isThemeParamsDark,
  isThemeParamsMounted,
  // Main button
  onMainButtonClick,
  setMainButtonParams,
  isMainButtonMounted,
  // Back button
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
  private _rawInitData: string | null = null;

  static getInstance(): TelegramService {
    if (!TelegramService.instance) {
      TelegramService.instance = new TelegramService();
    }
    return TelegramService.instance;
  }

  async initialize(): Promise<void> {
    if (this.isInitialized) {
      console.log('ℹ️ Telegram service already initialized');
      return;
    }

    try {
      // Check if we're in Telegram environment
      if (!isTMA()) {
        console.log('⚠️ Not running in Telegram environment - skipping initialization');
        return;
      }

      console.log('🚀 Initializing Telegram service...');

      // Initialize the SDK
      init({
        acceptCustomStyles: true,
      });

      // Get launch parameters
      try {
        this._launchParams = retrieveLaunchParams() as unknown as TelegramLaunchParams;
        console.log('✅ Telegram launch params retrieved successfully:', this._launchParams);
      } catch (error) {
        console.warn('Failed to retrieve launch params:', error);
      }

      // Get raw init data for authorization
      try {
        const rawInitData = retrieveRawInitData();
        this._rawInitData = rawInitData || null;
        console.log('✅ Telegram raw init data retrieved successfully:', this._rawInitData);
      } catch (error) {
        console.warn('Failed to retrieve raw init data:', error);
      }

      // Initialize the SDK. This should mount all available components.
      init();
      console.log('✅ Telegram SDK initialized. All available components should be mounted.');

      // We no longer need explicit mount calls here, as init() handles it.
      // We can still call miniAppReady() if it's a separate action.
      miniAppReady();
      console.log('✅ Mini app ready signal sent.');

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

  get theme(): TelegramThemeParams | Record<string, never> {
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

  // Get raw init data for authorization
  getRawInitData(): string | null {
    return this._rawInitData;
  }
}

export const telegramService = TelegramService.getInstance();