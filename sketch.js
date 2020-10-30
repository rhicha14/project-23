
var helicopter,box,ground;
var himg,boximg,boxBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;



function preload(){
    himg = loadImage("helicopter.png");
    boximg = loadImage("package.png");
}

function setup() {
    createCanvas(800,700);
    rectMode(CENTER);

    box = createSprite(width/2,80,10,10);
    box.addImage(boximg);
    box.scale = 0.2;

    helicopter = createSprite(width/2,200,10,10);
    helicopter.addImage(himg);
    helicopter.scale = 0.6;

    ground = createSprite(width/2,height-35,width,10);
    ground.shapeColor = color(255);

    box1 = createSprite(500,610,20,100);
    box1.shapeColor = color("yellow");

    box2 = createSprite(300,610, 20,100);
	box2.shapeColor=color("yellow");

	box3 = createSprite(400,650, 200,20);
	box3.shapeColor=color("yellow");

    engine = Engine.create();
    world = engine.world;

    boxBody = Bodies.circle(width/2,200,5,{restitution:0.8});
    Matter.Body.setStatic(boxBody,true);
    World.add(world,boxBody);
        

    var ground_options = {
        isStatic: true
    }
    ground = Bodies.rectangle(width/2,650,width,10,{isStatic:true});
    World.add(world,ground);

    box1 = Bodies.rectangle(width/2,650,width,10,{isStatic:true});
    World.add(world,box1);

    box2 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, box2);
	 
	box3 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world,  box3);

   


    //console.log(ground);
    Engine.run(engine);
}

function draw() {
    rectMode(CENTER);
    background(0);
    //Engine.update(engine);
    box.x = boxBody.position.x
    box.y = boxBody.position.y
    drawSprites();
    keyPressed();

    }

    function keyPressed() {
        if (keyCode == DOWN_ARROW){
            console.log("down");
            Matter.Body.setStatic(boxBody,false);
        }
    }