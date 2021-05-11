
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject, paperObj;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	
	paperObj = new paper(100,600, 20);
	dustbinObj=new dustbin(1400,650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  groundObject.display();
  
  paperObj.display();
  dustbinObj.display();

}

function keyPressed() {
	if(keyCode === UP_ARROW)  {
		Matter.Body.applyForce(paperObj.body, paperObj.body.position, {x:105, y: -100});
	 }
}
