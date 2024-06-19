export const choosePair = () => {
  const canvas = document.querySelector('.wrapper');
  const stepList = document.querySelectorAll('[data-step-list]');
  const step = document.querySelector('[data-step-number]');
  const slideButton = document.querySelector('[data-slide-button]');
  const submitButton = document.querySelector('[data-button-get]');
  const stepField = document.querySelector('[data-step-field]');
  const message = document.querySelectorAll('[data-message]');
  const form = document.querySelector('.selection-form');

  const removeCanvasEventListener = () => {
    canvas.removeEventListener('pointerdown', runPointerDown);
    canvas.removeEventListener('keydown', runPointerDown);
  };

  const showMessage = () => {
    console.log('message');
    message.forEach((e) => {
      e.classList.remove('visually-hidden');
    });
    form.removeEventListener('submit', showMessage);
    if (form.submit) {
      console.log('submit');
      setTimeout(console.log('obj'), 10000);
    }
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
        if (stepList[i].querySelector('input')) {
          stepList[i].querySelector('input').focus();
        }
        if (stepList[i].querySelector('textarea')) {
          stepList[i].querySelector('textarea').focus();
        }

        if (step.textContent == stepList.length) { /* eslint-disable-line */
          stepField.classList.add('visually-hidden');
          removeCanvasEventListener();
        }
      }
    }
  };

  const runClick = () => {
    if (event.target === slideButton) {
      makeStep();
    }
  }

  const runPointerDown = (e) => {
    if (document.activeElement === slideButton) {
      if (e.keyCode === 32 || e.keyCode === 13) {
        makeStep();
      }
    }

  }

  canvas.addEventListener('keydown', runPointerDown);
  canvas.addEventListener('pointerdown', runClick);
  form.addEventListener('submit', showMessage);
};
