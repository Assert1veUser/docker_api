# Используем официальный образ Node.js в качестве базового образа
FROM node:14

# Устанавливаем рабочую директорию в /app
WORKDIR /api

# Копируем package.json и package-lock.json (если они есть)
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код в рабочую директорию
COPY . .

# Экспортируем порт 3000 для сервера Node.js
EXPOSE 3000

# Запускаем сервер Node.js при запуске контейнера
CMD [ "node", "app.js" ]