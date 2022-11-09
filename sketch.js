let charge;
let numCharge;
let noiseWave;
let eyeCount;
let med;
let deepBlue;
let bgdMed;
let heart;
let hOption;


function setup() {
  
  createCanvas(windowWidth, windowHeight);
   background(0);
  charge = new battery();
  numCharge= 1;
  noiseWave = new waving();
  eyeCount=0;
  bgdMed = color(150);//242,225,216);//191,52,42);//158,21,14);
  med = new Medication(width/2,200);

  deepBlue = color(30,35,64);
  heart = new HeartRate();

}

function draw() {
 
  
  if(millis()/1000<5.8){
     background(0);
    noiseWave.display();
    charge.display();
    charge.blinking();
    if (frameCount%120<60){
      charge.lightning();
    }
  }
    
  else if(millis()/1000<16){
     background(0);
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
     background(0);
    noiseWave.variation();
    noiseWave.display();
    charge.display();
    charge.charging();
  }


  else if(millis()/1000<20){
    background(0);
    for (let i=0; i<eyeCount; i+=30){
      eye(random(0,width),random(0,height),random(300,10),30);
    }
  }
  
  else if(millis()/1000<22){
    background(0);
    if(frameCount%60<30){
    for (let i=0; i<eyeCount; i+=30){
      eye(random(0,width),random(0,height),random(300,10),30);
    }
    }
  }
  
  else if(millis()/1000<24){
    background(0);
    if(frameCount%30<15){
    for (let i=0; i<eyeCount; i+=30){
      eye(random(0,width),random(0,height),random(300,10),30);
    }
    }
  }
  else if(millis()/1000<26){
    background(0);
    if(frameCount%15<8){
    for (let i=0; i<eyeCount; i+=30){
      eye(random(0,width),random(0,height),random(300,10),30);
    }
    }
  }
  else if(millis()/1000<27){
    background(0);
  }
  
  

  else if(millis()/1000<27+1.5){
    background(100,0,0);
    translate(random(-15,15),random(-15,15)); // //eyes are shaking
    for(let i=0; i<width; i+=200){
      for(let j=0; j<height; j+=160){ 
        eye(i,j,120,30);
      }
    }
  }
  else if(millis()/1000<27+3){
    background(100,0,0);
    translate(random(-5,5),random(-5,5)); // //eyes are shaking
    for(let i=0; i<width; i+=200){
      for(let j=0; j<height; j+=160){ 
        eye(i,j,90,30);
           }
        }
    
  }
  
  else if(millis()/1000<27+4.5){
    background(100,0,0);
    translate(random(-2.5,2.5),random(-2.5,2.5)); // //eyes are shaking
    for(let i=0; i<width; i+=200){
      for(let j=0; j<height; j+=160){ 
        eye(i,j,60,30);
           }
        }
    
  }
  else if(millis()/1000<27+6){
    background(100,0,0);
    translate(random(-1.25,1.25),random(-1.25,1.25)); // //eyes are shaking
    for(let i=0; i<width; i+=200){
      for(let j=0; j<height; j+=160){ 
        eye(i,j,30,30);
           }
        }
    
  }
  else if(millis()/1000<27+7.5){
    background(100,0,0);
    translate(random(-0.625,0.625),random(-0.625,0.625)); // //eyes are shaking
    for(let i=0; i<width; i+=200){
      for(let j=0; j<height; j+=160){ 
        eye(i,j,10,30);
           }
        }
    
  }
  
  else if (millis()/1000<27+10){
    background(100,0,0);
  }


   else if(millis()/1000<37+5.5){
    background(bgdMed);
   med.rotation();
   med.needle();
    med.skinUnchanging();
   med.skinDisplay();
  }
  else if(millis()/1000<37+9){
    background(bgdMed);
    med.moving();
    med.needle();
    med.skinUnchanging();
    med.skinMove();
    med.skinDisplay();
  }
 else if(millis()/1000<37+10){
    background(bgdMed);
    med.needle();
    med.skinUnchanging();
    med.skinDisplay();
  }
  else if(millis()/1000<37+13.5){//<15){
    background(bgdMed);
    med.boost();
    med.needle();
    med.skinChanging();
    med.skinDisplay();
  }

  else if(millis()/1000<50.5+1){
    background(220);
  }

 else if(millis()/1000<50.5+5){
  
    hOption =1;
    if(frameCount%6==0){
      heart.chaos();
      heart.display();
    }
  }
  else if(millis()/1000<50.5+9){
    hOption =2;
    if(frameCount%6==0){
      heart.chaos();
      heart.display();
      heart.fading();
      heart.fdisplay();
    }
  }
  else if(millis()/1000<50.5+13){
    hOption =3;
    if(frameCount%6==0){
      heart.chaos();
      heart.display();
      heart.fading();
      heart.fdisplay();
    }
  }else if(millis()/1000<50.5+13.2){
    
    heart.straight1();
    heart.display();
  }
  else if(millis()/1000<50.5+21){
    if(frameCount%3==0){
    heart.straighten();
    heart.display();
  }
  if (frameCount%6==0){
    heart.fading();
    heart.fdisplay();
    }
  }


  else if(millis()/1000<71.5+220*2/60){
   heart.hbDisplay(1);
  heart.heartbeat();
  }
  else if(millis()/1000<71.5+220*3/60){
    heart.hbDisplay(2);
  heart.heartbeat();
  }
  else if(millis()/1000<71.5+220*4/60){
    heart.hbDisplay(4);
  heart.heartbeat();
  }
  else if(millis()/1000<71.5+220*5/60){
    heart.hbDisplay(12);
  heart.heartbeat();
  }
  else if(millis()/1000<71.5+220*7/60){
    noFill();
    stroke(0);
    strokeWeight(1);
    line(0,height/2,width,height/2);
  heart.heartbeat();
  }
  
 

    

  if(eyeCount<1000){
    eyeCount+=1;
  }

    // print(millis()/1000);
}