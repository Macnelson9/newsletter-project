'use strict';

// Selected elements
const userInput = document.getElementById('email__input');
const subscribeBtn = document.getElementById('subscribe__btn');
const successPage = document.querySelector('.success__page');
const errorEl = document.querySelector('.error');
const strongEl = document.querySelector('.strong');

const validateInput = function (str) {
  if (str.includes('@')) {
    errorEl.classList.add('hidden');
    successPage.href = 'success.html';
    localStorage.setItem('userEmail', str);
    userInput.style.borderColor = 'hsl(231, 7%, 60%)';
    userInput.style.color = 'hsl(234, 29%, 20%)';
    userInput.style.backgroundColor = 'hsla(231, 6.90%, 60.00%, 0.00)';
    strongEl.innerHTML = `A confirmation email has been sent to 
          ${str}. Please open it and
          click the button inside to confirm your subscription.`;
  } else {
    errorEl.classList.remove('hidden');
    successPage.href = '##';
    userInput.style.borderColor = 'hsl(4, 100%, 67%)';
    userInput.style.color = 'hsl(4, 100%, 67%)';
    userInput.style.backgroundColor = 'hsla(4, 100.00%, 67.10%, 0.27)';
  }
};

subscribeBtn.addEventListener('click', function () {
  validateInput(userInput.value);
});
