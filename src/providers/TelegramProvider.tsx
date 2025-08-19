import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { ThemeProvider } from '@mui/material'
import { telegramService } from '../configs/telegram'
import { createAppTheme } from '../configs/theme'
import { useTelegram } from '../hooks/useTelegram'

interface TelegramContextValue {
  isInitialized: boolean
  colorScheme: 'light' | 'dark'
}

const TelegramContext = createContext<TelegramContextValue>({
  isInitialized: false,
  colorScheme: 'light'
})

interface TelegramProviderProps {
  children: ReactNode
}

export const TelegramProvider = ({ children }: TelegramProviderProps) => {
  const { isInitialized, colorScheme } = useTelegram()
  const [currentTheme, setCurrentTheme] = useState(() => createAppTheme('light'))

  useEffect(() => {
    if (isInitialized) {
      const newTheme = createAppTheme(colorScheme)
      setCurrentTheme(newTheme)
    }
  }, [isInitialized, colorScheme])

  // Handle viewport changes for responsive design
  useEffect(() => {
    if (isInitialized && telegramService.isWebApp) {
      const handleViewportChange = () => {
        // Update app height when viewport changes
        const viewport = window.Telegram?.WebApp?.viewportHeight
        if (viewport) {
          document.documentElement.style.setProperty('--tg-viewport-height', `${viewport}px`)
        }
      }

      // Set initial viewport height
      handleViewportChange()

      // Listen for viewport changes
      window.addEventListener('resize', handleViewportChange)
      
      return () => {
        window.removeEventListener('resize', handleViewportChange)
      }
    }
  }, [isInitialized])

  const contextValue: TelegramContextValue = {
    isInitialized,
    colorScheme
  }

  return (
    <TelegramContext.Provider value={contextValue}>
      <ThemeProvider theme={currentTheme}>
        {children}
      </ThemeProvider>
    </TelegramContext.Provider>
  )
}

export const useTelegramContext = () => {
  const context = useContext(TelegramContext)
  if (!context) {
    throw new Error('useTelegramContext must be used within a TelegramProvider')
  }
  return context
}
