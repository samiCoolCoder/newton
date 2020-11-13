const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;



var world, engine, canvas;
var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5;
var sling1, sling2, sling3, sling4, sling5;


function setup() {
  canvas = createCanvas(windowWidth / 2, windowHeight / 1.5);
  engine = Engine.create();
  world = engine.world;

 
 
  
 

  pendulum1 = new Pendulum(340, 450, "white");
  pendulum2 = new Pendulum(400, 450, "white");
  pendulum3 = new Pendulum(460, 450, "white");
  pendulum4 = new Pendulum(520, 450, "white");
  pendulum5 = new Pendulum(580, 450, "red");

  sling1 = new Sling(pendulum1.body, { x: 340, y: 100 });
  sling2 = new Sling(pendulum2.body, { x: 400, y: 100 });
  sling3 = new Sling(pendulum3.body, { x: 460, y: 100 });
  sling4 = new Sling(pendulum4.body, { x: 520, y: 100 });
  sling5 = new Sling(pendulum5.body, { x: 580, y: 100 });
}

function draw() {
  background(0);
  Engine.update(engine);
  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
}

function keyPressed()
{
 if(keyCode===RIGHT_ARROW)
 {
  Matter.Body.applyForce(pendulum5.body,pendulum5.body.position,{x:-1,y:1});
 }

}
