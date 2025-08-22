# Настройка CI/CD Pipeline для Food GPT Frontend

## 🎯 Цель

Настроить автоматический деплой проекта на Vercel с возможностью ручного запуска и дополнительными проверками через GitHub Actions.

## 📋 Что уже настроено

### 1. GitHub Actions Workflows

#### `ci.yml` - Основной CI/CD pipeline
- **Триггеры**: push в `main`/`develop`, pull requests, ручной запуск
- **Этапы**:
  - `lint`: Проверка ESLint и TypeScript
  - `build`: Сборка проекта и сохранение артефактов
  - `deploy`: Деплой на Vercel (только для main ветки)

#### `manual-deploy.yml` - Ручной деплой
- **Триггер**: только ручной запуск
- **Возможности**:
  - Выбор окружения (production/preview)
  - Выбор ветки для деплоя
  - Полная проверка кода перед деплоем

### 2. Локальные скрипты

#### `yarn check-build` - Полная проверка
```bash
# Запускает все проверки локально
yarn check-build
```

#### `yarn type-check` - Проверка типов
```bash
# Только проверка TypeScript
yarn type-check
```

### 3. Конфигурация Vercel

#### `vercel.json`
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ],
  "buildCommand": "yarn build",
  "outputDirectory": "dist",
  "installCommand": "yarn install",
  "framework": "vite"
}
```

## 🚀 Пошаговая настройка

### Шаг 1: Подключение к Vercel

1. **Зайдите на [vercel.com](https://vercel.com)**
2. **Нажмите "New Project"**
3. **Выберите "Import Git Repository"**
4. **Выберите ваш репозиторий**
5. **Vercel автоматически определит настройки**

### Шаг 2: Настройка переменных окружения

Переменные окружения - это конфигурационные значения, которые ваше приложение использует во время выполнения.

#### Что такое переменные окружения?
- Это ключ-значение пары (например: `VITE_API_URL=https://api.com`)
- Они не хранятся в коде (для безопасности)
- Разные значения для разных сред (разработка, тестирование, продакшн)

#### Какие переменные нужны для вашего проекта?

**Хорошие новости! Для вашего фронтенда НЕ НУЖНЫ переменные окружения!**

Ваш проект работает "из коробки":
- ✅ API URL имеет fallback значение (`http://localhost:8080`)
- ✅ Telegram интеграция работает через SDK без токенов
- ✅ Все настройки уже захардкожены в коде

**VITE_API_URL** (опциональная):
- URL вашего backend API
- Используется в `src/configs/api.ts`
- **Имеет fallback**: `http://localhost:8080`
- Нужна только если у вас есть реальный API

**VITE_TELEGRAM_BOT_TOKEN** (не используется):
- Эта переменная в коде не используется
- Telegram интеграция работает через SDK без токенов

#### Как добавить в Vercel (если понадобится):

**Переменные окружения НЕ ОБЯЗАТЕЛЬНЫ** для вашего проекта!

Если в будущем понадобится настроить API URL:

1. Зайдите в проект на [vercel.com](https://vercel.com)
2. Перейдите в **Settings** → **Environment Variables**
3. Нажмите **"Add New"**
4. Добавьте переменную:

```env
# Для Production (если у вас есть API)
Name: VITE_API_URL
Value: https://your-production-api.com
Environment: Production
```

#### Примеры значений (если понадобится):

```env
# Если у вас есть API
VITE_API_URL=https://api.foodgpt.com

# Если API еще нет (временно)
VITE_API_URL=https://jsonplaceholder.typicode.com

# Локальная разработка (уже есть fallback)
VITE_API_URL=http://localhost:8080
```

### Шаг 3: Настройка GitHub Secrets

В настройках GitHub репозитория (Settings > Secrets and variables > Actions):

#### Обязательные secrets:
```env
VERCEL_TOKEN=your-vercel-token
VERCEL_ORG_ID=your-org-id
VERCEL_PROJECT_ID=your-project-id
```

#### Как получить токены:

1. **VERCEL_TOKEN**:
   - Зайдите в [Vercel Account Settings](https://vercel.com/account/tokens)
   - Создайте новый токен
   - Скопируйте значение

2. **VERCEL_ORG_ID и VERCEL_PROJECT_ID**:
   - В настройках проекта Vercel
   - Или в URL проекта: `https://vercel.com/[org-id]/[project-id]`

### Шаг 4: Тестирование

#### Локальная проверка:
```bash
# Полная проверка
yarn check-build

# Только линтер
yarn lint

# Только сборка
yarn build
```

#### Тестирование GitHub Actions:
1. Сделайте push в `main` ветку
2. Проверьте вкладку "Actions" на GitHub
3. Убедитесь, что все этапы прошли успешно

## 🔄 Автоматические деплои

### Vercel (основной)
- **Push в `main`** → Production деплой
- **Pull Request** → Preview деплой
- **Push в другие ветки** → Preview деплой

### GitHub Actions (дополнительный контроль)
- **Push в `main`** → Проверка кода + деплой
- **Pull Request** → Только проверка кода
- **Ручной запуск** → Полный контроль

## 🎛️ Ручной деплой

### Через GitHub Actions:
1. Перейдите в репозиторий → Actions
2. Выберите "Manual Deploy"
3. Нажмите "Run workflow"
4. Выберите параметры:
   - **Environment**: production/preview
   - **Branch**: ветка для деплоя
5. Нажмите "Run workflow"

### Через Vercel Dashboard:
1. Зайдите в проект на Vercel
2. Перейдите в "Deployments"
3. Нажмите "Redeploy" для последнего деплоя

## 📊 Мониторинг

### Vercel Dashboard:
- Статус деплоев
- Логи сборки
- Производительность
- Аналитика

### GitHub Actions:
- Статус CI/CD pipeline
- Логи выполнения
- История запусков

## 🛠️ Troubleshooting

### Проблемы с деплоем:
1. **Проверьте логи в Vercel Dashboard**
2. **Убедитесь, что все переменные окружения настроены**
3. **Проверьте, что `yarn build` работает локально**

### Проблемы с GitHub Actions:
1. **Проверьте, что все secrets настроены правильно**
2. **Убедитесь, что токены Vercel действительны**
3. **Проверьте логи выполнения в GitHub Actions**

### Частые ошибки:
- **"Build failed"**: Проверьте переменные окружения
- **"Token invalid"**: Обновите VERCEL_TOKEN
- **"TypeScript errors"**: Исправьте ошибки типов локально

## 🔧 Дополнительные настройки

### Настройка домена:
1. В настройках проекта Vercel
2. Перейдите в "Domains"
3. Добавьте ваш домен

### Настройка аналитики:
1. В настройках проекта Vercel
2. Включите "Analytics"
3. Настройте отслеживание событий

### Настройка уведомлений:
1. В настройках проекта Vercel
2. Перейдите в "Settings" → "Notifications"
3. Настройте уведомления о деплоях

## 📝 Полезные команды

```bash
# Локальная разработка
yarn dev

# Проверка кода
yarn lint

# Проверка типов
yarn type-check

# Сборка
yarn build

# Полная проверка
yarn check-build

# Preview сборки
yarn preview
```

## 🎉 Готово!

После настройки у вас будет:
- ✅ Автоматические деплои при push в main
- ✅ Preview деплои для pull requests
- ✅ Ручной деплой с выбором параметров
- ✅ Проверка кода перед деплоем
- ✅ Мониторинг и логи
- ✅ Локальные скрипты для проверки
