import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { type ZodType } from 'zod'

import { type FormTypes } from './form.schema'
import { STEPS } from './constants'
import { ROUTER } from '../../../constants/router.ts'
import { useTelegram } from '../../../hooks/useTelegram'

export const usePage = () => {
	const [stepIndex, setStepIndex] = useState(0)
	const navigate = useNavigate()
	const currentStep = STEPS[stepIndex]
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
		defaultValues: currentStep.defaultValues
	})

	const handleBack = () => {
		impactFeedback('light')
		if (stepIndex === 0) {
			navigate(-1)
		} else {
			setStepIndex(stepIndex - 1)
		}
	}

	const onSubmit = (data: FormTypes) => {
		console.log('Submitted data:', data)
		console.log('Telegram user:', user) // Log Telegram user data
		
		impactFeedback('medium')
		
		if (stepIndex === STEPS.length - 1) {
			notificationFeedback('success')
			navigate(ROUTER.DASHBOARD)
		} else {
			setStepIndex(stepIndex + 1)
		}
	}

	// Set up Telegram buttons
	useEffect(() => {
		if (isWebApp) {
			// Set up back button
			if (stepIndex > 0) {
				setBackButton(handleBack)
			} else {
				hideBackButton()
			}

			// Set up main button
			setMainButton({
				text: stepIndex === STEPS.length - 1 ? 'Завершить' : 'Далее',
				isVisible: true,
				isActive: form.formState.isValid,
				onClick: form.handleSubmit(onSubmit)
			})

			// Clean up on unmount
			return () => {
				hideMainButton()
				hideBackButton()
			}
		}
	}, [isWebApp, stepIndex, form.formState.isValid, form.handleSubmit, onSubmit, handleBack, setMainButton, hideMainButton, setBackButton, hideBackButton])

	const CurrentStep = STEPS[stepIndex].component
	const progress = (stepIndex + 1) / STEPS.length * 100

	return {
		progress,
		handleBack,
		form,
		onSubmit,
		CurrentStep,
		isWebApp,
		user
	}
}