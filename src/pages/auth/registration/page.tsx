import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import LinearProgress from '@mui/material/LinearProgress'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { FormProvider } from 'react-hook-form'

import { Form, Wrapper } from './styles'
import { usePage } from './usePage'

const Registration = () => {
	const {handleBack, onSubmit, CurrentStep, form, progress} = usePage()

	return (
		<FormProvider {...form}>
			<Form onSubmit={form.handleSubmit(onSubmit)}>
				<Stack spacing={2}>
					<Wrapper>
						<IconButton aria-label="back" onClick={handleBack}>
							<ArrowBackIcon />
						</IconButton>
						<Box width="100%">
							<LinearProgress variant="determinate" value={progress} />
						</Box>
					</Wrapper>
					<CurrentStep />
				</Stack>
				<Button type="submit" disabled={!form.formState.isValid} variant="contained" size="large">
					Далее
				</Button>
			</Form>
		</FormProvider>
	)
}

export default Registration
