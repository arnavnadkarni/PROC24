
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var ball
var engine,world

var groundObj,leftSide,rightSide

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth,windowHeight);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.


	
	Engine.run(engine);
	
	
	ball= new Ball(100,400,20)
	groundObj= new Ground(width/2,670,width,20)
	leftSide= new Ground(1100,600,20,120)
	rightSide= new Ground(1450,600,20,120)
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background(109,900,100);
  
  
  groundObj.display()
  leftSide.display()
  rightSide.display()
  ball.display()
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})

	}
}


