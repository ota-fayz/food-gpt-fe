import { api } from '../../configs/api'

export interface TelegramAuthResponse {
  token: string
  user: { id: string }
}

export const authApi = {
  loginWithTelegram: async (initData: string): Promise<TelegramAuthResponse> => {
    const { data } = await api.post('/api/v1/auth/telegram', { init_data: initData })
    return data
  }
}


