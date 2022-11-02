let charge;
let numCharge;
let noiseWave;
let eyeCount;
let med;
let deepBlue;

function setup() {
  createCanvas(windowWidth, windowHeight);
  charge = new battery();
  numCharge= 1;
  noiseWave = new waving();
  eyeCount=0;
  med = new Medication(width/2,200);
  deepBlue = color(30,35,64);

}

function draw() {
  background(0);
  
  if(millis()/1000<5.8){
    noiseWave.display();
    charge.display();
    charge.blinking();
    if (frameCount%120<60){
      charge.lightning();
    }
  }
    
  else if(millis()/1000<16){
    noiseWave.variation();
    noiseWave.display();
    charge.lightning();
    charge.display();
    charge.charging();
    if (numCharge<8){
      if (frameCount%80<1){
      numCharge+=1;
      }
  }
}
  else if (millis()/1000<18){
    noiseWave.variation();
    noiseWave.display();
    charge.display();
    charge.charging();
  }


  else if(millis()/1000<24){
    background(0);
    for (let i=0; i<eyeCount; i+=30){
      eye(random(0,width),random(0,height),random(300,10),30);
}

    }
  // else if(millis()/1000<23){
  //   background(130,0,0);
  // }
  

  else if(millis()/1000<24+1.5){
    background(100,0,0);
    translate(random(-5,5),random(-5,5)); // //eyes are shaking
    for(let i=0; i<width; i+=100){
      for(let j=0; j<height; j+=80){ 
        eye(i,j,120,30);
           }
        }
    }
  else if(millis()/1000<24+3){
    background(100,0,0);
    translate(random(-4,4),random(-4,4)); // //eyes are shaking
    for(let i=0; i<width; i+=100){
      for(let j=0; j<height; j+=80){ 
        eye(i,j,90,30);
           }
        }
    
  }
  
  else if(millis()/1000<24+4.5){
    background(100,0,0);
    translate(random(-3,3),random(-3,3)); // //eyes are shaking
    for(let i=0; i<width; i+=100){
      for(let j=0; j<height; j+=80){ 
        eye(i,j,60,30);
           }
        }
    
  }
  else if(millis()/1000<24+6){
    background(100,0,0);
    translate(random(-2,2),random(-2,2)); // //eyes are shaking
    for(let i=0; i<width; i+=100){
      for(let j=0; j<height; j+=80){ 
        eye(i,j,30,30);
           }
        }
    
  }
  else if(millis()/1000<24+7.5){
    background(100,0,0);
    translate(random(-1,1),random(-1,1)); // //eyes are shaking
    for(let i=0; i<width; i+=100){
      for(let j=0; j<height; j+=80){ 
        eye(i,j,10,30);
           }
        }
    
  }


   else if(millis()/1000<31.5+5.5){
    background(255);
   med.rotation();
   med.needle();
    //med.skin();
  }
  else if(millis()/1000<31.5+9){
    background(255);
    med.moving();
    med.needle();
    //med.skin();
  }
  else if(millis()/1000<31.5+12.5){//<15){
    background(255);
    med.boost();
    med.needle();
    //med.skin();
  }

/*
  else if(millis()/1000>20){
    background(255);
    translate(0,0);
    //med.rotation();
    med.needle();

  }

*/
 
    

  if(eyeCount<1000){
    eyeCount+=1;
  }

    // print(millis()/1000);
}