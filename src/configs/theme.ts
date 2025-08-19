import { createTheme, ThemeOptions } from '@mui/material'
import { blue, grey } from '@mui/material/colors'
import { telegramService } from './telegram'

// Default theme configuration
const defaultThemeOptions: ThemeOptions = {
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
}

// Create theme with Telegram support
export const createAppTheme = (colorScheme: 'light' | 'dark' = 'light') => {
	const telegramTheme = telegramService.theme

	// If running in Telegram, use Telegram theme colors
	if (telegramService.isWebApp && Object.keys(telegramTheme).length > 0) {
		const isDark = colorScheme === 'dark'
		
		return createTheme({
			...defaultThemeOptions,
			palette: {
				mode: colorScheme,
				primary: {
					main: telegramTheme.buttonColor || (isDark ? grey[100] : grey[900]),
				},
				secondary: {
					main: telegramTheme.linkColor || blue[500],
				},
				text: {
					primary: telegramTheme.textColor || (isDark ? grey[100] : grey[900]),
					secondary: telegramTheme.hintColor || (isDark ? grey[400] : grey[600]),
				},
				background: {
					default: telegramTheme.bgColor || (isDark ? grey[900] : grey[50]),
					paper: telegramTheme.secondaryBgColor || telegramTheme.bgColor || (isDark ? grey[800] : '#ffffff'),
				},
				divider: telegramTheme.hintColor || (isDark ? grey[700] : grey[300]),
				action: {
					active: telegramTheme.linkColor || blue[500],
				},
				...(isDark && {
					grey: {
						50: grey[900],
						100: grey[800],
						200: grey[700],
						300: grey[600],
						400: grey[500],
						500: grey[400],
						600: grey[300],
						700: grey[200],
						800: grey[100],
						900: grey[50],
					}
				})
			},
			components: {
				...defaultThemeOptions.components,
				MuiCssBaseline: {
					styleOverrides: {
						body: {
							backgroundColor: telegramTheme.bgColor || (isDark ? grey[900] : grey[50]),
							color: telegramTheme.textColor || (isDark ? grey[100] : grey[900]),
						}
					}
				}
			}
		})
	}

	// Fallback to default theme
	return createTheme({
		...defaultThemeOptions,
		palette: {
			...defaultThemeOptions.palette,
			mode: colorScheme,
		}
	})
}

// Default theme instance (will be replaced by dynamic theme)
export const theme = createAppTheme('light')