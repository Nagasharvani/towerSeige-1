const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
//var box1, pig1;
//var bird, slingshot1;
var box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,ground1,ground2;

function preload(){
  polygonimage=loadImage("polygon.png")
}



function setup(){
    var canvas = createCanvas(1200,400);
    
    engine = Engine.create();
    world = engine.world;


    ground1 = new Ground(600,height,1200,20);
    ground2 = new Ground(400,260,250,20);
    

  // box1 = new Block(700,320,70,70);
    //box2 = new Block(920,320,70,70);
   // box3 = new Block(700,240,70,70);
  //  box4 = new Block(920,240,70,70);
   //box5 = new Block(810,160,70,70);
   box6 = new Block(330,235,30,40);
   box7= new Block(360,235,30,40)
   box8 = new Block(390,235,30,40)
   box9 = new Block(420,235,30,40)
   box10 = new Block(450,235,30,40)
   
   box12= new Block(360,195,30,40)
   box13= new Block(390,195,30,40)
   box14= new Block(420,195,30,40)
  
   box16= new Block(390,155,30,40)

   polygon = Bodies.circle(50,200,20);
World.add(world,polygon);

slingshot1 =new slingshot(this.polygon,{x:100,y:200})

   
   
    
}

function draw(){
  background(0);
    Engine.update(engine);
    ground1.display();
    ground2.display();
    box6.display();
    box7.display();
    
   
    box8.display();
    box9.display();
     box10.display();
     
     box12.display();
    box13.display();
    box14.display();

box16.display();

imageMode(CENTER)
image(polygonimage,polygon.position.x,polygon.position.y,40,40);
slingshot1.display();

text ("Drag and release the hexagonal stone,to hit the blocks",300,70);
textSize=60;


}
function mouseDragged()
{
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:MouseY})
    
}

function mouseReleased()
{
  slingshot1.fly()
}
