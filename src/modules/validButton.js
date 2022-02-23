export const email = document.querySelector('#email');
export const password = document.querySelector('#password');
export const button = document.querySelector('#button');
export const header = document.querySelector('#header');

export const validInputs = () => {
  if (!email.validity.valid) {
    button.style.backgroundColor = '#d2877d';
    button.style.color = '#ffffff';
    button.style.border = '1px solid #d2877d';
    header.textContent = 'Oops!';
  } else if (email.validity.valid) {
    header.textContent = 'Welcome!';
    button.style.backgroundColor = '#ffffff';
    button.style.color = '#8e8e93';
    button.style.border = '1px solid #8e8e93';
  }
  if (email.validity.valid && password.validity.valid) {
    button.style.backgroundColor = '#5ab98c';
    button.style.color = '#ffffff';
    button.style.border = '1px solid #5ab98c';
    header.textContent = 'Welcome';
  }
  if (email.validity.valid && !password.validity.valid && password.value !== '') {
    button.style.backgroundColor = '#d2877d';
    button.style.color = '#ffffff';
    button.style.border = '1px solid #d2877d';
    header.textContent = 'Wrong Password';
  }
};
