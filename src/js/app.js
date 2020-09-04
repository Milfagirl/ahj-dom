/* eslint-disable no-param-reassign */
const td = document.querySelectorAll('td');
const array = [...td];
const img = '<img src="https://github.com/netology-code/ahj-homeworks/raw/master/dom/pic/goblin.png" alt="картинка">';
setInterval(() => {
  array.forEach((el) => {
    el.innerHTML = '';
  });
  const rand = Math.floor(Math.random() * array.length);
  td.item(rand).innerHTML = img;
}, 1000);
