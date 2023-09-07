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
let cl;
let x, y;

cl = "#" + Math.random()

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
      x = ix + (w + gap) * i;
      y = iy + (h + gap) * j;
      
      context.beginPath();
      context.rect(x,y,w,h);
      context.strokeStyle = "#555555";
      context.stroke();

      if (Math.random() > 0.5) {
        context.beginPath();
        context.rect(x + off / 2, y + off / 2, w - off, h - off);
        context.strokeStyle = "#888888";
        context.stroke();

        context.beginPath();
        context.rect(x + off, y + off, w - off*2, h - off*2);
        context.strokeStyle = "#aaaaaa";
        context.stroke();

        context.beginPath();
        context.rect(x + off*1.5, y + off*1.5, w - off*3, h - off*3);
        context.strokeStyle = "#999999";
        context.stroke();

        context.beginPath();
        context.rect(x + off*2, y + off*2, w - off*4, h - off*4);
        context.strokeStyle = "#666666";
        context.stroke();

        context.beginPath();
        context.rect(x + off*2.5, y + off*2.5, w - off*5, h - off*5);
        context.strokeStyle = "#222222";
        context.stroke();
      }
    }
  }


  };
};

canvasSketch(sketch, settings);

