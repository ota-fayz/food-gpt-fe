import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Switch from '@mui/material/Switch'

export const Card = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: '25px',
  padding: theme.spacing(3, 2),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  cursor: 'pointer',
  transition: 'background-color 0.2s ease',
  '&:hover': {
    backgroundColor: theme.palette.grey[50]
  }
}))

export const IconContainer = styled(Box)(() => ({
  fontSize: '24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

export const ContentContainer = styled(Box)(() => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '4px'
}))

export const Title = styled(Box)(({ theme }) => ({
  fontSize: '22px',
  fontWeight: 500,
  color: theme.palette.text.primary,
  lineHeight: 1.21
}))

export const Description = styled(Box)(({ theme }) => ({
  fontSize: '18px',
  fontWeight: 400,
  color: theme.palette.text.secondary,
  lineHeight: 1.2
}))

export const StyledSwitch = styled(Switch)(({ theme }) => ({
  width: 79,
  height: 49,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(30px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#65C466',
        opacity: 1,
        border: 0
      }
    }
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 45,
    height: 45
  },
  '& .MuiSwitch-track': {
    borderRadius: 26,
    backgroundColor: theme.palette.grey[300],
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500
    })
  }
}))

export const ArrowIcon = styled(Box)(({ theme }) => ({
  width: '12px',
  height: '20px',
  color: theme.palette.grey[400],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))
