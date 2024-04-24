export const initDetails = () => {
  const canvasItems = document.querySelectorAll('.questions__item');
  const details = document.querySelectorAll('.questions__details');
  const summarys = document.querySelectorAll('.questions__summary');

  const runDetails = () => {
    for (let i = 0; i < canvasItems.length; i++) {
      if (event.currentTarget === canvasItems[i] && event.target !== summarys[i]) {
        if (details[i].open === true) {
          details[i].open = false;
          return;
        }
      }
    }
  };

  canvasItems.forEach((e) => {
    e.addEventListener('pointerdown', runDetails);
  });
};
