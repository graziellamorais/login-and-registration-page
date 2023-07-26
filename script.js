const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

// Showing login popup
btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

// Closing login popup
iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});
