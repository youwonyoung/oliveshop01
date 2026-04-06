let img_navbar;
let img_adBanner;
let img_product;
let img_gnb;
let img_aiIcon;
let img_green;
let img_textBox;

let state = 0;

function preload() {
    img_navbar = loadImage("01_NavBar.png");
    img_adBanner = loadImage("02_AdBanner.png");
    img_product = loadImage("03_Product.png");
    img_gnb = loadImage("04_GNB.png");
    img_aiIcon = loadImage("05_ai_icon.png");
    img_green = loadImage("06_green.png");
    img_textBox = loadImage("07_textbox.png");
}


function setup() {
  createCanvas(393, 852);
}


function draw() {
  background(255);
  if(state == 0){
    image(img_navbar, 0,0,393,128);
    image(img_adBanner,0,128,393,284);
    image(img_product,0,412,393,440);
    image(img_gnb, 0, 764, 393, 88);
    image(img_aiIcon, 320, 688, 60, 60);
  }else if(state ==1){
    image(img_navbar, 0,0,393,128);
    image(img_adBanner,0,128,393,284);
    image(img_product,0,412,393,440);
    image(img_green, 0,612,393,152);
    image(img_gnb, 0, 764, 393, 88);
    image(img_aiIcon, 320, 688, 60, 60);
  }
}


function mouseClicked(){
  if(mouseX>=320 && mouseX <= 380){
    if(mouseY >= 688 && mouseY <=748){
      if(state ==0){
        state = 1;
      }else if(state ==1){
        state = 0;
      }
    }
  }
}