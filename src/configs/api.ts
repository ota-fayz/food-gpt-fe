import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  timeout: 15000
})

api.interceptors.request.use((config) => {
  // TODO: attach auth headers if needed
  return config
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error)
  }
)

export type ApiInstance = typeof api


