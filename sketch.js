var dog,happyDog;
var dogImg,hDogImg;
var database;
var foodS,foodStock;

function preload(){
 dogImg = loadImage("images/dogImg.png");
 hDogImg = loadImage("images/dogImg1.png");

}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  
  dog = createSprite(250,250,50,50);
  dog.addImage(dogImg);
  dog.scale = 0.2;

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);

  if (keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(hDogImg);
  }

  drawSprites();
  Text("Note: Press UP_ARROW Key to feed it Milk",200,50);
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

  database.ref('/').update({
    Food:x
  })
}
