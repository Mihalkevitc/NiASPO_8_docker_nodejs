# Базовый образ с Node.js
FROM node:21-alpine3.18

# Установка переменных окружения
ENV NODE_ENV=production
ENV PORT=3000

# Создание директории приложения
WORKDIR /app

# Копирование зависимостей package.json и package-lock.json
COPY package*.json ./

# Установка зависимостей
RUN npm install --only=production

# Копирование остальных файлов приложения
COPY . .

# Открытие порта 3000
EXPOSE 3000

# Команда для запуска приложения
CMD ["npm", "start"]
