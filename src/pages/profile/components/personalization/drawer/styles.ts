import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

export const PlanContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  paddingBottom: theme.spacing(4),
  backgroundColor: theme.palette.background.default,
  borderTopLeftRadius: theme.spacing(2),
  borderTopRightRadius: theme.spacing(2),
  minHeight: theme.spacing(62.5)
}))

export const PlanHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(3)
}))

export const PlanTitle = styled(Box)(({ theme }) => ({
  ...theme.typography.h4,
  fontWeight: 600,
  color: theme.palette.text.primary,
  textAlign: 'center',
  flex: 1
}))

export const CalorieCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.spacing(3.25),
  padding: theme.spacing(3),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(3),
  marginBottom: theme.spacing(3)
}))

export const CalorieIcon = styled(Box)(({ theme }) => ({
  width: theme.spacing(6.375),
  height: theme.spacing(6.375),
  fontSize: theme.typography.h4.fontSize,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

export const CalorieContent = styled(Box)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column'
})

export const CalorieLabel = styled(Box)(({ theme }) => ({
  ...theme.typography.h6,
  fontWeight: 400,
  color: theme.palette.text.secondary
}))

export const CalorieValue = styled(Box)(({ theme }) => ({
  ...theme.typography.h5,
  fontWeight: 600,
  color: theme.palette.text.primary
}))

export const MacroGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: theme.spacing(1.5),
  marginBottom: theme.spacing(3)
}))

export const MacroCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.spacing(2.875),
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: theme.spacing(1),
  minHeight: theme.spacing(18.75)
}))

export const MacroIcon = styled(Box)(({ theme }) => ({
  width: theme.spacing(4.625),
  height: theme.spacing(4.625),
  borderRadius: theme.spacing(2.25),
  fontSize: theme.typography.body1.fontSize,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(1)
}))

export const MacroLabel = styled(Box)(({ theme }) => ({
  ...theme.typography.h6,
  fontWeight: 400,
  color: theme.palette.text.secondary
}))

export const MacroValue = styled(Box)(({ theme }) => ({
  ...theme.typography.h5,
  fontWeight: 700,
  color: theme.palette.text.primary,
  marginTop: 'auto'
}))

export const RecommendButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  borderRadius: theme.spacing(1.125),
  border: `2px solid ${theme.palette.grey[500]}`,
  padding: theme.spacing(2, 3),
  ...theme.typography.h6,
  fontWeight: 500,
  textTransform: 'none',
  width: '100%',
  minHeight: theme.spacing(10),
  marginBottom: theme.spacing(2),
  '&:hover': {
    backgroundColor: theme.palette.grey[50]
  }
}))

export const RecommendationText = styled(Box)(({ theme }) => ({
  ...theme.typography.body1,
  fontWeight: 400,
  color: theme.palette.text.secondary,
  textAlign: 'center',
  marginBottom: theme.spacing(3)
}))
