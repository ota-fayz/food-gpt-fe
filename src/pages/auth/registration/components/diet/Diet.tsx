import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useFormContext } from 'react-hook-form'
import { RadioGroup } from '../../../../../components/radio'

const DIET_OPTIONS = [
	{value: 'NONE', label: '🍗 Без диеты'},
	{value: 'PESCETARIAN', label: '🐟 Пескетарианская'},
	{value: 'VEGETARIAN', label: '🥗 Вегетарианская'},
	{value: 'VEGAN', label: '🌱 Веганская'}
]

export const Diet = () => {
	const {control} = useFormContext()

	return (
		<>
			<Stack spacing={1}>
				<Typography variant="h5" component="h1">
					Вы придерживаетесь какой-то диеты?
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Так мы настроим план, чтобы достичь вашей цели.
				</Typography>
			</Stack>
			<RadioGroup
				control={control}
				name="diet"
				options={DIET_OPTIONS}
			/>
		</>
	)
}