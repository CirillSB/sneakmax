export const initMap = () => {
  const script = document.createElement('script');
  let ok = false;
  const initScript = () => {
    if (ok === false) {
      script.src = 'https://api-maps.yandex.ru/2.1/?apikey=726b8561-cba3-487c-a8b4-e3e92f1591d0&lang=ru_RU';
      ok = true;
      document.body.appendChild(script);
      
    }
  }
  window.addEventListener('scroll', initScript);
  const mapElement = document.querySelector('#map');
  console.log(mapElement);
}
