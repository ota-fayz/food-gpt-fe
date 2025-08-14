import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'

export const StyledCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: '22px',
  border: `1px solid ${theme.palette.grey[200]}`,
  padding: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(1)
}))

export const IconContainer = styled(Box)(({ theme }) => ({
  width: '110px',
  height: '109px',
  borderRadius: '10px',
  backgroundColor: theme.palette.grey[100],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}))

export const ContentContainer = styled(Box)(() => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column'
}))

export const Title = styled(Box)(({ theme }) => ({
  fontSize: '18px',
  fontWeight: 400,
  color: theme.palette.text.secondary,
  lineHeight: 1.21
}))

export const Calories = styled(Box)(({ theme }) => ({
  fontSize: '24.2px',
  fontWeight: 500,
  color: theme.palette.text.primary,
  lineHeight: 1.21
}))

export const Subtitle = styled(Box)(({ theme }) => ({
  fontSize: '18px',
  fontWeight: 400,
  color: theme.palette.text.secondary,
  lineHeight: 1.21
}))

export const Time = styled(Box)(({ theme }) => ({
  fontSize: '16.2px',
  fontWeight: 400,
  color: theme.palette.grey[400],
  lineHeight: 1.21,
  alignSelf: 'flex-start',
  marginTop: theme.spacing(0.5)
}))
