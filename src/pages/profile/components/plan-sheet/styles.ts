import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

export const Container = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  paddingBottom: theme.spacing(4),
  backgroundColor: theme.palette.background.default,
  borderTopLeftRadius: '16px',
  borderTopRightRadius: '16px',
  minHeight: '500px'
}))

export const Header = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '24px'
}))

export const Title = styled(Box)(({ theme }) => ({
  fontSize: '33px',
  fontWeight: 600,
  color: theme.palette.text.primary,
  lineHeight: 1.21,
  textAlign: 'center',
  flex: 1
}))

export const CalorieCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: '26px',
  padding: theme.spacing(3),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(3),
  marginBottom: theme.spacing(3)
}))

export const CalorieIcon = styled(Box)(() => ({
  width: '51px',
  height: '51px',
  fontSize: '28px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

export const CalorieContent = styled(Box)(() => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column'
}))

export const CalorieLabel = styled(Box)(({ theme }) => ({
  fontSize: '20px',
  fontWeight: 400,
  color: theme.palette.text.secondary,
  lineHeight: 1.21
}))

export const CalorieValue = styled(Box)(({ theme }) => ({
  fontSize: '27px',
  fontWeight: 600,
  color: theme.palette.text.primary,
  lineHeight: 1.21
}))

export const MacroGrid = styled(Box)(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '12px',
  marginBottom: '24px'
}))

export const MacroCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: '23px',
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: theme.spacing(1),
  minHeight: '150px'
}))

export const MacroIcon = styled(Box)(() => ({
  width: '37px',
  height: '37px',
  borderRadius: '18px',
  fontSize: '18px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '8px'
}))

export const MacroLabel = styled(Box)(({ theme }) => ({
  fontSize: '20px',
  fontWeight: 400,
  color: theme.palette.text.secondary,
  lineHeight: 1.21
}))

export const MacroValue = styled(Box)(({ theme }) => ({
  fontSize: '26px',
  fontWeight: 700,
  color: theme.palette.text.primary,
  lineHeight: 1.21,
  marginTop: 'auto'
}))

export const RecommendButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  borderRadius: '9px',
  border: `2px solid ${theme.palette.grey[500]}`,
  padding: theme.spacing(2, 3),
  fontSize: '22px',
  fontWeight: 500,
  textTransform: 'none',
  width: '100%',
  minHeight: '80px',
  marginBottom: theme.spacing(2),
  '&:hover': {
    backgroundColor: theme.palette.grey[50]
  }
}))

export const RecommendationText = styled(Box)(({ theme }) => ({
  fontSize: '19px',
  fontWeight: 400,
  color: theme.palette.text.secondary,
  lineHeight: 1.21,
  textAlign: 'center',
  marginBottom: theme.spacing(3)
}))
