#!/bin/bash

# Скрипт для проверки локальной сборки
echo "🔍 Проверка локальной сборки..."

# Проверяем, что yarn установлен
if ! command -v yarn &> /dev/null; then
    echo "❌ Yarn не установлен. Установите yarn: npm install -g yarn"
    exit 1
fi

# Устанавливаем зависимости
echo "📦 Установка зависимостей..."
yarn install --frozen-lockfile

# Проверяем линтер
echo "🔍 Проверка ESLint..."
yarn lint

# Проверяем TypeScript
echo "🔍 Проверка TypeScript..."
yarn tsc --noEmit

# Собираем проект
echo "🏗️ Сборка проекта..."
yarn build

# Проверяем, что сборка прошла успешно
if [ -d "dist" ]; then
    echo "✅ Сборка прошла успешно!"
    echo "📁 Файлы сборки находятся в папке dist/"
else
    echo "❌ Ошибка сборки!"
    exit 1
fi

echo "🎉 Все проверки пройдены успешно!"
