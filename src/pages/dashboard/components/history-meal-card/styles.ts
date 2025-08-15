import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'

export const StyledCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.spacing(3),
  border: `1px solid ${theme.palette.grey[200]}`,
  padding: theme.spacing(2.5),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
}))

export const IconContainer = styled(Box)(({ theme }) => ({
  width: theme.spacing(14),
  height: theme.spacing(13.5),
  borderRadius: theme.spacing(1.5),
  backgroundColor: theme.palette.grey[100],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  overflow: 'hidden',
}))

export const FoodPlaceholder = styled(Box)(({ theme }) => ({
  fontSize: theme.spacing(6),
  opacity: 0.6,
}))

export const ContentContainer = styled(Box)(() => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  minWidth: 0,
}))

export const Title = styled(Box)(({ theme }) => ({
  ...theme.typography.h6,
  color: theme.palette.text.secondary,
  fontWeight: 400,
}))

export const Calories = styled(Box)(({ theme }) => ({
  ...theme.typography.h5,
  color: theme.palette.text.primary,
  fontWeight: 600,
}))

export const Subtitle = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  fontWeight: 400,
}))

export const Time = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.grey[500],
  fontWeight: 400,
  alignSelf: 'flex-start',
  marginTop: theme.spacing(0.5),
  minWidth: 'fit-content',
}))
