export const showPassword = () => {
  const eye = document.querySelector('#eye');
  const password = document.querySelector('#password');
  const unlock = document.querySelector('#unlock');
  const lock = document.querySelector('#lock');
  if (password.type === 'password') {
    password.type = 'text';
    eye.style.color = '#000000';
    unlock.classList.remove('hidden');
    lock.classList.add('hidden');
  } else {
    password.type = 'password';
    eye.style.color = '#8e8e93';
    unlock.classList.add('hidden');
    lock.classList.remove('hidden');
  }
};
