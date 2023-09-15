const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');
const settings = {
  dimensions: [ 1080, 1080 ],
  animate: true
};

const animate = () => {
console.log('dome');
requestAnimationFrame(animate);
};
// animate();

const sketch = ({ context, width, height }) => {
const agents = [];

for (let i = 0; i < 40; i++) {
  const x = random.range(0, width);
  const y = random.range(0, height);

  agents.push(new Agent(x,y));

  }
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    agents.forEach(agent => {
      agent.update();
      agent.draw(context);
    });

    // const agentA = new Agent(800, 400);
    // const agentB = new Agent(300, 700); 
    
    // agentA.draw(context);
    // agentB.draw(context);
  };
};

canvasSketch(sketch, settings);

class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    
  };
  }

class Agent {
    constructor(x, y) {
    this.pos = new Vector(x, y);
    this.vel = new Vector(random.range(-1,1), random.range(-1,1));
    this.radius = random.range(4,12);

    }

update() { 
  this.pos.x += this.vel.x;
  this.pos.y += this.vel.y;   
  
}

  draw(context) {
    
    context.save();
    context.translate(this.pos.x, this.pos.y);

    context.lineWidth = 4;

    context.beginPath();
    context.arc(0, 0, this.radius, 0, Math.PI * 2);
    context.stroke();

    context.restore();
  }
  }
