import { api } from '../configs/api'
import { type RegistrationData, type RegistrationResponse } from '../types/profile'

export interface TelegramAuthResponse {
  token: string
  user: { id: string }
}

export const authApi = {
  loginWithTelegram: async (): Promise<TelegramAuthResponse> => {
    console.log('🚀 Starting Telegram login process...')
    const { data } = await api.post('/api/v1/auth/telegram')
    console.log('✅ Telegram login successful:', data)
    return data
  },
  
  register: async (registrationData: RegistrationData): Promise<RegistrationResponse> => {
    console.log('📝 Starting registration process...', registrationData)
    const { data } = await api.post('/api/v1/auth/register', registrationData)
    console.log('✅ Registration successful:', data)
    return data
  }
}


