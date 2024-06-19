const phoneInputs = document.querySelectorAll('[data-tel-input]');
const COUNTRY_CODE = '+7';
const length = COUNTRY_CODE.length;
const matrix = `${COUNTRY_CODE} (___) ___-____`;
const canvas = document.querySelector('.wrapper');

const changePlaceholder = () => {
  for (let i = 0; i < phoneInputs.length; i++) {
    if (event.target === phoneInputs[i]) {
      phoneInputs[i].placeholder = '+7 (___) ___-____';
      return;
    }
  }
}

const returnPlaceholder = () => {
  for (let i = 0; i < phoneInputs.length; i++) {
    if (event.target === phoneInputs[i]) {
      phoneInputs[i].placeholder = 'Номер телефона';
      return;
    }
  }
}

canvas.addEventListener('mouseover', changePlaceholder);
canvas.addEventListener('mouseout', returnPlaceholder);

const replacePhoneValue = (el) => {
  const def = matrix.replace(/\D/g, '');
  let i = 0;
  let val = el.value.replace(/\D/g, '');
  if (def.length >= val.length) {
    val = def;
  }
  el.value = matrix.replace(/./g, (a) => {
    // eslint-disable-next-line no-nested-ternary
    return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
  });
};

const onInputPhoneInput = ({ target }) => {
  replacePhoneValue(target);
};

const onFocusPhoneInput = ({ target }) => {
  if (!target.value) {
    target.value = matrix;
    target.addEventListener('input', onInputPhoneInput);
    target.addEventListener('blur', onBlurPhoneInput);
    target.addEventListener('keydown', onKeydownPhoneInput);
  }
};

const onKeydownPhoneInput = (e) => {
  if (e.target.selectionStart <= length && e.keyCode !== 8 && e.keyCode !== 46) {
    e.target.setSelectionRange(length, length);
  }
  if ((e.target.selectionStart === length || e.target.selectionStart === 1) && e.keyCode === 8) {
    e.preventDefault();
  }
  if (e.target.selectionStart === 1 && e.keyCode === 46) {
    e.preventDefault();
  }
};

const onBlurPhoneInput = ({ target }) => {
  if (target.value === matrix) {
    target.value = '';
    target.removeEventListener('input', onInputPhoneInput);
    target.removeEventListener('blur', onBlurPhoneInput);
  }
};

const initPhoneMask = () => {
  if (phoneInputs.length) {
    phoneInputs.forEach((input) => {
      input.addEventListener('focus', onFocusPhoneInput);
      if (input.value) {
        replacePhoneValue(input);
        input.addEventListener('input', onInputPhoneInput);
        input.addEventListener('blur', onBlurPhoneInput);
        input.addEventListener('keydown', onKeydownPhoneInput);
      }
    });
  }
};

export { initPhoneMask };
