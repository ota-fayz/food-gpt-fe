import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useFormContext } from 'react-hook-form'
import { RadioGroup } from '../../../../../components/radio'

const GOAL_OPTIONS = [
	{value: 'LOSE', label: 'Похудеть'},
	{value: 'MAINTAIN', label: 'Удержать'},
	{value: 'GAIN', label: 'Набрать вес'}
]

export const Goal = () => {
	const {control} = useFormContext()

	return (
		<>
			<Stack spacing={1}>
				<Typography variant="h5" component="h1">
					Ваша главная цель?
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Это поможет создать персональный план для вас.
				</Typography>
			</Stack>
			<RadioGroup
				control={control}
				name="goal"
				options={GOAL_OPTIONS}
			/>
		</>
	)
}