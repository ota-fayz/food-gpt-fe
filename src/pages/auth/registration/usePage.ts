import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { type ZodType } from 'zod'

import { type FormTypes } from './form.schema'
import { STEPS } from './constants'

export const usePage = () => {
	const [stepIndex, setStepIndex] = useState(0)
	const navigate = useNavigate()
	const currentStep = STEPS[stepIndex]

	const form = useForm<FormTypes>({
		resolver: zodResolver(currentStep.schema as ZodType<FormTypes>),
		mode: 'onChange',
		defaultValues: currentStep.defaultValues
	})

	const handleBack = () => {
		if (stepIndex === 0) {
			navigate(-1)
		} else {
			setStepIndex(stepIndex - 1)
		}
	}

	const onSubmit = (data: FormTypes) => {
		console.log('Submitted data:', data)
		setStepIndex(stepIndex + 1)
	}

	const CurrentStep = STEPS[stepIndex].component
	const progress = (stepIndex + 1) / STEPS.length * 100

	return {
		progress,
		handleBack,
		form,
		onSubmit,
		CurrentStep
	}
}