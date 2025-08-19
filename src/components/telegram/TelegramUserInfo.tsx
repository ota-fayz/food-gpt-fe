import { Box, Avatar, Typography, Stack } from '@mui/material'
import { useTelegram } from '../../hooks/useTelegram'

export const TelegramUserInfo = () => {
  const { user, isWebApp } = useTelegram()

  if (!isWebApp || !user) {
    return null
  }

  return (
    <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 2, mb: 2 }}>
      <Stack direction="row" spacing={2} alignItems="center">
        {user.photo_url && (
          <Avatar 
            src={user.photo_url} 
            alt={`${user.first_name} ${user.last_name || ''}`}
            sx={{ width: 48, height: 48 }}
          />
        )}
        <Box>
          <Typography variant="h6" component="div">
            {user.first_name} {user.last_name || ''}
          </Typography>
          {user.username && (
            <Typography variant="body2" color="text.secondary">
              @{user.username}
            </Typography>
          )}
          {user.is_premium && (
            <Typography variant="caption" color="primary" sx={{ fontWeight: 'bold' }}>
              Telegram Premium
            </Typography>
          )}
        </Box>
      </Stack>
    </Box>
  )
}
