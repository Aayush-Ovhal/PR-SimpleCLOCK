const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

// let hr = hour();
// let mn = minute();
// let sc = second();

function setup(){
createCanvas(400,400);
 engine = Engine.create();
 world = engine.world;  
 
 angleMode(DEGREES);

//  translate(200,200);
//  rotate(-90);
}

function draw(){
    background(0);
    Engine.update(engine);

    translate(200,200);
    rotate(-90);

    let hr = hour();
    let mn = minute();
    let sc = second();

    strokeWeight(8);
    stroke(0,48,143);
    noFill();
    let sec = map(sc,0,60,0,360);
    arc(0,0,300,300,0,sec);

    strokeWeight(8);
    stroke(132,222,2);
    let min = map(mn,0,60,0,360);
    arc(0,0,320,320,0,min);

    strokeWeight(8);
    stroke(196,98,16);
    let hrs = map(hr % 12,0,12,0,360);
    arc(0,0,340,340,0,hrs);

    push();
    rotate(sec);
    strokeWeight(2);
    stroke(0,48,143);
    line(0,0,130,0);
    pop();

    push();
    rotate(min);
    strokeWeight(4);
    stroke(132,222,2);
    line(0,0,110,0);
    pop();

    push();
    rotate(hrs);
    strokeWeight(8);
    stroke(196,98,16);
    line(0,0,90,0);
    pop();

    push();
    rotate(90);
    strokeWeight(1);
    stroke("white")
    text("STYLUS N FLUTE",-50,0);
    pop();
   
    push();
    rotate(90);
    strokeWeight(1);
    stroke(37,159,167);
    text(hr + ":" + mn + ":" +  sc,-25,100);
    pop();
}