export const setRangeSlider = () => {
  const slider = document.querySelector('[data-range-slider]');
  const fields = document.querySelectorAll('[data-slider-field]');
  if (slider) {
    noUiSlider.create(slider, {/* eslint-disable-line */
      start: [1500, 9999],
      connect: true,
      step: 1,
      range: {
        'min': 1500,
        'max': 9999,
      },
    });
  }
  slider.noUiSlider.on('update', (values, handle) => {
    fields[handle].value = Math.round(values[handle]);
  });
  const getRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;
    slider.noUiSlider.set(arr);
  };
  fields.forEach((el, index) => {
    el.addEventListener('change', (e) => {
      getRangeSlider(index, e.currentTarget.value);
    });
  });
};
