import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

import { Container, Wrapper } from './style.ts'
import ImageSalad from '../../../assets/images/salad_with_macronutrients.png'
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
				<Button
					variant="contained"
					size="large"
					component={Link}
					to={ROUTER.REGISTRATION}
				>
					Начать
				</Button>
			</Wrapper>
		</Container>
	)
}

export default Welcome
