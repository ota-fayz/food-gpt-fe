import { styled } from '@mui/material/styles'
import Fab from '@mui/material/Fab'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'

export const StyledFab = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(2),
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  width: theme.spacing(9),
  height: theme.spacing(5),
  borderRadius: theme.spacing(6),
  boxShadow: theme.shadows[8],
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    boxShadow: theme.shadows[12],
  },
}))

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    maxWidth: '425px',
    margin: '0 auto',
    borderTopLeftRadius: theme.spacing(2),
    borderTopRightRadius: theme.spacing(2),
    boxShadow: 'none',
  },
}))

export const SheetContent = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(1, 0, 1),
  backgroundColor: theme.palette.background.paper,
}))

export const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  paddingBottom: 4,
  paddingRight: theme.spacing(2),
}))

export const OptionItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(2, 3),
  borderBottom: `1px solid ${theme.palette.grey[200]}`,
  cursor: 'pointer',
  transition: theme.transitions.create(['background-color'], {
    duration: theme.transitions.duration.shorter,
  }),
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:active': {
    backgroundColor: theme.palette.action.selected,
  },
  '&:last-child': {
    borderBottom: 'none',
  },
}))

export const IconContainer = styled(Box)(({ theme }) => ({
  width: theme.spacing(4),
  height: theme.spacing(3),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.primary,
  flexShrink: 0,
}))

export const OptionText = styled(Box)(({ theme }) => ({
  ...theme.typography.h6,
  fontWeight: 500,
  color: theme.palette.text.primary,
  flex: 1,
}))
