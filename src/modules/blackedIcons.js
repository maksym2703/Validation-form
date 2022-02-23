const person = document.querySelector('#person');
const lock = document.querySelector('#lock');

export const blackedPerson = () => {
  person.style.color = '#000000';
};

export const blackedLock = () => {
  lock.style.color = '#000000';
};
