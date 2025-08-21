import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import LinearProgress from '@mui/material/LinearProgress'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Alert from '@mui/material/Alert'
import { FormProvider } from 'react-hook-form'

import { Form, Wrapper } from './styles'
import { usePage } from './usePage'

const Registration = () => {
	const {handleBack, onSubmit, CurrentStep, form, progress, isWebApp, user, isLoading, error} = usePage()

	return (
		<FormProvider {...form}>
			<Form onSubmit={form.handleSubmit(onSubmit)}>
				<Stack spacing={2}>
					<Wrapper>
						{!isWebApp && (
							<IconButton aria-label="back" onClick={handleBack}>
								<ArrowBackIcon />
							</IconButton>
						)}
						<Box width="100%">
							<LinearProgress variant="determinate" value={progress} />
						</Box>
					</Wrapper>
					{/* Show user info if available from Telegram */}
					{isWebApp && user && (
						<Box sx={{ p: 1, bgcolor: 'background.paper', borderRadius: 1 }}>
							<Stack direction="row" spacing={1} alignItems="center">
								<Box>
									Привет, {user.first_name}!
								</Box>
							</Stack>
						</Box>
					)}
					
					{/* Show error if registration failed */}
					{error && (
						<Alert severity="error">
							Ошибка при регистрации. Попробуйте еще раз.
						</Alert>
					)}
					
					<CurrentStep />
				</Stack>
				{!isWebApp && (
					<Button 
						type="submit" 
						disabled={!form.formState.isValid || isLoading} 
						variant="contained" 
						size="large"
					>
						{isLoading ? 'Загрузка...' : 'Далее'}
					</Button>
				)}
			</Form>
		</FormProvider>
	)
}

export default Registration
