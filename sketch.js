
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;

var ground;
var rope;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;
  
	bob1 = new Bob (100,220,15,15);
	bob2 = new Bob (130,220,15,15);
	bob3 = new Bob (160,220,15,15);
	bob4 = new Bob (190,220,15,15);
	bob5 = new Bob (220,220,15,15);
	ground = new Ground (160,100,150,10);
  rope=new Chain(bob1.body,ground.body,-40,0);
  rope2=new Chain(bob2.body,ground.body,-20,0);
  rope3=new Chain(bob3.body,ground.body,0,0);
  rope4=new Chain(bob4.body,ground.body,20,0);
  rope5=new Chain(bob5.body,ground.body,40,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
   bob1.display();
   bob2.display();
   bob3.display();
   bob4.display();
   bob5.display();
   rope.display();
   rope2.display();
   rope3.display();
   rope4.display();
   rope5.display();

   ground.display();
    

}



function keyPressed() {
  if(keyCode===RIGHT_ARROW){
      Matter.Body.applyForce(bob1.body,bob1.body.position,{x:15,y:10});
  }
}
