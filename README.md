# Food GPT Frontend

Telegram Mini App для управления питанием и калориями.

## 🚀 Быстрый старт

### Локальная разработка

```bash
# Установка зависимостей
yarn install

# Запуск dev сервера
yarn dev

# Проверка кода
yarn lint

# Проверка типов
yarn type-check

# Сборка проекта
yarn build

# Проверка сборки (включает все проверки)
yarn check-build
```

## 🚀 Деплой

### Автоматический деплой (Vercel)

Проект настроен для автоматического деплоя на Vercel:

1. **При push в `main` ветку** - автоматический деплой в production
2. **При создании pull request** - preview деплой
3. **При push в другие ветки** - preview деплой

### Ручной деплой

#### Через GitHub Actions:
1. Перейдите в репозиторий → Actions
2. Выберите "Manual Deploy"
3. Нажмите "Run workflow"
4. Выберите параметры и запустите

#### Через Vercel Dashboard:
1. Зайдите в проект на Vercel
2. Перейдите в Deployments
3. Нажмите "Redeploy"

### Локальная проверка перед деплоем

```bash
# Запустите полную проверку
yarn check-build
```

## 📁 Структура проекта

```
src/
├── api/           # API клиенты
├── components/    # React компоненты
├── configs/       # Конфигурации
├── constants/     # Константы
├── hooks/         # React хуки
├── pages/         # Страницы приложения
├── providers/     # React провайдеры
├── router/        # Роутинг
├── types/         # TypeScript типы
└── utils/         # Утилиты
```

## 🔧 Технологии

- **React 19** - UI библиотека
- **Vite** - сборщик
- **TypeScript** - типизация
- **Material-UI** - UI компоненты
- **React Query** - управление состоянием
- **React Router** - роутинг
- **React Hook Form** - формы
- **Zod** - валидация

## 📚 Документация

- [Настройка CI/CD](./docs/ci-cd-setup.md)
- [Требования](./docs/requirements.md)
- [Планы развития](./docs/plan.md)
