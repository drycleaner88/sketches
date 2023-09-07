const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.005

const w   = width   * 0.10; 
const h   = height  * 0.10; 
const gap = width   * 0.02;
const ix  = width   * 0.17;
const iy  = height  * 0.17;

const off = width   * 0.015;
let x, y;



for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
      x = ix + (w + gap) * i;
      y = iy + (h + gap) * j;
      
      context.beginPath();
      context.rect(x,y,w,h);
      context.strokeStyle = randColor();
      context.stroke();

      if (Math.random() > 0.5) {
        context.beginPath();
        context.rect(x + off / 2, y + off / 2, w - off, h - off);
        context.strokeStyle = randColor();
        context.stroke();

        context.beginPath();
        context.rect(x + off, y + off, w - off*2, h - off*2);
        context.strokeStyle = randColor();
        context.stroke();

        context.beginPath();
        context.rect(x + off*1.5, y + off*1.5, w - off*3, h - off*3);
        context.strokeStyle = randColor();
        context.stroke();

        context.beginPath();
        context.rect(x + off*2, y + off*2, w - off*4, h - off*4);
        context.strokeStyle = randColor();
        context.stroke();

        context.beginPath();
        context.rect(x + off*2.5, y + off*2.5, w - off*5, h - off*5);
        context.strokeStyle = randColor();
        context.stroke();
      }
    }
  }


  };
};

canvasSketch(sketch, settings);


const randColor = () =>  {
  return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}

