import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'

import { Container, Wrapper } from './styles'
import ImageSalad from '../../../assets/images/salad-with-macronutrients.webp'
import { ROUTER } from '../../../constants/router.ts'

export const Welcome = () => {
	const [telegramData, setTelegramData] = useState('');

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
				</Stack>
				{/* Отображение данных Telegram */}
				<Box sx={{ mt: 2 }}>
					<TextField
						label="initData"
						multiline
						rows={4}
						fullWidth
						value={telegramData}
						InputProps={{
							readOnly: true,
						}}
						sx={{ mb: 2 }}
					/>
				</Box>

				{/* Простая кнопка для получения данных */}
				<Button
					variant="contained"
					color="secondary"
					size="small"
					onClick={() => {
						if (window.Telegram?.WebApp?.initData) {
							const data = window.Telegram.WebApp.initData;
							setTelegramData(data);
							alert(`Найден init_data:\n${data}`);
						} else {
							alert('Telegram WebApp не найден. Убедитесь, что вы в Telegram Mini App.');
						}
					}}
					sx={{ mb: 2 }}
				>
					🚀 Получить init_data
				</Button>

				{/* Кнопка для полной диагностики */}
				<Button
					variant="outlined"
					color="error"
					size="small"
					onClick={() => {
						let info = '=== ДИАГНОСТИКА TELEGRAM ===\n\n';
						
						info += `window.Telegram: ${window.Telegram ? 'ЕСТЬ' : 'НЕТ'}\n`;
						info += `window.Telegram?.WebApp: ${window.Telegram?.WebApp ? 'ЕСТЬ' : 'НЕТ'}\n`;
						info += `window.Telegram?.WebApp?.initData: ${window.Telegram?.WebApp?.initData ? 'ЕСТЬ' : 'НЕТ'}\n\n`;
						
						if (window.Telegram?.WebApp?.initData) {
							info += `initData: ${window.Telegram.WebApp.initData}\n\n`;
						}
						
						info += `URL: ${window.location.href}\n`;
						info += `User Agent: ${navigator.userAgent.substring(0, 100)}...\n`;
						
						// Проверяем URL параметры
						const urlParams = new URLSearchParams(window.location.search);
						const tgWebAppData = urlParams.get('tgWebAppData');
						if (tgWebAppData) {
							info += `\ntgWebAppData в URL: ${tgWebAppData}`;
						}
						
						alert(info);
					}}
					sx={{ mb: 2 }}
				>
					🔍 Диагностика Telegram
				</Button>
			</Wrapper>
		</Container>
	)
}
