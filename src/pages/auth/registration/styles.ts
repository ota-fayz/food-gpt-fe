import { styled } from '@mui/material/styles'

export const Form = styled('form')(({theme}) => ({
	padding: theme.spacing(4),
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	width: '100%',
	height: '100%'
}))

export const Wrapper = styled('div')(({theme}) => ({
	display: 'flex',
	gap: theme.spacing(2),
	alignItems: 'center'
}))