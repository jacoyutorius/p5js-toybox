/// <reference path="../node_modules/@types/p5/global.d.ts" />
import p5 from "p5";

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(255);
    p.stroke(0, 50);
  };

  p.draw = () => {
    if (p.mouseIsPressed) {
      p.strokeWeight(p.random(20));
      p.line(p.pmouseX, p.pmouseY, p.mouseX, p.mouseY);
    }
  }
}

new p5(sketch);