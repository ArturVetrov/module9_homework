/*Задание 1.

Вам дана заготовка и результат, который вы должны получить. 
Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль. */

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

function xmlTransform() {
  const parser = new DOMParser();

  const xmlDOM = parser.parseFromString(xmlString, "text/xml");

  let listNodes = xmlDOM.querySelector("list");
  let studNodes = xmlDOM.querySelectorAll("student");

  let result = [];

  studNodes.forEach((element)=>{
    let student = new Object();
    let studentFirstName = element.querySelector("first");
    let studentSecondName = element.querySelector("second");
    let studentAge = element.querySelector("age");
    let studentProf = element.querySelector("prof");
    let nameNodes = element.querySelector("name");
    let studentLang = nameNodes.getAttribute("lang");
    student.name = studentFirstName.textContent + ' ' + studentSecondName.textContent;
    student.age = studentAge.textContent;
    student.prof = studentProf.textContent;
    student.lang = studentLang;

    result.push(student);
  })
  console.log(result);
}

xmlTransform();