import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100vh',
  backgroundColor: theme.palette.background.default,
  overflow: 'auto'
}))

export const Header = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  padding: '24px 16px'
}))

export const HeaderActions = styled(Box)(() => ({
  position: 'absolute',
  left: 16,
  display: 'flex',
  alignItems: 'center'
}))

export const Title = styled(Box)(({ theme }) => ({
  fontSize: '33px',
  fontWeight: 600,
  color: theme.palette.text.primary,
  lineHeight: 1.21
}))

export const Content = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(0, 2),
  paddingBottom: theme.spacing(4)
}))

export const Section = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3)
}))

export const SectionTitle = styled(Box)(({ theme }) => ({
  fontSize: '26px',
  fontWeight: 500,
  color: theme.palette.text.primary,
  lineHeight: 1.21,
  marginBottom: theme.spacing(2)
}))

export const CardGrid = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1)
}))