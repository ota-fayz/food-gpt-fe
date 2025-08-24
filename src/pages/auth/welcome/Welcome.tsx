import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { Link } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress'
import Alert from '@mui/material/Alert'

import { Container, Wrapper } from './styles'
import ImageSalad from '../../../assets/images/salad-with-macronutrients.webp'
import { ROUTER } from '../../../constants/router.ts'
import { useAutoAuth } from '../../../hooks/useAutoAuth'

export const Welcome = () => {
	const { isAuthenticated, isLoading, error } = useAutoAuth()

	return (
		<Container>
			<img className="img" src={ImageSalad} alt="Salad with macronutrients" />
			<Wrapper>
				<Typography variant="h5" component="h1">
					Легкий подсчет калорий с AI
				</Typography>
				<Typography variant="body1">
					Просто сделайте фото своего блюда, а AI сделает всё остальное
				</Typography>
				<Typography variant="body2">
					Получите персональный план за минуту
				</Typography>
				
				{/* Telegram Auth Status */}
				{isLoading && (
					<Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 2 }}>
						<CircularProgress size={20} />
						<Typography variant="body2" color="text.secondary">
							Авторизация через Telegram...
						</Typography>
					</Stack>
				)}
				
				{error && (
					<Alert severity="error" sx={{ mt: 2 }}>
						Ошибка авторизации: {error}
					</Alert>
				)}
				
				{isAuthenticated && (
					<Alert severity="success" sx={{ mt: 2 }}>
						Успешно авторизован через Telegram!
					</Alert>
				)}
				
				<Stack direction="column" spacing={1}>
					<Button
						variant="contained"
						size="large"
						component={Link}
						to={ROUTER.REGISTRATION}
						disabled={isLoading}
					>
						Начать
					</Button>
				</Stack>
			</Wrapper>
		</Container>
	)
}
