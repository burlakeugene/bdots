import { Flat } from '../package';
import './styles.scss';
window.addEventListener('load', () => {
  let canvas = document.querySelectorAll('canvas');
  canvas.forEach((item, index) => {
    new Flat({
      canvas: item,
      settings: {}
    })
  });
});
