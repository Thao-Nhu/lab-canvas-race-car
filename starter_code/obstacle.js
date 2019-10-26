function random(from, to) {
  // TODO
  return from+Math.floor(Math.random()*(to-from));
}

class Obstacle {
  constructor() {
    // TODO
   
    this.y=0;
    this.h=20;
    this.w=random(200,680);
    this.x=random(110,780-this.w);
    
  }

  draw() {
    // TODO
    ctx.fillStyle="red";
    ctx.fillRect(this.x,this.y,this.w,this.h);
  }

  hits(car) {
    // TODO
  return ((car.x+100>=this.x) && (car.x<(this.x+this.w)) && (car.y<=(this.y+20)) && ((car.y+car.h)>this.y))
  }
}