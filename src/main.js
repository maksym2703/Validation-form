import '/style.css';
import { blackedLock, blackedPerson } from './modules/blackedIcons';
import { validInputs } from './modules/validButton';
import { showPassword } from './modules/showPassword';
import { normalize } from './modules/normalElem';

export const email = document.querySelector('#email');
export const password = document.querySelector('#password');
const form = document.forms.form;
export const eye = document.querySelector('#eye');

email.addEventListener('click', blackedPerson);
password.addEventListener('click', blackedLock);

form.addEventListener('input', validInputs);

email.addEventListener('blur', normalize);
password.addEventListener('blur', normalize);

eye.addEventListener('click', showPassword);
