/* eslint-disable */
const script = document.createElement('script');
let ok = false;
window.addEventListener('scroll', () => {
  if (ok === false) {
    ok = true;
    setTimeout(() => {
      script.src = 'https://api-maps.yandex.ru/2.1/?apikey=726b8561-cba3-487c-a8b4-e3e92f1591d0&lang=ru_RU';
      document.body.appendChild(script);
    }, 1000);
  }
});

const initMap = () => {
  script.onload = () => {

    ymaps.ready(init);

    function init() {
      ymaps.ready(function() {
        let myMap = new ymaps.Map('map', {
          center: [55.75378462995323, 37.618437642084835],
          zoom: 9,
        }, {
          searchControlProvider: 'yandex#search',
        });
        myMap.geoObjects; 
      });
    }
  };
};

export {
  initMap
};
