import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useFormContext } from 'react-hook-form'
import { RadioGroup } from '../../../../../components/radio'

const TRACKING_DURATION_OPTIONS = [
	{value: '50', label: '🏆 50 дней подряд (Эпично)'},
	{value: '30', label: '🔥 30 дней подряд (Великолепно)'},
	{value: '14', label: '🤩 14 дней подряд (Отлично)'},
	{value: '7', label: '👍 7 дней подряд (Хорошо)'}
]

export const TrackingDuration = () => {
	const {control} = useFormContext()

	return (
		<>
			<Stack spacing={1}>
				<Typography variant="h5" component="h1">
					Сколько дней подряд вы сможете вести учёт?
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Так мы настроим план, чтобы достичь вашей цели.
				</Typography>
			</Stack>
			<RadioGroup
				control={control}
				name="trackingDuration"
				options={TRACKING_DURATION_OPTIONS}
			/>
		</>
	)
}