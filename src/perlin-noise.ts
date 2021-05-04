/// <reference path="../node_modules/@types/p5/global.d.ts" />
import p5 from "p5";
(<any>window).p5 = p5;
import "p5/lib/addons/p5.sound";

const sketch = (p: p5) => {
  let mike = null;

  p.setup = () => {
    p.createCanvas(innerWidth, innerHeight);
    p.background("black");
    // p.frameRate(20);

    mike = new p5.AudioIn();
    mike.start();
  };

  p.draw = () => {
    const volume = mike.getLevel();
    const change_sound_volume = p.map(volume, 0, 1, 0, innerHeight);
    // console.log({ volume, change_sound_volume });

    p.background("black");
    p.ellipse(innerWidth / 2, innerHeight / 2, 10 * change_sound_volume, 10 * change_sound_volume);

    // p.background("black");
    // p.ellipse(innerWidth/2, innerHeight - change_sound_volume - innerHeight/2, 10, 10);
    // [...Array(innerWidth).keys()].forEach(i => {});

    p.fill(p.color("#fff"));
    p.textSize(12);
    p.text(`volume: ${volume}`, innerWidth / 2 + 30, innerHeight / 2 + 20);
    p.text(`change_sound_volume: ${change_sound_volume}`, innerWidth / 2 + 30, innerHeight / 2 + 40);
  };
};

new p5(sketch);