# Telegram Mini App Integration Guide

## Что было сделано

### 1. Установлены зависимости
- `@telegram-apps/sdk` - официальный SDK для разработки Telegram Mini Apps

### 2. Создана конфигурация и типы
- `src/types/telegram.ts` - типы для Telegram Web App API
- `src/configs/telegram.ts` - сервис для работы с Telegram API
- `src/hooks/useTelegram.ts` - React хук для удобной работы с Telegram

### 3. Интегрирована тема
- `src/configs/theme.ts` - обновлен для поддержки Telegram цветовой схемы
- `src/providers/TelegramProvider.tsx` - провайдер для инициализации Telegram

### 4. Адаптированы компоненты
- `src/pages/auth/registration/` - интегрированы Telegram кнопки (MainButton, BackButton)
- `src/pages/dashboard/page.tsx` - добавлена информация о пользователе Telegram
- `src/components/telegram/` - компоненты для отображения информации о пользователе

### 5. Создана тестовая страница
- `src/pages/telegram-test/` - страница для тестирования всех функций Telegram API

## Основные функции

### Инициализация
```typescript
const { isWebApp, isInitialized, user } = useTelegram()
```

### Кнопки
```typescript
// Главная кнопка
setMainButton({
  text: 'Продолжить',
  isVisible: true,
  isActive: true,
  onClick: handleSubmit
})

// Кнопка назад
setBackButton(handleBack)
hideBackButton()
```

### Хэптики (вибрация)
```typescript
impactFeedback('medium') // light, medium, heavy
notificationFeedback('success') // error, success, warning
selectionFeedback()
```

### Уведомления
```typescript
await showAlert('Сообщение')
const result = await showConfirm('Подтвердить?')
```

### Облачное хранилище
```typescript
await setCloudData('key', 'value')
const value = await getCloudData('key')
```

### Тема
```typescript
const { colorScheme, theme } = useTelegram()
// colorScheme: 'light' | 'dark'
// theme: объект с цветами Telegram
```

## Как запустить в Telegram

### 1. Создание бота
1. Найдите [@BotFather](https://t.me/BotFather) в Telegram
2. Отправьте команду `/newbot`
3. Следуйте инструкциям для создания бота
4. Сохраните токен бота

### 2. Деплой приложения
Разместите приложение на HTTPS сервере:
```bash
# Сборка для продакшена
yarn build

# Деплой на Vercel (рекомендуется)
npm i -g vercel
vercel --prod

# Или другой хостинг с поддержкой HTTPS
```

### 3. Настройка Mini App в боте
1. Отправьте [@BotFather](https://t.me/BotFather) команду `/setmenubutton`
2. Выберите вашего бота
3. Укажите название кнопки (например, "Открыть приложение")
4. Укажите URL вашего приложения

### 4. Альтернативно - прямая ссылка
Используйте ссылку формата:
```
https://t.me/your_bot_username/your_app_name?startapp=param
```

## Тестирование в разработке

### 1. Локальная разработка
```bash
yarn dev
# Перейдите на http://localhost:5173/telegram-test
```

### 2. Тестирование через ngrok
```bash
# Установите ngrok
npm install -g ngrok

# Запустите локальный сервер
yarn dev

# В другом терминале
ngrok http 5173

# Используйте HTTPS URL от ngrok для настройки в @BotFather
```

### 3. Тестовые функции
Перейдите на `/telegram-test` для тестирования:
- Инициализация SDK
- Информация о пользователе
- Кнопки (Main/Back)
- Хэптики
- Уведомления
- Облачное хранилище
- Открытие ссылок

## Структура файлов

```
src/
├── configs/
│   ├── telegram.ts          # Сервис для работы с Telegram API
│   └── theme.ts             # Тема с поддержкой Telegram
├── hooks/
│   └── useTelegram.ts       # React хук для Telegram
├── providers/
│   └── TelegramProvider.tsx # Провайдер инициализации
├── types/
│   └── telegram.ts          # TypeScript типы
├── components/
│   └── telegram/            # Компоненты для Telegram
└── pages/
    ├── telegram-test/       # Страница тестирования
    ├── auth/registration/   # Адаптированная регистрация
    └── dashboard/           # Адаптированный dashboard
```

## Следующие шаги

1. **Деплой**: Разместите приложение на HTTPS хостинге
2. **Настройка бота**: Создайте бота и настройте Mini App
3. **Тестирование**: Протестируйте все функции в реальном Telegram
4. **Оптимизация**: Настройте производительность для мобильных устройств
5. **Безопасность**: Реализуйте проверку подписи initData на бэкенде

## Полезные ссылки

- [Telegram Mini Apps Documentation](https://docs.telegram-mini-apps.com/)
- [Telegram Web Apps API](https://core.telegram.org/bots/webapps)
- [@telegram-apps/sdk Documentation](https://github.com/Telegram-Mini-Apps/telegram-apps)
- [BotFather](https://t.me/BotFather)
