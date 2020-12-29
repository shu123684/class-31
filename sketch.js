const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies;

var engine, world;
var particles = [];
var p;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();

  p = new Particle(300, 50, 20, 20);
  particles.push(p);
  
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  p.display();

  drawSprites();
}