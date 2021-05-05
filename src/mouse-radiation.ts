/// <reference path="../node_modules/@types/p5/global.d.ts" />
import p5 from "p5";

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(innerWidth, innerHeight);
    p.background(255);
  }

  p.mouseDragged = () => {
    p.strokeWeight(1);
    p.stroke(0, 50);
    p.line(innerWidth / 2, innerHeight / 2, p.mouseX, p.mouseY);
  }
};

new p5(sketch);