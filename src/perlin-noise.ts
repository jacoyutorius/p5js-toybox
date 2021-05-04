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
    const change_sound_volume = this.p.map(volume, 0, 1, 0, innerHeight);

    this.p.background("black");
    // this.p.ellipse(innerWidth / 2, innerHeight / 2, 10 * change_sound_volume, 10 * change_sound_volume);

    this.drawCircle(change_sound_volume);
    this.drawVolumeText(volume, change_sound_volume);
  }

  private

  drawCircle(change_sound_volume) {
    this.p.ellipse(innerWidth / 2, innerHeight / 2, 10 * change_sound_volume, 10 * change_sound_volume);
  }

  drawVolumeText(volume, change_sound_volume) {
    this.p.fill(this.p.color("#fff"));
    this.p.textSize(12);
    this.p.text(`volume: ${volume}`, innerWidth / 2 + 30, innerHeight / 2 + 20);
    this.p.text(`change_sound_volume: ${change_sound_volume}`, innerWidth / 2 + 30, innerHeight / 2 + 40);
  }
}

const sketch = (p: p5) => {
  let mike = null;
  let audioCircle;

  p.setup = () => {
    p.createCanvas(innerWidth, innerHeight);
    p.background("black");
    p.frameRate(20);

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