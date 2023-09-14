const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    const w = width   * 0.01;
    const h = height  * 0.01;

   for (let i = 0; i < w * 10; i++) {
    const num = i * w * Math.random(0.1, 0.4);
   
    
    context.save();
    context.lineWidth = 1;
    context.beginPath();
    context.fillStyle = '#dddddd';
    context.arc(0, 0, num, 0, Math.PI * 2);
    context.stroke();
    context.restore();
    
    context.save();
    context.translate(width, height);
    context.beginPath();
    context.fillStyle = '#aaaaaa';
    context.arc(0, 0, num, 0, Math.PI * 2);
    context.stroke();
    context.restore();
    
    context.save();
    context.translate(0, height);
    context.beginPath();
    context.fillStyle = '#999999';
    context.arc(0, 0, num, 0, Math.PI * 2);
    context.stroke();
    context.restore();
    
    context.save();
    context.translate(width, 0);
    context.beginPath();
    context.fillStyle = '#444444';
    context.arc(0, 0, num, 0, Math.PI * 2);
      context.stroke();
      context.restore();
      
    context.save();
      context.translate(width * 0.5, height* 0.5);
      context.beginPath();
      context.fillStyle = '#ffffff';
      context.arc(0, 0, num * 0.1, 0, Math.PI * 2);
      context.fill();
      context.restore();  
   };
  };
};

canvasSketch(sketch, settings);
