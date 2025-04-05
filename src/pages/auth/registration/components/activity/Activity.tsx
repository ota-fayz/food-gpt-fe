import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useFormContext } from 'react-hook-form'
import { RadioGroup } from '../../../../../components/radio'

const ACTIVITY_OPTIONS = [
	{
		value: 'LOW',
		label: 'Лёгкая · 1–2 раза в неделю'
	},
	{
		value: 'MEDIUM',
		label: 'Умеренная · 3–4 раза в неделю'
	},
	{
		value: 'HIGH',
		label: 'Высокая · 4–5 раз в неделю'
	},
	{
		value: 'VERY_HIGH',
		label: 'Очень высокая · 6–7 раз в неделю'
	}
]

export const Activity = () => {
	const {control} = useFormContext()

	return (
		<>
			<Stack spacing={1}>
				<Typography variant="h5" component="h1">
					Какая у вас активность?
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Ваш уровень активности помогает точнее рассчитать потребность в калориях.
				</Typography>
			</Stack>
			<RadioGroup
				control={control}
				name="activity"
				options={ACTIVITY_OPTIONS}
			/>
		</>
	)
}