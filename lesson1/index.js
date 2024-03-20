// Задание №5 (тайминг 10 минут)
// Основы Node.js
// Необходимо написать HTTP сервер и запустить сервер на порту 3000, который в браузере
// по URL “/” возвращает такую страницу:
// Подсказки:
// - Обязательно импортируйте модуль http для реализации сервера: const http =
// require('http');
// - Используйте метод модуля http .createServer(): http.createServer((req, res) => {});
// - Для запуска сервера не забудьте вызвать метод .listen(): server.listen(3000);
// - Обязательно установите заголовки ответа с помощью метода res.writeHead():
// 'Content-Type': 'text/html; charset=UTF-8'
// - Отправьте HTML код с помощью метода res.end()

const http = require('http');
const server =  http.createServer((reg, res) => {
    if (reg.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8'
        })
        res.end('<h1>Главная страница</h1>')
    } else if (reg.url === '/about') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8'
        })
        res.end('<h1>Страница about</h1>')
    }
    
})
server.listen(3000)
