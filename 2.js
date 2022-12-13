/*Задание 2.

Вам дана заготовка и результат, который вы должны получить. 
Ваша задача — написать код, который будет преобразовывать JSON в JS-объект и выводить его в консоль. */

const jsonString = `
{
  "list": [
   {
    "name": "Petr",
    "age": "20",
    "prof": "mechanic"
   },
   {
    "name": "Vova",
    "age": "60",
    "prof": "pilot"
   }
  ]
 }
 `;

 function jsonTransform() {
  const data = JSON.parse(jsonString);
  const list = data.list;

  let result = [];
  let objList = new Object();

  list.forEach(element => {
    objList = element
    result.push(objList);
  });
  console.log(result);
 }
 
 jsonTransform();