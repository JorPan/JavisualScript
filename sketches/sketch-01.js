const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 2048, 2048 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.lineWidth = 8
    // context.strokeStyle = 'black';
    context.strokeStyle = 'rgb(0, ' + Math.floor(255 - 42.5 * Math.random()) + ', ' +Math.floor(255 - 42.5 * Math.random()) + ')';

    let w = 60;
    let h = 60;
    let gap = 15;
    let x,y;
    
    for (let i = 0; i< 25; i++){
      for (let j = 0; j < 25; j++){ 

        x = 100 + (w + gap) * i;
        y = 100 + (h + gap) * j;


        context.beginPath();
        context.rect(x, y, w, h);
        context.stroke();

        if (Math.random() > 0.77){
          context.beginPath();
          context.rect(x + 8, y + 8, w - 16, h - 16);
          context.strokeStyle = 'rgb(0, ' + Math.floor(255 - 42.5 * Math.random()) + ', ' +
                            Math.floor(255 - 42.5 * Math.random()) + ')';
          context.stroke();
        }
      
        }
      }
  };
};

canvasSketch(sketch, settings);
