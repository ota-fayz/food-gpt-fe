import { createTheme } from '@mui/material'

export const theme = createTheme({
	components: {
		MuiButton: {
			styleOverrides: {
				contained: ({ theme }) => ({
					backgroundColor: theme.palette.common.black,
				}),
			},
		},
	},
})