# CI/CD Pipeline Setup

## Автоматический деплой на Vercel

### 1. Подключение к Vercel

1. Зайдите на [vercel.com](https://vercel.com)
2. Нажмите "New Project"
3. Выберите "Import Git Repository"
4. Выберите ваш репозиторий
5. Vercel автоматически определит настройки для Vite/React проекта

### 2. Настройка переменных окружения

В настройках проекта Vercel добавьте необходимые переменные окружения:
- `VITE_API_URL` - URL вашего API
- `VITE_TELEGRAM_BOT_TOKEN` - токен Telegram бота
- Другие переменные, используемые в проекте

### 3. Автоматические деплои

После подключения Vercel автоматически:
- Деплоит при каждом push в `main` ветку (Production)
- Создает preview деплои для pull requests
- Деплоит при push в другие ветки (Preview)

## GitHub Actions (Дополнительно)

### 1. Настройка Secrets

В настройках GitHub репозитория (Settings > Secrets and variables > Actions) добавьте:

```
VERCEL_TOKEN - токен Vercel (создается в настройках аккаунта Vercel)
VERCEL_ORG_ID - ID организации Vercel
VERCEL_PROJECT_ID - ID проекта Vercel
```

### 2. Получение Vercel токенов

1. Зайдите в [Vercel Account Settings](https://vercel.com/account/tokens)
2. Создайте новый токен
3. Скопируйте `VERCEL_TOKEN`

4. В настройках проекта Vercel найдите:
   - `VERCEL_ORG_ID` в URL или в настройках
   - `VERCEL_PROJECT_ID` в настройках проекта

### 3. Workflows

#### Автоматический CI/CD (`ci.yml`)
- Запускается при push в `main`/`develop` и pull requests
- Проверяет код (ESLint, TypeScript)
- Собирает проект
- Деплоит на Vercel (только для main ветки)

#### Ручной деплой (`manual-deploy.yml`)
- Запускается вручную через GitHub Actions
- Позволяет выбрать окружение (production/preview)
- Позволяет выбрать ветку для деплоя

## Ручной запуск деплоя

### Через GitHub Actions:
1. Зайдите в репозиторий на GitHub
2. Перейдите в "Actions"
3. Выберите "Manual Deploy"
4. Нажмите "Run workflow"
5. Выберите параметры и запустите

### Через Vercel Dashboard:
1. Зайдите в проект на Vercel
2. Нажмите "Deployments"
3. Нажмите "Redeploy" для последнего деплоя

## Мониторинг

- **Vercel Dashboard**: статус деплоев, логи, производительность
- **GitHub Actions**: статус CI/CD pipeline, логи выполнения
- **Vercel Analytics**: метрики производительности (если включены)

## Troubleshooting

### Проблемы с деплоем:
1. Проверьте логи в Vercel Dashboard
2. Убедитесь, что все переменные окружения настроены
3. Проверьте, что `yarn build` работает локально

### Проблемы с GitHub Actions:
1. Проверьте, что все secrets настроены правильно
2. Убедитесь, что токены Vercel действительны
3. Проверьте логи выполнения в GitHub Actions
