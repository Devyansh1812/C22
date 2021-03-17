//using shortforms for the long forms called as namespacing(for ease of use)
// we are using matter.js as a physics engine (helps us create objects with in-built physics laws)
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;

function setup(){
    var canvas = createCanvas(400,400);
    //create the engine and the world 
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

   //create ground as a rectangular body with the options which makes it static and add it to the world
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    //restitution is the bounciness of the object
    var ball_options={
        restitution:1
    }
   // create the ball as a circular body which can bounce and add it to the world
    ball= Bodies.circle(200,100,20,ball_options);
    World.add(world,ball);
    console.log(ball);
}

function draw(){
    background(0);
   // update the engine
    Engine.update(engine);
    // display the ground
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
   //display the ball
    ellipseMode(RADIUS);
   // 20 is used 2 times as x radius and y radius have to be same for ellipse to become a circle
    ellipse(ball.position.x,ball.position.y,20,20);

}