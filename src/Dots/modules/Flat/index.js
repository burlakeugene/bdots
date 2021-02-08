import { deepMerge, deepClone, isFunction } from '../../common';
export default class Flat{
  constructor(props) {
    let {
      canvas = false,
      settings = {},
    } = props;
    this.canvas = {
      element: canvas,
      context: canvas.getContext('2d'),
      isCanvas:
        (canvas instanceof Element || canvas instanceof HTMLDocument) &&
        canvas.tagName.toLowerCase() === 'canvas',
    };
    this.settings = {
      view: {
        styles: {
          background: '#101010'
        }
      }
    };
    this.cursor = { x: 0, y: 0 };
    this.setSettings(settings);
  }
  setSettings(newSettings = {}) {
    deepMerge(this.settings, newSettings);
    this.render({
      from: 'setSettings',
    });
  }
  getSettings() {
    return this.settings;
  }
  setRatio() {
    let { canvas } = this,
      { context, element } = canvas,
      ratio = window.devicePixelRatio || 1;
    element.width = element.clientWidth * ratio;
    element.height = element.clientHeight * ratio;
    context.scale(ratio, ratio);
  }
  clearCanvas() {
    let { canvas } = this,
      { context, element } = canvas;
    context.clearRect(0, 0, canvas.width, canvas.height);
  }
  listeners() {
    let { canvas } = this,
      { context, element } = canvas;
    window.addEventListener('resize', () => {
      this.render({
        from: 'resize',
      });
    });
    element.addEventListener('mousemove', (e) => {
      let { settings } = this,
        elementOffset = element.getBoundingClientRect(),
        x = e.clientX - elementOffset.left,
        y = e.clientY - elementOffset.top;
      this.cursor = {
        x,
        y,
      };
      this.render({
        from: 'mousemove',
      });
    });
    element.addEventListener('mouseout', (e) => {
      this.cursor = {
        x: 0,
        y: 0,
      };
      this.render({
        from: 'mouseout',
      });
    });
  }
  drawBackground() {
    let { canvas, settings } = this,
      { view } = settings,
      { context, element } = canvas,
      { background } = view.styles;
    context.fillStyle = background;
    context.fillRect(0, 0, element.width, element.height);
  }
  render(){
    this.setRatio();
    this.clearCanvas();
    this.drawBackground();
  }
}