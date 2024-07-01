import {
  iosVhFix
} from './utils/ios-vh-fix';
import {
  testWebP
} from './utils/test-webp';
import {
  initModals
} from './modules/modals/init-modals';
import {
  Form
} from './modules/form-validate/form';
import {
  setRangeSlider
} from './modules/range-slider/range-slider';
import {
  initMap
} from './modules/map/init-map';
import {
  initDetails
} from './modules/details-accordeon/init-details';
import {
  choosePair
} from './modules/pair-selection/pair-selection';
// import {
//   setMaskTel
// } from './modules/mask-tel/set-mask-tel';
// import {
//   initPhoneMask
// } from './modules/mask-tel/phone-mask';
import {
  initTelMask
} from './modules/mask-tel/tel-mask';
import {
  initDynamicAdaptive
} from './modules/dynamic-adaptive/init-dynamic-adaptive';

window.addEventListener('DOMContentLoaded', () => {

  testWebP();
  iosVhFix();

  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
    setRangeSlider();
    initDetails();
    choosePair();
    // initPhoneMask();
    initTelMask();
    initMap();

    // const canvas = document.querySelector('.wrapper');
    // const formPages = document.querySelectorAll('[data-step-list]');
    // const slideButton = document.querySelector('[data-slide-button]');

    // const turnPages = (e) => {
    //   if (e.target.closest('[data-slide-button]')) {
    //     for (let i = 0; i < formPages.length; i++) {
    //       if (formPages[i].classList.contains('.js-hidden')) {
    //         formPages[i].classList.remove('.js-hidden');
    //         formPages[i + 1].classList.add('.js-hidden');
    //         // console.log('obj');
    //       }
    //     }
    //   }

    // }


    // canvas.addEventListener('pointerdown', turnPages);
    // canvas.addEventListener('keydown', turnPages);

  });
});
