// Импортируем модуль http для создания веб-сервера
const http = require('http');

// Создаем веб-сервер
const server = http.createServer((req, res) => {
  // Устанавливаем заголовок ответа с типом контента
  res.setHeader('Content-Type', 'text/plain');
  // Отправляем ответ клиенту с приветственным сообщением
  res.end('Привет, мир! Это простой веб-сервер на Node.js\n');
});

// Устанавливаем порт, на котором будет слушать сервер
const PORT = process.env.PORT || 3000;

// Запускаем сервер и слушаем указанный порт
server.listen(PORT, () => {
  console.log(`Сервер запущен на порте ${PORT}`);
});
