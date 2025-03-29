import { createTheme } from '@mui/material'

const baseTheme = createTheme()

export const theme = createTheme({
	palette: {
		primary: {
			main: baseTheme.palette.common.black
		}
	},
	components: {}
})