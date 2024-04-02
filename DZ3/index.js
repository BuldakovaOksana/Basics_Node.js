// Напишите HTTP сервер на express и реализуйте два обработчика “/” и “/about”, где:

// — На каждой странице реализован счетчик просмотров
// — Значение счетчика необходимо сохранять в файл каждый раз, когда обновляется страница
// — Также значение счетчика должно загружаться из файла, когда запускается обработчик страницы
// — Таким образом счетчик не должен обнуляться каждый раз, когда перезапускается сервер.

const fs = require("fs");
const path = require("path");
const express = require("express");

const app = express();
const port = 3000;
const jsonPath = path.join(__dirname, "count.json");

// const count = {
//     main: 0,
//     about: 0
// }

const count = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));

app.get("/", (req, res) => {
  count.main++;
  fs.writeFileSync(jsonPath, JSON.stringify(count));
  res.send(`
    <h1>Корневая страница</h1>
    <p>Просмотров: ${count.main}</p>
    <a href='/about'>Ссылка на страницу /about</a>
    `);
});

app.get("/about", (req, res) => {
  count.about++;
  fs.writeFileSync(jsonPath, JSON.stringify(count));
  res.send(`
    <h1>Страница about</h1>
    <p>Просмотров: ${count.about}</p>
    <a href='/'>Ссылка на страницу /</a>
    `);
});

app.listen(port);
