/// <reference path="../node_modules/@types/p5/global.d.ts" />
import p5 from "p5";

// https://infosmith.biz/blog/it/p5js-technique
const sketch = (p: p5) => {
  let centY = 0;
  let x = 0;
  let y = 0;
  let r = 50;
  let theta = 0;
 
  p.setup = () => {
    p.createCanvas(600, 200);
    centY = p.height / 2;
    p.background(230);
    p.strokeWeight(1);
    p.stroke(255);
    p.line(0, 100, 600, 100);
  }

  p.draw = () => {
    drawCurve();
  }

  function drawCurve() {
    p.strokeWeight(2);
    p.stroke(0);
    x++;
    y = centY + r * p.sin(p.radians(theta));
    theta += 2;
    p.point(x, y);
  }
}

new p5(sketch);