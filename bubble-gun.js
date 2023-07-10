
// let gun = {
//     x: 250,
//     y: 250,
//     xBias: 5,
//     yBias: 0,
//     show: function(){
//         stroke(255);
//         strokeWeight(4);
//         fill(255);
//         rectMode(CENTER);
//         rect(this.x, this.y, 100,50)
//     }
// }
let gun;
let data;


class BubbleGun{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.xBias = 10;
        this.yBias = 1;
        this.gunWidth = 100;
        this.gunHeight = 50;
    }

    show(){
      
        stroke(255);
        strokeWeight(4);
        fill(255);
        rectMode(CENTER);
        rect(this.x, this.y, this.gunWidth,this.gunHeight);
    }

}

class Bubble{
    constructor(data){
      this.x = gun.x+(gun.gunWidth/2);
      this.y = gun.y;
      this.biasX = data.xBias;
      this.biasY = random(-1*data.yBias, data.yBias);
      this.movementTally = 0;
      this.xVelocity = 0;
      this.yVelocity = 0;
      this.xAccel = 0;
      this.yAccel = 0;
    }

    moveRandomly(min=-5,max=5){
        this.x = this.x + random(min,max) + this.biasX;
        this.y = this.y + random(min,max) + this.biasY;
        this.movementTally++;
    }

    moveInDirectionShot(){

    }
    
    show(){
        stroke(255);
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, 24, 24);
    }

   
};


let bubblesArray =[];

function setup() {
    createCanvas(1000, 1000);
    frameRate(30);
    
    gun  = new BubbleGun();
    gun.x = 50;
    gun.y = height/2;
  

   
  
}

function draw(){
    background(0,0,0);
    gun.show();

    if (mouseIsPressed === true) {
        bubblesArray.push(new Bubble(gun));
    }

    for(let i = bubblesArray.length - 1; i >= 0; i--){
        bubblesArray[i].moveRandomly();
        bubblesArray[i].show();
        if(bubblesArray[i].x >width +20){
            bubblesArray.splice(i, 1);

        }
    }
    
    // console.log(bubblesArray.length);
    
}


