import { useState } from 'react'
import { Box, Typography, Button, Stack, Alert } from '@mui/material'
import { useTelegram } from '../../hooks/useTelegram'

const TelegramTest = () => {
  const [message, setMessage] = useState('')
  const { 
    isWebApp, 
    user, 
    colorScheme, 
    theme,
    isInitialized,
    setMainButton,
    hideMainButton,
    setBackButton,
    hideBackButton,
    impactFeedback,
    notificationFeedback,
    selectionFeedback,
    showAlert,
    showConfirm,
    openLink,
    close,
    setCloudData,
    getCloudData
  } = useTelegram()

  const handleTestMainButton = () => {
    setMainButton({
      text: 'Тестовая кнопка',
      isVisible: true,
      isActive: true,
      onClick: () => {
        impactFeedback('heavy')
        showAlert('Главная кнопка нажата!')
      }
    })
  }

  const handleTestBackButton = () => {
    setBackButton(() => {
      impactFeedback('light')
      showAlert('Кнопка назад нажата!')
    })
  }

  const handleTestHaptics = () => {
    impactFeedback('medium')
    notificationFeedback('success')
    selectionFeedback()
  }

  const handleTestConfirm = async () => {
    const result = await showConfirm('Вы уверены?')
    setMessage(`Результат подтверждения: ${result ? 'Да' : 'Нет'}`)
  }

  const handleTestCloudStorage = async () => {
    const testKey = 'test-key'
    const testValue = new Date().toISOString()
    
    const setResult = await setCloudData(testKey, testValue)
    if (setResult) {
      const getValue = await getCloudData(testKey)
      setMessage(`Облачное хранилище: записано '${testValue}', прочитано '${getValue}'`)
    } else {
      setMessage('Ошибка записи в облачное хранилище')
    }
  }

  return (
    <Box sx={{ p: 2, maxWidth: 600, mx: 'auto' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Тестирование Telegram Mini App
      </Typography>

      <Stack spacing={3}>
        <Box>
          <Typography variant="h6" gutterBottom>
            Статус инициализации
          </Typography>
          <Alert severity={isInitialized ? 'success' : 'warning'}>
            SDK инициализирован: {isInitialized ? 'Да' : 'Нет'}
          </Alert>
          <Alert severity={isWebApp ? 'info' : 'warning'}>
            Telegram Web App: {isWebApp ? 'Да' : 'Нет'}
          </Alert>
        </Box>

        {user && (
          <Box>
            <Typography variant="h6" gutterBottom>
              Информация о пользователе
            </Typography>
            <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
              <Typography>ID: {user.id}</Typography>
              <Typography>Имя: {user.first_name} {user.last_name || ''}</Typography>
              {user.username && <Typography>Username: @{user.username}</Typography>}
              <Typography>Язык: {user.language_code}</Typography>
              <Typography>Premium: {user.is_premium ? 'Да' : 'Нет'}</Typography>
            </Box>
          </Box>
        )}

        <Box>
          <Typography variant="h6" gutterBottom>
            Тема и цвета
          </Typography>
          <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
            <Typography>Цветовая схема: {colorScheme}</Typography>
            <Typography>Тема: {JSON.stringify(theme, null, 2)}</Typography>
          </Box>
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom>
            Тестирование функций
          </Typography>
          <Stack spacing={2}>
            <Button variant="contained" onClick={handleTestMainButton}>
              Показать главную кнопку
            </Button>
            <Button variant="outlined" onClick={() => hideMainButton()}>
              Скрыть главную кнопку
            </Button>
            <Button variant="contained" onClick={handleTestBackButton}>
              Показать кнопку назад
            </Button>
            <Button variant="outlined" onClick={() => hideBackButton()}>
              Скрыть кнопку назад
            </Button>
            <Button variant="contained" onClick={handleTestHaptics}>
              Тестировать вибрацию
            </Button>
            <Button variant="contained" onClick={() => showAlert('Тестовое уведомление!')}>
              Показать уведомление
            </Button>
            <Button variant="contained" onClick={handleTestConfirm}>
              Показать подтверждение
            </Button>
            <Button variant="contained" onClick={handleTestCloudStorage}>
              Тестировать облачное хранилище
            </Button>
            <Button variant="contained" onClick={() => openLink('https://telegram.org')}>
              Открыть ссылку
            </Button>
            <Button variant="outlined" color="error" onClick={() => close()}>
              Закрыть приложение
            </Button>
          </Stack>
        </Box>

        {message && (
          <Alert severity="info">
            {message}
          </Alert>
        )}
      </Stack>
    </Box>
  )
}

export default TelegramTest
