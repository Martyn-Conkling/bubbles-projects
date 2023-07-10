let bubbleArray = [];


//Setup and Draw are part of p5.js
function setup() {
    createCanvas(1000, 1000);
    frameRate(30);

    for(let i =0; i < 1000; i++){
        let bubble = new Bubble();
        bubbleArray.push(bubble);

    }
   
  
}

function draw() {
    background(0);
    for(let i=0; i < bubbleArray.length; i++){
        bubbleArray[i].move();
        bubbleArray[i].show()
    };
};
  
class Bubble{
    constructor(){
      this.x = Math.floor(random(0,1000));
      this.y = Math.floor(random(0,1000));
      this.biasX = 0;
      this.biasY = 0;
    }

    move(){
        this.x = this.x + random(-5,5) + this.biasX;
        this.y = this.y + random(-5,5) + this.biasY;
    }
    
    show(){
        stroke(255);
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, 24, 24);
    }
};


  