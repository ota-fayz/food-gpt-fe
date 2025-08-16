import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { Input } from '../../../../../components/input'
import { useFormContext } from 'react-hook-form'

export const Target = () => {
	const {control} = useFormContext()

	return (
		<>
			<Stack spacing={1}>
				<Typography variant="h5" component="h1">
					Установите цель по весу
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Так мы настроим план, чтобы достичь вашей цели.
				</Typography>
			</Stack>
			<Input
				control={control}
				name="targetWeight"
				label="Целевой вес (в кг)"
				type="number"
			/>
		</>
	)
}