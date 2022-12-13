/*Задание 3

Напишите код приложения, интерфейс которого представляет собой input и кнопку. 
В input можно ввести любое число. При клике на кнопку происходит следующее: 
Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне диапазона от 1 до 10».
Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR по URL https://picsum.photos/v2/list?limit=10, 
где get-параметр limit — это введённое число.*/

function useRequest(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);

  xhr.onload = function() {
    if(xhr.status != 200) {
      console.log('УПС Статус: ', xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      if(callback) {
        callback(result);
      }
    }
  };

  xhr.onerror = function() {
    console.log('Ошибка! Статус: ', xhr.status);
  }

  xhr.send();
};

const resultDiv = document.querySelector('.result');
const btn = document.querySelector('.btn');
const input = document.querySelector('input');

function displayResult(apiData) {
  let cards = '';

  apiData.forEach(item => {
    const cardBlock = `
  <div class="card">
  <img
    src="${item.download_url}"
    class="card-image"
  />
  <p>${item.author}</p>
</div>`;

    cards += cardBlock;
  });

  resultDiv.innerHTML = cards;
}

btn.addEventListener('click', () => {
  let params ='';
  if(input.value < 1 || input.value > 10) {
    alert('Число вне диапазона от 1 до 10');
    return
  } else {
   params = input.value;
  }
  useRequest('https://picsum.photos/v2/list?limit=' + params, displayResult);
})