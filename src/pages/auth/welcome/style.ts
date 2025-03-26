import { styled } from '@mui/material/styles'

export const Container = styled('div')`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    .img {
        width: 100%;
        height: auto;
        display: block;
        object-fit: cover;
    }
`

export const Wrapper = styled('div')(({theme}) => ({
	backgroundColor: theme.palette.common.white,
	color: theme.palette.common.black,
	borderTopLeftRadius: theme.spacing(4),
	borderTopRightRadius: theme.spacing(4),
	padding: theme.spacing(6),
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	textAlign: 'center',
	marginTop: theme.spacing(-4)
}))