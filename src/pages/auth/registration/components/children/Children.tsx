import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useFormContext } from 'react-hook-form'
import { RadioGroup } from '../../../../../components/radio'

const HAS_CHILDREN_OPTIONS = [
	{value: 'YES', label: 'Да'},
	{value: 'NO', label: 'Нет'}
]

export const Children = () => {
	const {control} = useFormContext()

	return (
		<>
			<Stack spacing={1}>
				<Typography variant="h5" component="h1">
					У вас есть дети?
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Это поможет создать персональный план для вас.
				</Typography>
			</Stack>
			<RadioGroup
				control={control}
				name="hasChildren"
				options={HAS_CHILDREN_OPTIONS}
			/>
		</>
	)
}