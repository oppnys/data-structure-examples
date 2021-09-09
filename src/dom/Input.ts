const inputElement = document.createElement('input');

inputElement.disabled = true;
inputElement.value = '123456';

inputElement.addEventListener('focus', (e) => {
  console.log('focus');
  e.stopImmediatePropagation();
});

inputElement.addEventListener('blur', (e) => {
  console.log('input', e.target === inputElement);
  e.stopImmediatePropagation();
});

export default inputElement;
