
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject, launcherObject ;
var launchForce = 100;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var world,boy,stone1;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

  stone1 = new stone(150,400,30);

	mango1=new mango(1140,100,30);
	mango2=new mango(1030,200,30);
	mango3=new mango(1200,190,30);
	mango4=new mango(950,230,30);
	mango5=new mango(1000,100,30);
	mango6=new mango(1120,180,30);
	mango7=new mango(900,180,30);
	mango8=new mango(1070,100,30);

	treeObj=new tree(1050,580);

	groundObject=new ground(width/2,600,width,20);

	launcherObject = new Launcher(stone1.body,{x:200 , y:50});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  stone1.display();

  groundObject.display();

  launcherObject.display();
}


 function mouseDragged()
{ 
   Matter.Body.setPosition(stone1.body,{x:mouseX , y:mouseY}) 
}
 

 function mouseReleased()
 {
	launcherObject.fly();
 }
 

 function keyPressed()
{
  if(keyCode===32)
  {
    Matter.Body.setPosition(stone1.body,{x:140,y:315});
    
	thread.attacher(stone1.body);
  }
}





