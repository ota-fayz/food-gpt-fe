import { api } from '../configs/api'

export const usersApi = {
  getProfile: async () => {
    const { data } = await api.get('/api/v1/users/profile')
    return data
  }
}


