import { createTheme } from '@mui/material'
import { blue, grey } from '@mui/material/colors'

export const theme = createTheme({
	palette: {
		primary: {
			main: grey[900], // #212121 - dark for main elements
		},
		secondary: {
			main: blue[500], // #2196f3 - blue for accents
		},
		text: {
			primary: grey[900], // #212121 - primary text
			secondary: grey[600], // #757575 - secondary text
		},
		background: {
			default: grey[50], // #fafafa - app background
			paper: '#ffffff', // white for cards
		},
		grey: {
			...grey, // all grey shades from 50 to 900
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