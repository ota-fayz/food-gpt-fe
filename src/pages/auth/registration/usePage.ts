import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { type ZodType } from 'zod'

import { type FormTypes } from './form.schema'
import { STEPS } from './constants'
import { ROUTER } from '../../../constants/router.ts'
import { useTelegram } from '../../../hooks/useTelegram'
import { useRegistration } from '../../../hooks/useRegistration'
import { type RegistrationData } from '../../../types/profile'

export const usePage = () => {
	const [stepIndex, setStepIndex] = useState(0)
	const [formData, setFormData] = useState<Partial<RegistrationData>>({})
	const navigate = useNavigate()
	const currentStep = STEPS[stepIndex]
	const { register, isLoading, error } = useRegistration()
	const { 
		isWebApp, 
		setMainButton, 
		hideMainButton, 
		setBackButton, 
		hideBackButton,
		user,
		impactFeedback,
		notificationFeedback 
	} = useTelegram()

	const form = useForm<FormTypes>({
		resolver: zodResolver(currentStep.schema as ZodType<FormTypes>),
		mode: 'onChange',
		defaultValues: {
			...currentStep.defaultValues,
			// Восстанавливаем данные из предыдущих шагов
			...(formData as Partial<FormTypes>)
		}
	})

	// Обновляем форму при изменении шага
	useEffect(() => {
		form.reset({
			...currentStep.defaultValues,
			...(formData as Partial<FormTypes>)
		})
	}, [stepIndex, formData, currentStep.defaultValues, form.reset])

	const handleBack = () => {
		impactFeedback('light')
		if (stepIndex === 0) {
			navigate(ROUTER.WELCOME)
		} else {
			// При переходе назад не теряем данные
			setStepIndex(stepIndex - 1)
		}
	}

	const onSubmit = (data: FormTypes) => {
		console.log('Submitted data:', data)
		console.log('Telegram user:', user) // Log Telegram user data
		
		impactFeedback('medium')
		
		// Сохраняем данные текущего шага
		const updatedFormData = { ...formData, ...data }
		setFormData(updatedFormData)
		
		if (stepIndex === STEPS.length - 1) {
			// На последнем шаге отправляем все данные на сервер
			const finalData = updatedFormData as RegistrationData
			console.log('Final registration data:', finalData)
			
			register(finalData)
			notificationFeedback('success')
		} else {
			setStepIndex(stepIndex + 1)
		}
	}

	// Set up Telegram buttons
	useEffect(() => {
		if (isWebApp) {
			// Always show back button, on first step leads to Welcome
			setBackButton(handleBack)

			// Set up main button
			setMainButton({
				text: stepIndex === STEPS.length - 1 ? 'Завершить' : 'Далее',
				isVisible: true,
				isActive: form.formState.isValid && !isLoading,
				onClick: form.handleSubmit(onSubmit)
			})

			// Clean up on unmount
			return () => {
				hideMainButton()
				hideBackButton()
			}
		}
	}, [isWebApp, stepIndex, form.formState.isValid, isLoading, form.handleSubmit, onSubmit, handleBack, setMainButton, hideMainButton, setBackButton, hideBackButton])

	const CurrentStep = STEPS[stepIndex].component
	const progress = (stepIndex + 1) / STEPS.length * 100

	return {
		progress,
		handleBack,
		form,
		onSubmit,
		CurrentStep,
		isWebApp,
		user,
		isLoading,
		error
	}
}