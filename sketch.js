let img;
let song;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  img = loadImage('assets/ex.jpg'); 
  ew = loadImage('assets/ew.jpeg');
  song =loadSound('assets/Sarah Close - Perfect After All (Official Audio & Lyrics).mp3')
  
}



function draw() {
  if (mouseIsPressed) {
    noTint();
    image(ew,0,0,windowWidth, windowHeight);
    tint(0,0,255,125);
  image(ew, mouseX-300, mouseY-300,windowWidth,windowHeight);
    let s = 'To feel things so deeply';
    fill(600);
    text(s, mouseX, mouseY, CENTER, CENTER);
    
  }
  else{
   

    noTint();
    image(img, 0, 0,windowWidth,windowHeight);
    tint(255,0,0,100);
    image(img, mouseX-300, mouseY-350,windowWidth,windowHeight);
  
  
    print("x",mouseX);
    
     let s = 'It is both a blessing and a curse.';
    fill(600);
    text(s, mouseX, mouseY, CENTER, CENTER);
  
    
    
  }
}

function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.stop();
  } else {
    song.play();
  }
}