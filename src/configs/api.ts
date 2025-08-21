import axios from 'axios'
import { STORAGE_KEYS } from '../constants/storage'
import { ROUTER } from '../constants/router'
import { clearAuthToken } from '../utils/auth'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080',
  timeout: 15000
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN)
  if (token) {
    config.headers = config.headers ?? {}
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      clearAuthToken()
      try {
        if (typeof window !== 'undefined') {
          const current = new URL(window.location.href)
          if (current.pathname !== ROUTER.WELCOME) {
            window.location.replace(ROUTER.WELCOME)
          }
        }
      } catch {}
    }
    return Promise.reject(error)
  }
)

export type ApiInstance = typeof api


