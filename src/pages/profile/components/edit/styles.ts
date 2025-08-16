import { styled } from '@mui/material/styles'
import DialogTitle from '@mui/material/DialogTitle'

export const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(2, 3),
  ...theme.typography.h6,
  fontWeight: 600
}))

export const StyledForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  paddingTop: theme.spacing(1)
}))
