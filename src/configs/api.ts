import axios from 'axios'
import { STORAGE_KEYS } from '../constants/storage'
import { ROUTER } from '../constants/router'
import { clearAuthToken } from '../utils/auth'
import { telegramService } from './telegram'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080',
  timeout: 15000
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN)
  
  // Add Bearer token if available
  if (token) {
    config.headers = config.headers ?? {}
    config.headers.Authorization = `Bearer ${token}`
    console.log('🔐 Adding Bearer token to request:', config.url)
  }
  
  // Add Telegram init data if available and no Bearer token
  if (!token && telegramService.isWebApp) {
    const rawInitData = telegramService.getRawInitData()
    if (rawInitData) {
      config.headers = config.headers ?? {}
      config.headers.Authorization = `tma ${rawInitData}`
      console.log('🔐 Adding Telegram init data to request:', config.url)
    }
  }
  
  return config
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      clearAuthToken()
      if (typeof window !== 'undefined') {
        const currentPathname = window.location.pathname
        if (currentPathname !== ROUTER.WELCOME) {
          window.location.replace(ROUTER.WELCOME)
        }
      }
    }
    return Promise.reject(error)
  }
)

export type ApiInstance = typeof api


