
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject, paper1, paper2, paper3, paper4;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	
	paper1 = new paper(100,600, 20);
	paper2 = new paper(300,600, 20);
	paper3 = new paper(1000,600, 20);
	paper4 = new paper(600,600, 20);
	dustbinObj=new dustbin(1400,650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  groundObject.display();
  
  paper1.display();
  paper2.display();
  paper3.display();
  paper4.display();
  dustbinObj.display();

}

function keyPressed() {
	if(keyCode === UP_ARROW)  {
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x:105, y: -110});
	 }

	 if(keyCode === UP_ARROW)  {
		Matter.Body.applyForce(paper2.body, paper2.body.position, {x:90, y: -100});
	 }

	 if(keyCode === UP_ARROW)  {
		Matter.Body.applyForce(paper3.body, paper3.body.position, {x:50, y: -70});
	 }

	 if(keyCode === UP_ARROW)  {
		Matter.Body.applyForce(paper4.body, paper4.body.position, {x:55, y: -150});
	 }
}
