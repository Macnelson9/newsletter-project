# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Live Site URL: [Add live site URL here]()

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript localStorage
- DOM manipulation
- Form validation

### What I learned

- Working with localStorage to persist data between pages
- Form validation using JavaScript
- Dynamic styling based on user input
- DOM manipulation to update content
- Event handling for form submission
- Error state management and user feedback

Key code implementation examples:

```javascript
// Email validation and localStorage implementation
const validateInput = function (str) {
  if (str.includes('@')) {
    localStorage.setItem('userEmail', str);
    // Success state styling
  } else {
    // Error state styling
  }
};
```
