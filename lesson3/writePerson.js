// Создайте файл writePerson.js
// 2. Напишите код, который создаст файл person.json в директории
// запускаемого скрипта и запишет в файл следующий объект:
// Основы Node.js
// 15 мин
// 💡 Подсказки:
// - Для преобразования объекта в текст используйте функцию JSON.stringify()
// - Для определения пути к файлу, используйте модуль path и его метод .join(),
// а также глобальное свойство __dirname
// - Используйте синхронный метод записи в файл



const fs = require('fs');
const path = require('path');

// const person = {
//     name: 'Ivan',
//     surname: 'Ivanov',
//     age: 30,
//     city: 'Moscow'
// }

const jsonPath = path.join(__dirname, "person.json")
console.log(jsonPath);

const person = JSON.parse(fs.readFileSync(jsonPath, 'utf8'))

person.age -= 10
person.city = " Ekaterenburg"

fs.writeFileSync(jsonPath, JSON.stringify(person, null, 2))