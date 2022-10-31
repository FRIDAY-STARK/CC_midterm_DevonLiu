function eye(x,y,m,a){
    
    this.c1 = color(41,92,150); //color(53,83,214);
    this.c2 = color(20,45,74);
    this.c3 = color(255);
    this.position = createVector(0,0);
  //draw the eye
    
    this.position = createVector(x,y);
    let n = m*3/5;
    
    push();
    translate(this.position.x,this.position.y);
    rotate(radians(a));
    
    fill(this.c1);
   stroke(this.c3);
   strokeWeight(m/50);
    beginShape();
    vertex(0,0);
    bezierVertex(m/3, -n/2-n/5, 2*(m/3), -n/2-n/5, 3*(m/3), 0); // lid
  bezierVertex( 2*(m/3),n/2+n/8,m/3 , n/2+n/8, 0, 0);
    endShape();
    
    fill(this.c3);
     noStroke();
    beginShape();
    vertex(0,0);
      bezierVertex(m/3, -n/2, 2*(m/3), -n/2, 3*(m/3), 0); //white part of the eye
  bezierVertex( 2*(m/3),n/2,m/3 , n/2, 0, 0);
  endShape();

  //eyeball
  ellipseMode(CENTER);
  fill(this.c2);
  ellipse(3*(m/3)/2,- n/32, n/1.5,n/1.5);
  fill(this.c3);
  ellipse(3*(m/3)/2, -n/32,n/2,n/2);
  fill(this.c2);
  ellipse(3*(m/3)/2, -n/32, n/2.5,n/2.5);

    pop();
  

}