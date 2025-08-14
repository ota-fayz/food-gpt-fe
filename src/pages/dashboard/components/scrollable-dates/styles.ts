import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'

export const Container = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  padding: '0',
  overflowX: 'hidden'
}))

interface DateItemProps {
  isActive?: boolean
  isToday?: boolean
  isFuture?: boolean
}

export const DateItem = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isActive' && prop !== 'isToday' && prop !== 'isFuture'
})<DateItemProps>(({ theme, isActive, isToday, isFuture }) => ({
  fontSize: '20px',
  fontWeight: isActive ? 500 : 400,
  color: isActive ? theme.palette.grey[400] : theme.palette.grey[700],
  textAlign: 'center',
  minWidth: '40px',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: isActive ? '26px' : '0',
  backgroundColor: isActive ? theme.palette.grey[200] : 'transparent',
  lineHeight: 1.21,
  cursor: isFuture ? 'not-allowed' : 'pointer',
  transition: 'all 0.2s ease',
  userSelect: 'none',
  flex: '1 0 auto',
  position: 'relative',
  opacity: isFuture ? 0.3 : 1,
  ...(isToday && !isActive && {
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '4px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      backgroundColor: theme.palette.primary.main
    }
  })
}))