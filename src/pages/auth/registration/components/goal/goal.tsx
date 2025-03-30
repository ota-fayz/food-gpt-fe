import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import { Controller, useFormContext } from 'react-hook-form'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'

export const Goal = () => {
	const {control} = useFormContext()

	return (
		<>
			<Stack spacing={1}>
				<Typography variant="h5" component="h1" id="goal-radio-buttons-group-label">
					Ваша главная цель?
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Это поможет создать персональный план для вас.
				</Typography>
			</Stack>
			<FormControl>
				{/* TODO: Make reusable component */}
				<Controller
					name="goal"
					control={control}
					render={({field}) => (
						<RadioGroup
							{...field}
							aria-labelledby="goal-radio-buttons-group-label"
							value={field.value ?? null}
						>
							<FormControlLabel value="LOSE" control={<Radio />} label="Похудеть" />
							<FormControlLabel value="MAINTAIN" control={<Radio />} label="Удержать" />
							<FormControlLabel value="GAIN" control={<Radio />} label="Набрать вес" />
						</RadioGroup>
					)}
				/>
			</FormControl>
		</>
	)
}