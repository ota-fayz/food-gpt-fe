import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useFormContext } from 'react-hook-form'
import { RadioGroup } from '../../../../../components/radio'

const MOTIVATION_OPTIONS = [
	{value: 'ENERGY', label: '🚀 Зарядиться энергией'},
	{value: 'MOTIVATION', label: '💪 Быть мотивированным'},
	{value: 'CONFIDENCE', label: '😊 Обрести уверенность в теле'},
	{value: 'EAT_BETTER', label: '🥦 Питаться полезнее'}
]

export const Motivation = () => {
	const {control} = useFormContext()

	return (
		<>
			<Stack spacing={1}>
				<Typography variant="h5" component="h1">
					Чего вы хотите достичь?
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Это поможет создать персональный план для вас.
				</Typography>
			</Stack>
			<RadioGroup
				control={control}
				name="motivation"
				options={MOTIVATION_OPTIONS}
			/>
		</>
	)
}