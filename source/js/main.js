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
import {
  setMaskTel
} from './modules/mask-tel/set-mask-tel';
import {
  initDynamicAdaptive
} from './modules/dynamic-adaptive/init-dynamic-adaptive';

window.addEventListener('DOMContentLoaded', () => {

  testWebP();
  iosVhFix();

  setRangeSlider();
  initDynamicAdaptive();

  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
    initDetails();
    choosePair();
    setMaskTel();
    initMap();
  });
});
