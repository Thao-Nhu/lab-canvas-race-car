let car=new Car();
let obstacles=[];
let gameover;
let points;

const ctx = document.querySelector('canvas').getContext('2d');
const W = ctx.canvas.width;
const H = ctx.canvas.height;

function draw() {
  //
  // Iteration 1: road drawing
  ctx.fillStyle="#008b00";
  ctx.fillRect(0,0,1000,1600);
  ctx.fillStyle="#808080";
  ctx.fillRect(70,0,860,1600);
  ctx.fillStyle="white";
  ctx.fillRect(90,0,20,1600);
  ctx.fillStyle="white";
  ctx.fillRect(890,0,20,1600);
  
  
  ctx.beginPath();
  ctx.strokeStyle="white";
  ctx.lineWidth=12;
  ctx.setLineDash([40,40]);
  ctx.moveTo(494,60);
  ctx.lineTo(494,1600);
  ctx.stroke();

  // TODO

  //
  // Iteration 2: car drawing
  //
  car.draw();
  // TODO 

  //
  // Iteration #4: obstacles
  //

  // TODO
  obstacles.forEach(function(el){el.draw()})
  //
  // Iteration #5: collisions
  //

  // TODO

  //
  // Iteration #6: points
  //

  // TODO

}



document.onkeydown = function (e) {
  if (!car) return;
  if (e.keyCode===37) {car.moveLeft();}
  if (e.keyCode===39) {car.moveRight();}
  // TODO
}

document.onkeyup = function(e) {
  car.speed = 0;
};

let frames = 0;
function animLoop() {
  frames++;
  obstacles.forEach(function(el){
    el.y+=1;
  });
  if (frames%100===0){obstacles.push(new Obstacle())};
  draw();
  

  var gameover = obstacles.some(function(obstacle) {
    return obstacle.hits(car);
  });
  if (!gameover) {
    requestAnimationFrame(animLoop);
  }
}

function startGame() {
  // TODO
  
  requestAnimationFrame(animLoop);
}

document.getElementById("start-button").onclick = function() {
  startGame();
  
};

// auto-start
//startGame();