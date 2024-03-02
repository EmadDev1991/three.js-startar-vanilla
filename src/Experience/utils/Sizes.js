import EventEmitter from "./EventEmitter";


export default class Sizes extends EventEmitter{
  constructor() {
    super();
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.pixelRatio = Math.min(window.devicePixelRatio, 2);
    this.aspect = this.width / this.height;

    //resize event
    window.addEventListener("resize", () => {
      this.resize();
    });
  }

  /// Resize event
  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.pixelRatio = Math.min(window.devicePixelRatio, 2);
    this.aspect = this.width / this.height;

    this.trigger("resize");
  }
}
