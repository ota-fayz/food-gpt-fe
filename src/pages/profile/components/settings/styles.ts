import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Switch from '@mui/material/Switch'

export const Card = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.spacing(3),
  padding: theme.spacing(3, 2),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  cursor: 'pointer',
  transition: theme.transitions.create('background-color'),
  '&:hover': {
    backgroundColor: theme.palette.grey[50]
  }
}))

export const IconContainer = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.h5.fontSize,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

export const ContentContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.5)
}))

export const Title = styled(Box)(({ theme }) => ({
  ...theme.typography.h6,
  fontWeight: 500,
  color: theme.palette.text.primary
}))

export const Description = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  fontWeight: 400,
  color: theme.palette.text.secondary
}))

export const StyledSwitch = styled(Switch)(({ theme }) => ({
  width: theme.spacing(10),
  height: theme.spacing(6),
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: theme.spacing(0.25),
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: `translateX(${theme.spacing(3.75)})`,
      color: theme.palette.common.white,
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.success.main,
        opacity: 1,
        border: 0
      }
    }
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: theme.spacing(5.5),
    height: theme.spacing(5.5)
  },
  '& .MuiSwitch-track': {
    borderRadius: theme.spacing(3.25),
    backgroundColor: theme.palette.grey[300],
    opacity: 1,
    transition: theme.transitions.create(['background-color'])
  }
}))

export const ArrowIcon = styled(Box)(({ theme }) => ({
  width: theme.spacing(1.5),
  height: theme.spacing(2.5),
  color: theme.palette.grey[400],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))
