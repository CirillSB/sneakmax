const initPhoneMask = () => {
  const phoneInputs = document.querySelectorAll('[data-tel-input]');
  const canvas = document.querySelector('.wrapper');
  const COUNTRY_CODE = '+7';
  let val;
  let matrix = `${COUNTRY_CODE} (___) ___-____`;
  const length = COUNTRY_CODE.length;
  console.log(phoneInputs);

  for (let i = 0; i < phoneInputs.length; i++) {

    const initPlaceholder = () => {
      const changePlaceholder = () => {
        for (let i = 0; i < phoneInputs.length; i++) {
          if (event.target === phoneInputs[i]) {
            phoneInputs[i].placeholder = '+7 (___) ___-____';
          }
        }
      }

      const returnPlaceholder = () => {
        for (let i = 0; i < phoneInputs.length; i++) {
          if (event.target === phoneInputs[i]) {
            phoneInputs[i].placeholder = 'Номер телефона';
          }
        }
      }
      console.log('obj');
      canvas.addEventListener('mouseover', changePlaceholder);
      canvas.addEventListener('mouseout', returnPlaceholder);
    }




    const getKeyValue = (e) => {
      // if (e.target.closest('[data-tel-input]') && matrix.includes('_', -1)) {
      if (e.target.closest('[data-tel-input]')) {
        if (Number.isFinite(e.key) === false) {
          val = event.key;
        }
      }
    };

    const replacePhoneValue = (el) => {
      console.log(el);
      if (matrix.includes('_') && isFinite(val) === true) {
        matrix = matrix.replace('_', val);
      }
      el.value = matrix;
      console.log(el.value);
    };

    // document.addEventListener('keydown', getKeyValue);

    const onInputPhoneInput = ({ target }) => {
      replacePhoneValue(target);
    };

    const onFocusPhoneInput = ({ target }) => {
      if (!target.value) {
        target.value = matrix;
        target.addEventListener('input', onInputPhoneInput);
        target.addEventListener('blur', onBlurPhoneInput);
        target.addEventListener('keydown', onKeydownPhoneInput);
        document.addEventListener('keydown', getKeyValue);
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
      target.value = '';
      target.removeEventListener('input', onInputPhoneInput);
      target.removeEventListener('blur', onBlurPhoneInput);
      document.removeEventListener('keydown', getKeyValue);
    };

    const initPhoneMask = () => {

      initPlaceholder();
      if (phoneInputs.length) {
        // phoneInputs.forEach((input) => {
        // for (let i = 0; i < phoneInputs.length; i++) {
        phoneInputs[i].addEventListener('focus', onFocusPhoneInput);
        if (phoneInputs[i].value) {
          replacePhoneValue(phoneInputs[i]);
          phoneInputs[i].addEventListener('input', onInputPhoneInput);
          phoneInputs[i].addEventListener('blur', onBlurPhoneInput);
          phoneInputs[i].addEventListener('keydown', onKeydownPhoneInput);
        }
        console.log(phoneInputs[i]);
        // }
        // });
      }
    };
  }

}


// const phoneInputs = document.querySelectorAll('input[type="tel"]');
// const phoneInputs = document.querySelectorAll('[data-tel-input]');
// const canvas = document.querySelector('.wrapper');
// const COUNTRY_CODE = '+7';
// let val;
// let matrix = `${COUNTRY_CODE} (___) ___-____`;
// const length = COUNTRY_CODE.length;







// const initPlaceholder = () => {
//   const changePlaceholder = () => {
//     for (let i = 0; i < phoneInputs.length; i++) {
//       if (event.target === phoneInputs[i]) {
//         phoneInputs[i].placeholder = '+7 (___) ___-____';
//       }
//     }
//   }

//   const returnPlaceholder = () => {
//     for (let i = 0; i < phoneInputs.length; i++) {
//       if (event.target === phoneInputs[i]) {
//         phoneInputs[i].placeholder = 'Номер телефона';
//       }
//     }
//   }

//   canvas.addEventListener('mouseover', changePlaceholder);
//   canvas.addEventListener('mouseout', returnPlaceholder);
// }




// const getKeyValue = (e) => {
//   // if (e.target.closest('[data-tel-input]') && matrix.includes('_', -1)) {
//   if (e.target.closest('[data-tel-input]')) {
//     if (Number.isFinite(e.key) === false) {
//       val = event.key;
//     }
//   }
// };

// const replacePhoneValue = (el) => {
//   console.log(el);
//   if (matrix.includes('_') && isFinite(val) === true) {
//     matrix = matrix.replace('_', val);
//   }
//   el.value = matrix;
//   console.log(el.value);
// };

// // document.addEventListener('keydown', getKeyValue);

// const onInputPhoneInput = ({ target }) => {
//   replacePhoneValue(target);
// };

// const onFocusPhoneInput = ({ target }) => {
//   if (!target.value) {
//     target.value = matrix;
//     target.addEventListener('input', onInputPhoneInput);
//     target.addEventListener('blur', onBlurPhoneInput);
//     target.addEventListener('keydown', onKeydownPhoneInput);
//     document.addEventListener('keydown', getKeyValue);
//   }
// };

// const onKeydownPhoneInput = (e) => {
//   if (e.target.selectionStart <= length && e.keyCode !== 8 && e.keyCode !== 46) {
//     e.target.setSelectionRange(length, length);
//   }
//   if ((e.target.selectionStart === length || e.target.selectionStart === 1) && e.keyCode === 8) {
//     e.preventDefault();
//   }
//   if (e.target.selectionStart === 1 && e.keyCode === 46) {
//     e.preventDefault();
//   }
// };

// const onBlurPhoneInput = ({ target }) => {
//   target.value = '';
//   target.removeEventListener('input', onInputPhoneInput);
//   target.removeEventListener('blur', onBlurPhoneInput);
//   document.removeEventListener('keydown', getKeyValue);
// };

// const initPhoneMask = () => {

//   initPlaceholder();
//   if (phoneInputs.length) {
//     // phoneInputs.forEach((input) => {
//     // for (let i = 0; i < phoneInputs.length; i++) {
//       phoneInputs[i].addEventListener('focus', onFocusPhoneInput);
//       if (phoneInputs[i].value) {
//         replacePhoneValue(phoneInputs[i]);
//         phoneInputs[i].addEventListener('input', onInputPhoneInput);
//         phoneInputs[i].addEventListener('blur', onBlurPhoneInput);
//         phoneInputs[i].addEventListener('keydown', onKeydownPhoneInput);
//       }
//       console.log(phoneInputs[i]);
//     // }
//     // });
//   }
// };

export { initPhoneMask };
