import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { Input } from '../../../../../components/input'
import { useFormContext } from 'react-hook-form'

export const Age = () => {
	const {control} = useFormContext()

	return (
		<>
			<Stack spacing={1}>
				<Typography variant="h5" component="h1">
					Сколько вам лет?
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Эти данные помогут сделать план более персональным.
				</Typography>
			</Stack>
			<Input
				control={control}
				name="age"
				label="Возраст"
				type="number"
			/>
		</>
	)
}