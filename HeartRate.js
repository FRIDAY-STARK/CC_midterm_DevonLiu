class HeartRate{
  
  constructor(){
    this.x1 = 0;
    this.x2 = 0;
    this.y1 = 0;
    this.y2 = 0;
    this.xholder = 0;
    this.yholder = 0;
    this.xspeed = 2;
    this.yspeed = 1;
    this.yacceleration = 1;
    //this.count = 0;
    this.num = 0;
    
    this.hy = height/2;
    this.hbCover = 0;
    
    this.fsize=createVector(width,height);
    this.fx = -this.fsize.x;
    this.fy = 0;
    this.fspeed = width/180;
    
  }
  
  display(){
    strokeWeight(1);
    stroke(0);
    
    line(this.x1,this.y1,this.x2,this.y2);
  }
  
  chaos(){
    this.x1 = this.xholder;
    this.y1 = this.yholder;
    if (hOption==1){
    this.x2 = random(0,width/4);
    this.y2 = random(0,height);
    }
    else if(hOption ==2){
      this.x2 = random(width/4,width/2);
      this.y2 = random(height/4,height/4*3);
    }
    
    else if(hOption==3){
      this.x2 = random(width/2, width/4*3);
      this.y2 = random(height/8*3,height/8*5);
    }
    this.xholder = this.x2;
    this.yholder = this.y2;
  }
  
  straight1(){
    this.x2 = width/4*3;
    this.y2 = height/2;
    this.xholder = this.x2;
    this.yholder = this.y2;
  }
  
  straighten(){
    this.x1 = this.xholder;
    this.y1 = this.yholder;
    this.x2 += this.xspeed;
    this.xholder = this.x2;
    this.yholder = this.y2;
  }
  
  hbDisplay(hbSize){
    let xi = width/3;
    let xvar = width/9;
    let yvar1 = height/(2.5*hbSize);
    let yvar2 = height/(4*hbSize);
    let yvar3 = height/(8*hbSize);
   
    noFill();
    stroke(0);
    strokeWeight(1);
    for(let i=0; i <3;i+=1){
    line(xi*i,this.hy,xi*i+xvar,this.hy);
    line(xi*i+xvar,this.hy,xi*i+xvar+xvar/4,this.hy- yvar1 );
    line(xi*i+xvar+xvar/4,this.hy-yvar1,xi*i+xvar+xvar/4*2, this.hy+yvar2);
    line(xi*i+xvar+xvar/4*2, this.hy+yvar2,xi*i+xvar+xvar/4*3,this.hy-yvar3);
    line(xi*i+xvar+xvar/4*3,this.hy-yvar3,xi*i+xvar+xvar/4*4,this.hy);
    line(xi*i+xvar+xvar/4*4,this.hy,xi*(i+1),this.hy);
    }
    }
  heartbeat(){ //display the heartbeat by erasing the cover; the hearbeat pattern is under the cover function named heartbeat
    noStroke();
    fill(220);
  rect(this.hbCover, 0, width, height);
  this.hbCover = this.hbCover + width/200;
  
  if(this.hbCover>=width+width/15){
    print(frameCount);
  this.hbCover = 0;
  }
  }
    
    fdisplay(){
      rectMode(CORNER);
      noStroke();
      fill(220,30);
      rect(this.fx,this.fy, this.fsize.x, this.fsize.y);
      rect(this.fx- width/10,this.fy, this.fsize.x, this.fsize.y);
      rect(this.fx-width/5 ,this.fy, this.fsize.x, this.fsize.y);
    }
  
  fading(){
    this.fx +=this.fspeed;
  }
  }
  
  
  
  
