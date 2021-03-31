
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5;
var world,boy,boyObj;

function preload(){
	boyObj=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1150,150,30);
	mango3=new mango(1170,170,30);
	mango4=new mango(1050,150,30);
	mango5=new mango(1020,120,30);

	stoneObj=new stone(200,40,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

	boy = new Boy(stoneObj.body,{x:230, y:400});
}

function draw() {

  background(51,53,225);
  //Add code for displaying text here!
  image(boyObj,200,340,200,300);
  
  this.detectCollision(stoneObj, mango1);	
  this.detectCollision(stoneObj, mango2);	
  this.detectCollision(stoneObj, mango3);	
  this.detectCollision(stoneObj, mango4);	
  this.detectCollision(stoneObj, mango5);	


  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stoneObj.display();
  boy.display(); 

  groundObject.display();
  
}
function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    boy.fly();
} 

function detectCollision(lstone, lmango)
{
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	{
		if(distance <= lmango.r + lstone.r)
		{
			Matter.Body.setStatic(lmango.body, false);
		}
	}

}