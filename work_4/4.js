/*Задание 4

Напишите код приложения, интерфейс которого представляет собой 2 input и кнопку submit. В input можно ввести любое число.

При клике на кнопку происходит следующее:

Если оба числа не попадают в диапазон от 100 до 300 или введено не число — выводить ниже текст «одно из чисел вне диапазона от 100 до 300»;
Если числа попадают в диапазон от 100 до 300 — сделать запрос c помощью fetch по URL https://picsum.photos/200/300, где первое число — ширина картинки, второе — высота. */

const width = document.querySelector('.width');
const height = document.querySelector('.height');
const btn = document.querySelector('.btn');
const resultDiv = document.querySelector('.result');

btn.addEventListener('click', () => {
  if(width.value & height.value > 300 || width.value & height.value < 100) {
    resultDiv.innerHTML += '<p>Одно из чисел вне диапазона от 100 до 300</p>';
    return
  }
    const imgUrl = `https://picsum.photos/${width.value}/${height.value}`;
    
    fetch(imgUrl)
     .then((response) => {
      resultDiv.innerHTML += `<div class = 'card-image'>
      <img
      src = '${response.url}'
      />
      </div>`;
    })
    
    .catch(() => {
      console.log('error')
  });
})