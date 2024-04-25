export const choosePair = () => {
  const stepList = document.querySelectorAll('[data-step-list]');
  const step = document.querySelector('[data-step-number]');
  const slideButton = document.querySelector('[data-slide-button]');
  const submitButton = document.querySelector('[data-button-get]');
  const stepField = document.querySelector('[data-step-field]');
  const message = document.querySelectorAll('[data-message]');
  const removeEventListenerSlideButton = () => {
    slideButton.removeEventListener('pointerdown', makeStep);
  };
  const showMessage = () => {
    message.forEach((e) => {
      e.classList.remove('visually-hidden');
    });
  };

  for (let i = 0; i < stepList.length; i++) {
    stepList[i].dataset.dataStepList = i + 1;
  }

  step.textContent = stepList[0].dataset.dataStepList;

  const makeStep = () => {
    for (let i = 0; i < stepList.length - 1; i++) {
      if (!stepList[i].classList.contains('js-hidden')) {
        stepList[i].classList.add('js-hidden');
        stepList[i + 1].classList.remove('js-hidden');
        i += 1;
        step.textContent = stepList[i].dataset.dataStepList;
        if (step.textContent == stepList.length) { /* eslint-disable-line */
          stepField.classList.add('visually-hidden');
          removeEventListenerSlideButton();
        }
      }
    }
  };
  //   submitButton.addEventListener('click', function(event) {
  //  event.preventDefault();
  //  console.log('Кнопка не работает!');
  // });
  slideButton.addEventListener('pointerdown', makeStep);
  submitButton.addEventListener('pointerdown', showMessage);
};
