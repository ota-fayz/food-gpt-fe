import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'

export const Card = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: '22px',
  border: `1px solid ${theme.palette.grey[200]}`,
  padding: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  cursor: 'pointer',
  transition: 'background-color 0.2s ease',
  '&:hover': {
    backgroundColor: theme.palette.grey[50]
  }
}))

export const IconContainer = styled(Box)(({ theme }) => ({
  width: '37px',
  height: '37px',
  fontSize: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '8px',
  backgroundColor: theme.palette.grey[100]
}))

export const ContentContainer = styled(Box)(() => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column'
}))

export const Label = styled(Box)(({ theme }) => ({
  fontSize: '24px',
  fontWeight: 500,
  color: theme.palette.text.primary,
  lineHeight: 1.21
}))

export const ValueContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end'
}))

export const Value = styled(Box)(({ theme }) => ({
  fontSize: '23px',
  fontWeight: 400,
  color: theme.palette.text.secondary,
  lineHeight: 1.21
}))

export const ArrowIcon = styled(Box)(({ theme }) => ({
  width: '12px',
  height: '20px',
  marginLeft: theme.spacing(1),
  color: theme.palette.grey[400],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))
