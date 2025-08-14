import { styled } from '@mui/material/styles'
import Fab from '@mui/material/Fab'

export const StyledFab = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(8),
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: '#000',
  color: '#fff',
  width: 72,
  height: 40,
  borderRadius: 999,
  boxShadow: '0 4px 20px rgba(0,0,0,0.25)'
}))
