const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof1;
//Create multiple bobs, mulitple ropes varibale here
var bob1, bob2, bob3, bob4,bob5, chain, chain2, chain3, chain4, chain5;

function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	bob1=new bob(350,400,50)
	bob2=new bob(400,400,50)
	bob3=new bob(450,400,50)
	bob4=new bob(500,400,50)
	bob5=new bob(550,400,50)
	chain=new rope(bob1.body,{x:350,y:100})
	chain2=new rope(bob2.body,{x:400,y:100})
	chain3=new rope(bob3.body,{x:450,y:100})
	chain4=new rope(bob4.body,{x:500,y:100})
	chain5=new rope(bob5.body,{x:550,y:100})
	roof1=new roof(450,100,300,20)

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");


  //call display() to show ropes here
  chain.display()
  chain2.display()
  chain3.display()
  chain4.display()
  chain5.display()
  roof1.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  
  //create ellipse shape for multiple bobs here


}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-25,y:150});
	}
}