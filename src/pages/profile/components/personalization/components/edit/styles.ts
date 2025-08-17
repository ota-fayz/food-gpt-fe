import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import Drawer from '@mui/material/Drawer'

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    maxWidth: '425px',
    margin: '0 auto',
    borderTopLeftRadius: theme.spacing(3),
    borderTopRightRadius: theme.spacing(3),
    maxHeight: '85vh',
    boxShadow: theme.shadows[0]
  }
}))

export const PlanContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  backgroundColor: theme.palette.background.default,
  width: '100%',
  minHeight: 'auto',
  overflow: 'auto'
}))

export const PlanHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(4),
  paddingTop: theme.spacing(1)
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
  borderRadius: theme.spacing(3),
  padding: theme.spacing(3),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(3),
  marginBottom: theme.spacing(3),
  position: 'relative'
}))

export const CalorieIcon = styled(Box)(({ theme }) => ({
  width: theme.spacing(6),
  height: theme.spacing(6),
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
  borderRadius: theme.spacing(3),
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: theme.spacing(1),
  minHeight: theme.spacing(18),
  position: 'relative'
}))

export const MacroIcon = styled(Box)(({ theme }) => ({
  width: theme.spacing(5),
  height: theme.spacing(5),
  borderRadius: theme.spacing(2),
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
  fontWeight: 600,
  color: theme.palette.text.primary,
  marginTop: 'auto'
}))

export const RecommendButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  borderRadius: theme.spacing(1.5),
  border: `2px solid ${theme.palette.grey[300]}`,
  padding: theme.spacing(2, 3),
  ...theme.typography.h6,
  fontWeight: 500,
  width: '100%',
  minHeight: theme.spacing(6),
  marginBottom: theme.spacing(2),
  '&:hover': {
    backgroundColor: theme.palette.action.hover
  }
}))

export const RecommendationText = styled(Box)(({ theme }) => ({
  ...theme.typography.body1,
  fontWeight: 400,
  color: theme.palette.text.secondary,
  textAlign: 'center',
  marginBottom: 0
}))

export const MacroEditIcon = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(1),
  right: theme.spacing(1),
  padding: theme.spacing(0.5),
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.secondary,
  borderRadius: theme.spacing(1),
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
    color: theme.palette.text.primary
  }
}))

export const MacroInput = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root': {
    ...theme.typography.h5,
    fontWeight: 600,
    color: theme.palette.text.primary,
    backgroundColor: 'transparent',
    border: 'none',
    padding: 0
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none'
  },
  '& .MuiInputBase-input': {
    padding: theme.spacing(0.5),
    textAlign: 'left',
    backgroundColor: theme.palette.grey[100],
    borderRadius: theme.spacing(1),
    minWidth: 60
  }
}))
