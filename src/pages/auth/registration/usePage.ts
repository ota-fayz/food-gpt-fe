import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { type FormTypes, schema } from './form.schema.ts'
import { zodResolver } from '@hookform/resolvers/zod'

export const usePage = () => {
	const [progress, setProgress] = useState(0)
	const navigate = useNavigate()

	const {
		handleSubmit,
		formState: {isValid},
		control
	} = useForm<FormTypes>({
		resolver: zodResolver(schema),
		mode: 'onChange',
		defaultValues: {
			gender: null
		}
	})

	const handleBack = () => {
		if (progress === 0) {
			navigate(-1)
		} else {
			setProgress(progress - 10)
		}
	}

	const onSubmit = (data: FormTypes) => {
		console.log('Submitted data:', data)
		setProgress(progress + 10)
	}

	return {
		handleBack,
		progress,
		isValid,
		onSubmit,
		control,
		handleSubmit
	}
}