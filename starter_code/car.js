class Car {
  constructor() {
    // this.img
    const img = document.createElement('img');
    img.onload = () => {
      this.img = img;

      const imgRatio = img.naturalWidth/img.naturalHeight;

      // TODO
      this.w=100;
      this.h=this.w/imgRatio;
      this.y=1600-3/2*this.h;
      this.x=450;
      this.speed=0;
    }
    img.src = "images/car.png";

  }

  draw() {
    if (!this.img) return; // if `this.img` is not loaded yet => don't draw
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    // TODO
  }

  moveLeft() {
    // TODO 110 890
    this.speed+=6;
    if (this.x>=(110+this.speed)) {
      this.x-=this.speed;
    } else if (this.x>=111){
      this.speed=this.x-110;
      this.x-=this.speed;
    }
  }
  moveRight() {
    // TODO
    this.speed+=6;
    if (this.x<=(790-this.speed)) {
      this.x+=this.speed;
    } else if (this.x<=789){
      this.speed=790-this.x;
      this.x+=this.speed;
    }

  }
}