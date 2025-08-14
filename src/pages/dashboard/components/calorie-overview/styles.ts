import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'

export const Card = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: 16,
  padding: theme.spacing(3),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(3),
  minHeight: '200px'
}))

export const CircularContainer = styled(Box)(() => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& .MuiCircularProgress-root:first-of-type': {
    color: '#e0e0e0',
    transform: 'rotate(-90deg)'
  },
  '& .MuiCircularProgress-root:last-of-type': {
    position: 'absolute',
    transform: 'rotate(-90deg)'
  }
}))

export const CalorieContent = styled(Box)(() => ({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center'
}))

export const CalorieNumber = styled(Box)(({ theme }) => ({
  fontSize: '43.4px',
  fontWeight: 700,
  color: theme.palette.text.primary,
  lineHeight: 1.21,
  marginBottom: theme.spacing(1)
}))

export const MacroHeader = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}))

export const MacroLabel = styled(Box)(({ theme }) => ({
  fontSize: '19px',
  fontWeight: 500,
  color: theme.palette.text.primary,
  lineHeight: 1.21
}))

export const MacroValue = styled(Box)(({ theme }) => ({
  fontSize: '15.7px',
  color: theme.palette.text.secondary,
  lineHeight: 1.21
}))

export const MacroProgressBar = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '14px',
  backgroundColor: theme.palette.grey[200],
  borderRadius: '7px',
  overflow: 'hidden'
}))

export const MacroProgress = styled('div')<{ width: number; color: string }>(({ width, color }) => ({
  width: `${width}%`,
  height: '100%',
  backgroundColor: color,
  transition: 'width 0.3s ease'
}))

export const AdditionButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.secondary,
  borderRadius: '12px',
  padding: theme.spacing(1, 2),
  minWidth: 'auto',
  fontSize: '18px',
  fontWeight: 400,
  textTransform: 'none',
  boxShadow: 'none',
  border: 'none',
  marginTop: theme.spacing(1),
  '&:hover': {
    backgroundColor: theme.palette.grey[50],
    boxShadow: 'none'
  }
}))
