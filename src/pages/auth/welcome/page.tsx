import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { Link } from 'react-router-dom'
import { withGuestGate } from '../../../hoc/withGuestGate'

import { Container, Wrapper } from './styles'
import ImageSalad from '../../../assets/images/salad-with-macronutrients.webp'
import { ROUTER } from '../../../constants/router.ts'

const Welcome = () => {
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
				<Stack direction="column" spacing={1}>
					<Button
						variant="contained"
						size="large"
						component={Link}
						to={ROUTER.REGISTRATION}
					>
						Начать
					</Button>
					{import.meta.env.DEV && (
						<Button
							variant="outlined"
							color="secondary"
							size="small"
							component={Link}
							to={ROUTER.TELEGRAM_TEST}
						>
							Debug Telegram
						</Button>
					)}
				</Stack>
			</Wrapper>
		</Container>
	)
}

export default withGuestGate(Welcome)
