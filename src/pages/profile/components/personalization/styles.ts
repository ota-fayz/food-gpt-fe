import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'

export const SectionTitle = styled('h2')(({ theme }) => ({
  fontSize: '18px',
  fontWeight: 600,
  color: theme.palette.text.primary,
  margin: 0,
  marginTop: theme.spacing(3),
}))

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

export const ArrowIcon = styled(Box)(({ theme }) => ({
  width: theme.spacing(1.5),
  height: theme.spacing(2.5),
  color: theme.palette.grey[400],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))
