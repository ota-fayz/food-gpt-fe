import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'

export const SectionTitle = styled('h2')(({ theme }) => ({
  ...theme.typography.h5,
  fontWeight: theme.typography.fontWeightMedium || 500,
  color: theme.palette.text.primary,
  margin: 0,
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(2)
}))

export const Card = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.spacing(2.5),
  border: `1px solid ${theme.palette.grey[200]}`,
  padding: theme.spacing(2),
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
  width: theme.spacing(4.5),
  height: theme.spacing(4.5),
  fontSize: theme.typography.h6.fontSize,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: theme.spacing(1),
  backgroundColor: theme.palette.grey[100]
}))

export const ContentContainer = styled(Box)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column'
})

export const Title = styled(Box)(({ theme }) => ({
  ...theme.typography.h6,
  fontWeight: theme.typography.fontWeightMedium || 500,
  color: theme.palette.text.primary
}))

export const Description = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  fontWeight: theme.typography.fontWeightRegular || 400,
  color: theme.palette.text.secondary
}))

export const ArrowIcon = styled(Box)(({ theme }) => ({
  width: theme.spacing(1.5),
  height: theme.spacing(2.5),
  marginLeft: theme.spacing(1),
  color: theme.palette.grey[400],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))
