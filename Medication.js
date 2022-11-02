class Medication{
  constructor(x_,y_){
    this.xypo = createVector(x_,y_)
    this.position = createVector(x_, y_);
    this.liquid = color(255,90,89); //color(4,217,196);
    this.angle = 0.0;
    this.sizePlug = createVector(25,110);
    this.sizeLiquid = createVector(25,90);
    this.changeLiquid = createVector(0,-0.6);
    // this.changePlug = createVector(0,-0.06);
    this.changePosition = createVector(0.463,0.463*tan(radians(130-90)));
    this.move = createVector(1,1);
    this.amt = 0;
    this.grayishBlue =  color(81,150,166);//grayishBlue 
    this.skin = color(0,0,0);
  }
  
  needle(){
    rectMode(CORNER);
    let r =radians(this.angle);
    //the static body
    push();
    scale(1);
    translate(this.xypo.x,this.xypo.y);
    rotate(r);
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
    rotate(r);
    fill(0);
    rect(-7.5,+160,25,10); // the rubber plug
    noFill();
    stroke(0);
    strokeWeight(3);
   rect(-7.5,+180,this.sizePlug.x,this.sizePlug.y);//the body of the plug
    rect(-10,+180+this.sizePlug.y, 5+this.sizePlug.x, 10); //the bottom of the plug
    
    pop();
    
    //scales on the cylinder
    push();
    translate(this.xypo.x,this.xypo.y);
    rotate(r);
    stroke(0);
    strokeWeight(3);
    for(let i=1; i<7; i+=1){
    line(-7.5,+70+100/7*i,-2.5,+70+100/7*i);
    }
    fill(255);
    rect(-22.5,+170,55,10);//the bottom of the cylinder
    pop();
  }
  
  rotation(){
    if (this.angle<130){
     this.angle+=0.5;
     }
  }
  
  moving(){
        //rotate(radians(this.angle));
        this.xypo.add(this.move);
        this.position.add(this.move);
  }
    
  boost(){
    if(this.sizeLiquid.y>0){
    this.sizeLiquid.add(this.changeLiquid);
      this.sizePlug.add(this.changePlug);
      this.position.add(this.changePosition);
      
    }
  }
  
  skinDisplay(){
    rectMode(CENTER);
    noStroke();
    fill(this.skin);
    rect(width/2,height*5.5/6,width,height*1.5/6);
  }
  
  skinUnchanging(){
    this.skin = this.grayishBlue;
  }
  
  skinChanging(){
    if(this.amt<1){
      this.amt+=0.005;
    }
    this.skin = lerpColor(this.grayishBlue, this.liquid, this.amt);
    
  }
    
  
  
  
}