
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof1;
var rope1,rope2,rope3,rope4,rope5;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  roof1 = new Roof(600,100,300,20);

	bob1 = new Bob(500,600,50);
	bob2 = new Bob(550,600,50);
	bob3 = new Bob(600,600,50);
	bob4 = new Bob(650,600,50);
	bob5 = new Bob(700,600,50);

	rope1 = new Chain(bob1.body, {x:500,y:100});
	rope2 = new Chain(bob2.body, {x:550,y:100});
	rope3 = new Chain(bob3.body, {x:600,y:100});
  rope4 = new Chain(bob4.body, {x:650,y:100});
	rope5 = new Chain(bob5.body, {x:700,y:100});
	




	




	Engine.run(engine);
  
}


function draw() {
	//background("white");
  rectMode(CENTER);
  background(225);






  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();


  roof1.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();









  drawSprites();
 
}

function keyPressed(){


if(keyCode === UP_ARROW){

Matter.Body.applyForce( bob5.body, bob5.body.position, {x:-100, y:-100});
//bobObject1.body, bobObject1.body.position, {x:-100,y:-100}

}


}



