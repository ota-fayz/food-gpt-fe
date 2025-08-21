import { STORAGE_KEYS } from '../constants/storage'

export function saveAuthToken(token: string) {
  localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token)
}

export function getAuthToken(): string | null {
  return localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN)
}

export function clearAuthToken() {
  localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN)
}

export function setAuthToken(token: string) {
  localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token)
}


