import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'

export const Container = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  paddingBottom: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  borderTopLeftRadius: '16px',
  borderTopRightRadius: '16px',
  minHeight: '400px'
}))

export const Header = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  marginBottom: '24px'
}))

export const OptionItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(3, 2),
  borderBottom: `1px solid ${theme.palette.grey[200]}`,
  cursor: 'pointer',
  transition: 'background-color 0.2s ease',
  '&:hover': {
    backgroundColor: theme.palette.grey[50]
  },
  '&:last-child': {
    borderBottom: 'none'
  }
}))

export const IconContainer = styled(Box)(({ theme }) => ({
  width: '35px',
  height: '35px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.primary
}))

export const OptionText = styled(Box)(({ theme }) => ({
  fontSize: '29px',
  fontWeight: 500,
  color: theme.palette.text.primary,
  lineHeight: 1.21
}))
