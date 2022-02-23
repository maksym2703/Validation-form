export const email = document.querySelector('#email');
export const password = document.querySelector('#password');
export const button = document.querySelector('#button');
export const header = document.querySelector('#header');

export const normalize = () => {
  if (email.value === '' && password.value === '') {
    button.style.backgroundColor = '#ffffff';
    button.style.border = '#8e8e93';
    button.style.color = '#8e8e93';
    header.textContent = 'Welcome!';
  }
};
