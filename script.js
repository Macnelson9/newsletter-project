'use strict';

// Selected elements
const userInput = document.getElementById('email__input').value;
const subscribeBtn = document.getElementById('success__page');
const errorEl = document.querySelector('.error');

subscribeBtn.addEventListener('click', function () {
  alert('I was clicked!!');
});
