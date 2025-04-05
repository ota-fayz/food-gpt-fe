import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useFormContext } from 'react-hook-form'

import { RadioGroup } from '../../../../../components/radio'

const GENDER_OPTIONS = [
	{value: 'MALE', label: 'Мужской'},
	{value: 'FEMALE', label: 'Женский'}
]

export const Gender = () => {
	const {control} = useFormContext()

	return (
		<>
			<Stack spacing={1}>
				<Typography variant="h5" component="h1">
					Выберите ваш пол
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Это поможет создать персональный план для вас.
				</Typography>
			</Stack>
			<RadioGroup
				options={GENDER_OPTIONS}
				control={control}
				name="gender"
			/>
		</>
	)
}