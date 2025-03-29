import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import LinearProgress from '@mui/material/LinearProgress'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Radio from '@mui/material/Radio'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import RadioGroup from '@mui/material/RadioGroup'
import Typography from '@mui/material/Typography'
import { Controller } from 'react-hook-form'

import { Form, Wrapper } from './style'
import { usePage } from './usePage.ts'

const Registration = () => {
	const {progress, handleBack, onSubmit, isValid, handleSubmit, control} = usePage()

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<Stack spacing={2}>
				<Wrapper>
					<IconButton aria-label="back" onClick={handleBack}>
						<ArrowBackIcon />
					</IconButton>
					<Box width="100%">
						<LinearProgress variant="determinate" value={progress} />
					</Box>
				</Wrapper>
				<Stack spacing={1}>
					<Typography variant="h5" component="h1" id="gender-radio-buttons-group-label">
						Выберите ваш пол
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Это поможет создать персональный план для вас.
					</Typography>
				</Stack>
				<Stack>
					<FormControl>
						<Controller
							name="gender"
							control={control}
							render={({field}) => (
								<RadioGroup
									aria-labelledby="gender-radio-buttons-group-label"
									{...field}
								>
									<FormControlLabel value="MALE" control={<Radio />} label="Мужской" />
									<FormControlLabel value="FEMALE" control={<Radio />} label="Женский" />
								</RadioGroup>
							)}
						/>
					</FormControl>
				</Stack>
			</Stack>
			<Button type="submit" disabled={!isValid} variant="contained" size="large">
				Далее
			</Button>
		</Form>
	)
}

export default Registration
