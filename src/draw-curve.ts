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
    p.createCanvas(innerWidth, innerHeight);
    centY = innerHeight / 2;
    p.background(1);
    // p.strokeWeight(1);
    // p.stroke(111);
    // p.line(0, centY, innerWidth, centY);

    p.frameRate(10);

    console.log({ centY });
  }

  p.draw = () => {
    drawCurve();
  }

  function drawCurve() {
    p.strokeWeight(1);
    p.stroke(255);
    x++;
    y = centY + r * p.sin(p.radians(theta)) * 5;
    p.point(x, centY);

    p.strokeWeight(0.5);
    p.stroke(p.color(p.random(255), p.random(255), p.random(255)));
    p.line(x, centY, x, y);

    theta += 2;
    // p.fill(1);
    // p.textSize(50);
    // p.stroke(255);
    // p.text(`${x},${y}`, 20, 60);
    // console.log(`${y}`);
  }
}

new p5(sketch);