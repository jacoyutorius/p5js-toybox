/// <reference path="../node_modules/@types/p5/global.d.ts" />
import p5 from "p5";
(<any>window).p5 = p5;
import "p5/lib/addons/p5.sound";

class AudioCircle {
  p: p5;

  constructor(p5) {
    this.p = p5;
  }

  draw(volume) {
    const sound_volume = this.p.map(volume, 0, 1, 0, innerHeight);

    this.p.background("black");

    this.drawCircle(sound_volume);
    this.drawVolumeText(volume, sound_volume);
  }

  private

  drawCircle(sound_volume) {
    this.p.ellipse(innerWidth / 2, innerHeight / 2, 10 * sound_volume, 10 * sound_volume);
  }

  drawVolumeText(volume, sound_volume) {
    this.p.fill(this.p.color("#fff"));
    this.p.textSize(12);
    this.p.text(`volume: ${volume}`, innerWidth / 2 + 30, innerHeight / 2 + 20);
    this.p.text(`sound_volume: ${sound_volume}`, innerWidth / 2 + 30, innerHeight / 2 + 40);
  }
}

const sketch = (p: p5) => {
  let mike = null;
  let audioCircle;

  p.setup = () => {
    p.createCanvas(innerWidth, innerHeight);
    p.background("black");
    // p.frameRate(20);

    mike = new p5.AudioIn();
    mike.start();

    audioCircle = new AudioCircle(p);
  };

  p.draw = () => {
    const volume = mike.getLevel();
    audioCircle.draw(volume);

    // // [...Array(innerWidth).keys()].forEach(i => {});
  };
};

new p5(sketch);