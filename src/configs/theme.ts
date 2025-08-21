import { createTheme, ThemeOptions } from '@mui/material'
import { alpha } from '@mui/material/styles'
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
	shape: {
		borderRadius: 12
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
export const createAppTheme = (colorScheme: 'light' | 'dark' = 'dark') => {
	const telegramTheme = telegramService.theme

	// If running in Telegram, use Telegram theme colors
	if (telegramService.isWebApp && Object.keys(telegramTheme).length > 0) {
		const isDark = colorScheme === 'dark'
		
		const primaryMain = telegramTheme.linkColor || telegramTheme.buttonColor || (isDark ? blue[300] : blue[600])
		const buttonMain = telegramTheme.buttonColor || primaryMain
		const buttonText = telegramTheme.buttonTextColor || (isDark ? '#0b0b0b' : '#ffffff')
		const bgDefault = telegramTheme.bgColor || (isDark ? grey[900] : grey[50])
		const bgPaper = telegramTheme.secondaryBgColor || telegramTheme.bgColor || (isDark ? '#1f1f1f' : '#ffffff')
		const textPrimary = telegramTheme.textColor || (isDark ? grey[100] : grey[900])
		const textSecondary = telegramTheme.hintColor || (isDark ? grey[400] : grey[600])
		const dividerColor = telegramTheme.hintColor || (isDark ? grey[800] : grey[300])

		return createTheme({
			...defaultThemeOptions,
			palette: {
				mode: colorScheme,
				primary: { main: primaryMain },
				secondary: { main: blue[500] },
				text: { primary: textPrimary, secondary: textSecondary },
				background: { default: bgDefault, paper: bgPaper },
				divider: dividerColor,
				action: { active: primaryMain },
			},
			components: {
				...defaultThemeOptions.components,
				MuiCssBaseline: {
					styleOverrides: { body: { backgroundColor: bgDefault, color: textPrimary } }
				},
				MuiPaper: {
					styleOverrides: {
						root: {
							backgroundImage: 'none',
							border: `1px solid ${alpha(dividerColor, isDark ? 0.3 : 0.6)}`,
							borderRadius: 16,
						}
					}
				},
				MuiCard: {
					defaultProps: { elevation: 0 },
					styleOverrides: { root: { backgroundColor: bgPaper, borderRadius: 16 } }
				},
				MuiButton: {
					styleOverrides: {
						containedPrimary: {
							backgroundColor: buttonMain,
							color: buttonText,
							'&:hover': { backgroundColor: alpha(buttonMain, 0.9) }
						},
						outlined: {
							borderColor: alpha(primaryMain, 0.5),
							'&:hover': { borderColor: primaryMain, backgroundColor: alpha(primaryMain, 0.06) }
						}
					}
				},
				MuiIconButton: {
					styleOverrides: { root: { '&:hover': { backgroundColor: alpha(textPrimary, 0.08) } } }
				},
				MuiOutlinedInput: {
					styleOverrides: {
						root: {
							'& .MuiOutlinedInput-notchedOutline': { borderColor: alpha(textSecondary, 0.4) },
							'&:hover .MuiOutlinedInput-notchedOutline': { borderColor: alpha(primaryMain, 0.7) },
							'&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: primaryMain }
						}
					}
				},
				MuiLinearProgress: {
					styleOverrides: { bar: { backgroundColor: primaryMain }, root: { backgroundColor: alpha(primaryMain, isDark ? 0.15 : 0.2) } }
				},
				MuiDivider: { styleOverrides: { root: { borderColor: alpha(dividerColor, isDark ? 0.3 : 0.5) } } },
				MuiRadio: { styleOverrides: { root: { color: alpha(primaryMain, 0.8) } } }
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