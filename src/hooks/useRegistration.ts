import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { authApi } from '../api/auth'
import { type RegistrationData } from '../types/profile'
import { ROUTER } from '../constants/router'
import { queryKeys } from '../configs/queryKeys'
import { setAuthToken } from '../utils/auth'

export const useRegistration = () => {
	const navigate = useNavigate()
	const queryClient = useQueryClient()

	const registrationMutation = useMutation({
		mutationFn: (data: RegistrationData) => authApi.register(data),
		onSuccess: (response) => {
			// Сохраняем токен
			setAuthToken(response.token)
			
			// Инвалидируем кеш профиля
			queryClient.invalidateQueries({ queryKey: queryKeys.profile })
			
			// Перенаправляем на дашборд
			navigate(ROUTER.DASHBOARD)
		},
		onError: (error) => {
			console.error('Registration error:', error)
			// Здесь можно добавить обработку ошибок
		}
	})

	return {
		register: registrationMutation.mutate,
		isLoading: registrationMutation.isPending,
		error: registrationMutation.error
	}
}
