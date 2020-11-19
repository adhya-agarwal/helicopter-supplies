var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	//packageSprite.velocityX=2;
	//packageSprite.visible=false;
	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
//helicopterSprite.velocityX=2;

	ground=createSprite(width/2, height-35, width,10);
	ground.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	var ground_options={
        isStatic:true
	}

	ground = Bodies.rectangle(width/2, 650, width, 10 , ground_options );
 	World.add(world, ground);

	 var package_options={
		restitution:1.0,
		isStatic:true
		}

	packageBody = Bodies.circle(width/2, 200 , 5 , package_options);
	World.add(world, packageBody);

	

	

	
	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
	rectMode(CENTER);
	background(0);
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 
	drawSprites();
   
  }
  
  function keyPressed() {
   if (keyCode === DOWN_ARROW) {
	  Matter.Body.setStatic(packageBody,false);
	}
  }
    
  




