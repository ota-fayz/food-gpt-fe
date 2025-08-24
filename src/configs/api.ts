import axios from 'axios'
import { STORAGE_KEYS } from '../constants/storage'
import { ROUTER } from '../constants/router'
import { clearAuthToken } from '../utils/auth'
import { telegramService } from './telegram'

// Determine API URL based on environment
const getApiUrl = () => {
  // If VITE_API_URL is set, use it
  if (import.meta.env.VITE_API_URL) {
    console.log('🌐 Using VITE_API_URL:', import.meta.env.VITE_API_URL);
    return import.meta.env.VITE_API_URL;
  }
  
  // In production, use a default API URL
  if (import.meta.env.PROD) {
    // You should replace this with your actual production API URL
    const prodUrl = 'https://api.food-gpt.com'; // TODO: Replace with actual API URL
    console.log('🌐 Using production API URL:', prodUrl);
    return prodUrl;
  }
  
  // In development, use localhost
  const devUrl = 'http://localhost:8080';
  console.log('🌐 Using development API URL:', devUrl);
  return devUrl;
};

export const api = axios.create({
  baseURL: getApiUrl(),
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
    console.error('❌ API Error:', {
      url: error.config?.url,
      method: error.config?.method,
      status: error.response?.status,
      message: error.message,
      isNetworkError: !error.response
    });

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


