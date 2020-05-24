let kaio; 
let fresno;
function preload(){
 kaio = loadImage('./poe.jpg');
 fresno = loadImage('./bel.jpg'); 
}

var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function windowResized() {
  centerCanvas();
}

function setup() {
  cnv = createCanvas(830, 500);
  centerCanvas();
  background("#272327");
  fresno.resize(windowWidth / 2,windowHeight / 2)
}
function draw() {
 frameRate(20) 
 noFill()
 for ( let i  = 0; i < 55; i++){ 
 let x = random(windowWidth);
 let y = random(windowHeight); 
 let p = kaio.get(x,y)
 tint(p) 
 image(fresno,x,y,15,15)
 }
}