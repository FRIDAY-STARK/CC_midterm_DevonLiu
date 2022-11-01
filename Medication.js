class medication{
  constructor(x_,y_){
    this.x = x_;
    this.y = y_;
    this.position = createVector(x_, y_);
    this.liquid = color(4,217,196);
    this.angle = 0;
    this.sizePlug = createVector(25,110);
    this.sizeLiquid = createVector(25,90);
    this.changeLiquid = createVector(0,-5);
    this.changePlug = createVector(0,-0.5);
    this.changePosition = createVector(0,-5);
  }
  
  needle(){
    
    //the static body
    push();
    translate(this.x,this.y);
    rotate(radians(this.angle));
     noStroke();
    fill(this.liquid);
    rect(-7.5,70,this.sizeLiquid.x,this.sizeLiquid.y);
    stroke(0);
    strokeWeight(3);
    noFill();
    line(0,0,0,50); //needle
    rect(-2.5,50,5,20); //the rect under needle
    rect(-7.5,70,25,100); // the cylinder
    pop();
    
    //the changing part
    push();
    translate(this.position.x, this.position.y);
    rotate(radians(this.angle));
    fill(0);
    rect(-7.5,160,25,10); // the rubber plug
    noFill();
    stroke(0);
    strokeWeight(3);
   rect(-7.5,180,this.sizePlug.x,this.sizePlug.y);//the body of the plug
    rect(-10,180+this.sizePlug.y, 5+this.sizePlug.x, 10); //the bottom of the plug
    
    pop();
    
    //scales on the cylinder
    push();
    translate(this.x,this.y);
    rotate(radians(this.angle));
    stroke(0);
    strokeWeight(3);
    for(let i=1; i<7; i+=1){
    line(-7.5,70+100/7*i,-2.5,70+100/7*i);
    }
    fill(255);
    rect(-22.5,170,55,10);//the bottom of the cylinder
    pop();
  }
  
  rotation(){
    if (this.angle<120){
      this.angle+=5;
    }
  }
    
  boost(){
    if(this.sizeLiquid.y>0){
    this.sizeLiquid.add(this.changeLiquid);
      this.sizePlug.add(this.changePlug);
      this.position.add(this.changePosition);
      
    }
  }
    
  
  
  
}