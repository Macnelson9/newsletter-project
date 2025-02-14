'use strict';
document.addEventListener('DOMContentLoaded', function () {
  const strongEl = document.querySelector('.strong');
  const userEmail = localStorage.getItem('userEmail');

  if (userEmail) {
    strongEl.innerHTML = `A confirmation email has been sent to 
            <strong>${userEmail}.</strong> Please open it and
            click the button inside to confirm your subscription.`;
    localStorage.removeItem('userEmail'); // Clean up after use
  }
});
