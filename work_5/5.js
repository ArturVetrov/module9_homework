let nmbPage = document.querySelector('.nmbPage');
let limit = document.querySelector('.limit');
const btn = document.querySelector('.btn');
const resultDiv = document.querySelector('.result');
const errorDiv = document.querySelector('.msgErr');

let chekPage = checkLimit = false;

recoverImg();

function corrInput() {
  if (nmbPage.value < 11 && nmbPage.value > 0 && !isNaN(Number(nmbPage.value))) { chekPage = true }
  if (limit.value < 11 && limit.value > 0 && !isNaN(Number(limit.value))) { checkLimit = true }
  
  if (chekPage == false && checkLimit == false) {
    resultDiv.innerHTML += '<p>Номер страницы и лимит вне диапазона от 1 до 10</p>';
  } else if (checkLimit == false) {
    resultDiv.innerHTML += '<p>Номер страницы вне диапазона от 1 до 10</p>';
  } else if (chekPage == false) {
    resultDiv.innerHTML += '<p>Лимит вне диапазона от 1 до 10</p>';
  }
}

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

function recoverImg() {
  if(localStorage.length > 0) {
  let imgMemory = localStorage.getItem('urlMemory');
  useRequest(imgMemory, displayResult);
  }
}

btn.addEventListener('click', () => {
  if (nmbPage.value < 11 && nmbPage.value > 0 && !isNaN(Number(nmbPage.value))) { chekPage = true }
  if (limit.value < 11 && limit.value > 0 && !isNaN(Number(limit.value))) { checkLimit = true }
  
  if (chekPage == false && checkLimit == false) {
    errorDiv.innerHTML += '<h1>Номер страницы и лимит вне диапазона от 1 до 10</h1>';
    chekPage = checkLimit = false;
  } else if (checkLimit == false) {
    errorDiv.innerHTML += '<h1>Лимит вне диапазона от 1 до 10</h1>';
    chekPage = checkLimit = false;
  } else if (chekPage == false) {
    errorDiv.innerHTML += '<h1>Номер страницы вне диапазона от 1 до 10</h1>';
    chekPage = checkLimit = false;
  } else {
  errorDiv.innerHTML = '';

  const url = `https://picsum.photos/v2/list?page=${nmbPage.value}&limit=${limit.value}`;
  localStorage.clear();
  localStorage.setItem('urlMemory', url);
    
  useRequest(url, displayResult);
  chekPage = checkLimit = false;
  }
})




