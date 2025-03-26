import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import { Container, Wrapper } from './style.ts'
import ImageSalad from '../../../assets/images/salad_with_macronutrients.png'

const Welcome = () => {
	return (
		<Container>
			<img className="img" src={ImageSalad} alt="Salad with macronutrients" />
			<Wrapper>
				<Typography variant="h4" align="center">
					Легкий подсчет калорий с Al
				</Typography>
				<Typography variant="subtitle1" align="center">
					Просто сделайте фото своего блюда, а Al сделает все остальное
				</Typography>
				<Typography variant="body1" align="center">
					Получите персональный план за минуту
				</Typography>
				<Button variant="contained">
					Начать
				</Button>
			</Wrapper>
		</Container>
	)
}

export default Welcome
