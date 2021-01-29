const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var x_box, y_box;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15;
var ball;
var lol;
function setup(){
    var canvas = createCanvas(800, 800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(450,300,50,50);
    box2 = new Box(450, 350, 50, 50);
    box3 = new Box(450, 400, 50, 50);
    box4 = new Box(450, 450, 50, 50);
    box5 = new Box(450, 500, 50, 50);
    box6 = new Box(450, 550, 50, 50);
    box7 = new Box(450, 600, 50, 50);
    box8 = new Box(450, 650, 50, 50);
    box9 = new Box(510, 700, 50, 50);
    box10 = new Box(510, 750, 50, 50);
    box11 = new Box(510, 700, 50, 50);
    box12 = new Box(510, 650, 50, 50);
    box13 = new Box(570, 600, 50, 50);
    box14 = new Box(570, 550, 50, 50);
  




    //box2 = new Box(240,100,50,100);
    
    ground = new Ground(400,height - 40,800,20)
    ball = Bodies.circle(150, 350, 20, {isStatic: false, restitution: 0.5});
    World.add(world, ball);
    var options = {
        bodyA: ball.body,
        pointB: {x:200, y: 350},
        stiffness: 0.04,
        length: 10
    }
   lol = Matter.Constraint.create(options)
   World.add(world, lol)
}

function draw(){
    background(0);
    Engine.update(engine);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    ground.display();
   ellipseMode(RADIUS);
   ellipse(ball.position.x, ball.position.y, 20, 20);
   strokeWeight(4)
   stroke(255, 255, 255);
   line(ball.body.position.x, ball.body.position.y, {x:200, y: 350})
   
    
}