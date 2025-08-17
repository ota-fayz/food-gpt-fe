import { styled } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'

export const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: theme.spacing(3),
    maxWidth: theme.spacing(55),
    width: '100%',
    margin: theme.spacing(2),
    boxShadow: theme.shadows[24],
    overflow: 'visible',
    background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.grey[50]} 100%)`
  },
  '& .MuiBackdrop-root': {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    backdropFilter: 'blur(4px)'
  }
}))

export const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(3, 3, 2),
  ...theme.typography.h5,
  fontWeight: theme.typography.fontWeightBold || 600,
  color: theme.palette.text.primary,
  borderBottom: `1px solid ${theme.palette.divider}`,
  background: 'transparent',
  '& .MuiIconButton-root': {
    backgroundColor: theme.palette.action.hover,
    borderRadius: theme.spacing(1),
    padding: theme.spacing(1),
    '&:hover': {
      backgroundColor: theme.palette.action.selected,
      transform: 'scale(1.05)'
    },
    '& .MuiSvgIcon-root': {
      fontSize: theme.spacing(2.5)
    }
  }
}))

export const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
  padding: theme.spacing(3),
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(3),
  minHeight: theme.spacing(15),
  '& .MuiFormControl-root': {
    '& .MuiOutlinedInput-root': {
      borderRadius: theme.spacing(1.5),
      backgroundColor: theme.palette.background.paper,
      fontSize: theme.typography.h6.fontSize,
      fontWeight: theme.typography.fontWeightMedium || 500,
      minHeight: theme.spacing(7),
      transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow'], {
        duration: theme.transitions.duration.short
      }),
      '&:hover': {
        backgroundColor: theme.palette.grey[50],
        borderColor: theme.palette.grey[400]
      },
      '&.Mui-focused': {
        backgroundColor: theme.palette.background.paper,
        boxShadow: `0 0 0 3px ${theme.palette.primary.main}20`,
        borderColor: theme.palette.primary.main
      }
    },
    '& .MuiInputLabel-root': {
      fontWeight: theme.typography.fontWeightMedium || 500,
      color: theme.palette.text.secondary
    },
    '& .MuiFormHelperText-root': {
      marginTop: theme.spacing(1),
      fontWeight: theme.typography.fontWeightRegular || 400,
      fontSize: theme.typography.caption.fontSize
    }
  }
}))

export const StyledDialogActions = styled(DialogActions)(({ theme }) => ({
  padding: theme.spacing(2, 3, 3),
  gap: theme.spacing(1.5),
  '& .MuiButton-root': {
    minWidth: theme.spacing(14),
    height: theme.spacing(5.5),
    borderRadius: theme.spacing(1.5),
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightMedium || 500,
    fontSize: theme.typography.body1.fontSize,
    transition: theme.transitions.create(['transform', 'box-shadow'], {
      duration: theme.transitions.duration.short
    }),
    '&:hover': {
      transform: 'translateY(-1px)'
    },
    '&.MuiButton-outlined': {
      borderColor: theme.palette.grey[300],
      color: theme.palette.text.secondary,
      '&:hover': {
        borderColor: theme.palette.grey[400],
        backgroundColor: theme.palette.grey[50]
      }
    },
    '&.MuiButton-contained': {
      boxShadow: theme.shadows[2],
      '&:hover': {
        boxShadow: theme.shadows[4]
      }
    }
  }
}))

export const StyledForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  minHeight: theme.spacing(12),
  paddingTop: theme.spacing(1)
}))
