import { api } from '../configs/api'
import { type RegistrationData, type RegistrationResponse } from '../types/profile'

export interface TelegramAuthResponse {
  token: string
  user: { id: string }
}

export const authApi = {
  loginWithTelegram: async (initData: string): Promise<TelegramAuthResponse> => {
    const { data } = await api.post('/api/v1/auth/telegram', { init_data: initData })
    return data
  },
  
  register: async (registrationData: RegistrationData): Promise<RegistrationResponse> => {
    const { data } = await api.post('/api/v1/auth/register', registrationData)
    return data
  }
}


