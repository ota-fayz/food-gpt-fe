import { createTheme } from '@mui/material'
import { blue, grey } from '@mui/material/colors'

export const theme = createTheme({
	palette: {
		primary: {
			main: grey[900], // #212121 - темный для основных элементов
		},
		secondary: {
			main: blue[500], // #2196f3 - синий для акцентов
		},
		text: {
			primary: grey[900], // #212121 - основной текст
			secondary: grey[600], // #757575 - вторичный текст
		},
		background: {
			default: grey[50], // #fafafa - фон приложения
			paper: '#ffffff', // белый для карточек
		},
		grey: {
			...grey, // все оттенки серого от 50 до 900
		}
	},
	typography: {
		fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: 'none',
					borderRadius: 12,
				}
			}
		}
	}
})