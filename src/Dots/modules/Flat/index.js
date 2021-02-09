import {
  deepMerge,
  deepClone,
  isFunction,
  getRandomBetween,
} from '../../common';
export default class Flat {
  constructor(props) {
    let { canvas = false, settings = {} } = props;
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
          background: '#101010',
        },
      },
      dots: {
        styles: {
          background: '#ffffff',
        },
        offset: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
      },
    };
    this.data = this.generateData();
    this.cursor = { x: 0, y: 0 };
    this.setSettings(settings);
    this.init();
  }
  generateData() {
    let count = 500,
      { canvas, settings } = this,
      { element } = canvas,
      { dots } = settings,
      { offset = {} } = dots,
      { top = 0, right = 0, bottom = 0, left = 0 } = offset,
      data = [];
    for (let i = 0; i <= count - 1; i++) {
      let x = getRandomBetween(0 + left, 100 - right),
        y = getRandomBetween(0 + top, 100 - bottom),
        size = Math.random() * 2;
      data.push({
        x,
        y,
        size,
        offsetX: 0,
        offsetY: 0
      });
    }
    return data;
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
        x: (x / element.clientWidth) * 100,
        y: (y / element.clientHeight) * 100,
      };
      this.offsetDots(e);
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
  offsetDots(event) {
    let { cursor, data } = this,
      radius = 15;
    for (let i = 0; i <= data.length - 1; i++) {
      let dot = data[i];
      if (
        (cursor.x - (radius / 2) <= dot.x && cursor.x + (radius / 2) >= dot.x) &&
        (cursor.y - (radius / 2) <= dot.y && cursor.y + (radius / 2) >= dot.y)
      ) {
        dot.offsetX = event.movementX;
        dot.offsetY = event.movementY;
      }
    }
  }
  drawBackground() {
    let { canvas, settings } = this,
      { view } = settings,
      { context, element } = canvas,
      { background } = view.styles;
    context.fillStyle = background;
    context.fillRect(0, 0, element.width, element.height);
  }
  drawDots() {
    let { canvas, settings, data } = this,
      { dots } = settings,
      { context, element } = canvas,
      { background } = dots.styles;
    context.fillStyle = background;
    for (let i = 0; i <= data.length - 1; i++) {
      let dot = data[i];
      context.beginPath();
      context.arc(
        element.clientWidth * (dot.x / 100) + dot.offsetX,
        element.clientHeight * (dot.y / 100) + dot.offsetY,
        dot.size,
        0,
        2 * Math.PI
      );
      context.fill();
    }
  }
  render() {
    this.setRatio();
    this.clearCanvas();
    this.drawBackground();
    this.drawDots();
  }
  init() {
    this.listeners();
    this.render();
  }
}
