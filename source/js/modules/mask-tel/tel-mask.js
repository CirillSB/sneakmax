export const initTelMask = () => {

  const canvas = document.querySelector('.wrapper');
  const phoneInputs = document.querySelectorAll('[data-tel-input]');


  const getInputNumbersValue = (input) => {
    return input.value.trim().replace(/\D/g, '');
  }



  const onPhoneInput = () => {
    let formattedInputValue = '';
    for (let i = 0; i < phoneInputs.length; i++) {
      if (event.target === phoneInputs[i]) {
        let inputNumbersValue = getInputNumbersValue(phoneInputs[i]);
        phoneInputs[i].value = inputNumbersValue;
        if (!inputNumbersValue) {
          return phoneInputs[i].value = '';
        }

        if (inputNumbersValue[0].includes('7') || inputNumbersValue[0].includes('8') || inputNumbersValue[0].includes('9')) {
          if (inputNumbersValue[0] == '9') {
            inputNumbersValue = `+7 ${inputNumbersValue}`;
            phoneInputs[i].value = inputNumbersValue;




          };
          let firstSymbols;
          if (inputNumbersValue[0] == '8') {
            firstSymbols = '8';
          } else {
            firstSymbols = '+7';
          }
          inputNumbersValue = firstSymbols;
          console.log(firstSymbols);
        } else {
          return phoneInputs[i].value = `+${inputNumbersValue.substring(0, 17)}`;
        }

      }
    }


  }

  canvas.addEventListener('input', onPhoneInput)
}
