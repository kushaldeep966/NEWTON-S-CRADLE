
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint ; 
var bobObject1,bobObject2,bobObject3 ,bobObject4,bobObject5;
var roofObject ; 


function preload()
{
	
}


function setup() {
	engine = Engine.create();
	world = engine.world;
	createCanvas(850, 600);

	bobObject1=new bob(300,350,50);
	bobObject2=new bob(350,350,50);
	bobObject3=new bob(400,350,50);
	bobObject4=new bob(450,350,50);
	bobObject5=new bob(500,350,50);
	roofObject = new roof(400,200,300,20);
	rope1= new rope(bobObject1.body,roofObject.body,-50*2,0);
	rope2= new rope(bobObject2.body,roofObject.body,-25*2,0);
	rope3= new rope(bobObject3.body,roofObject.body,-0*2,0);
	rope4= new rope(bobObject4.body,roofObject.body,25*2,0);
	rope5= new rope(bobObject5.body,roofObject.body,50*2,0);
	
Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  
  drawSprites();

	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
	roofObject.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
	
}


function keyPressed() {
	if (keyCode===UP_ARROW) {
	  Matter.Body.applyForce(bobObject1.body, bobObject1.body.position,{x:-730,y:0});
	 }
   }
  
