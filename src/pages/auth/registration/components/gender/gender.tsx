import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import { Controller, useFormContext } from 'react-hook-form'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'

export const Gender = () => {
	const {control} = useFormContext()

	return (
		<>
			<Stack spacing={1}>
				<Typography variant="h5" component="h1" id="gender-radio-buttons-group-label">
					Выберите ваш пол
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Это поможет создать персональный план для вас.
				</Typography>
			</Stack>
			<FormControl>
				{/* TODO: Make reusable component */}
				<Controller
					name="gender"
					control={control}
					render={({field}) => (
						<RadioGroup
							{...field}
							aria-labelledby="gender-radio-buttons-group-label"
							value={field.value ?? null}
						>
							<FormControlLabel value="MALE" control={<Radio />} label="Мужской" />
							<FormControlLabel value="FEMALE" control={<Radio />} label="Женский" />
						</RadioGroup>
					)}
				/>
			</FormControl>
		</>
	)
}