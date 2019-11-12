var position; //not call "location" because is a name already taken, it's the location in the web browser.
var distance;
var place;
var bg;
var circlex, circley;
var parigix, parigiy;
var barcax, barcay;

var barcaLat = 41.3947688;
var barcaLon = 2.0787279;

var duomoLat = 45.6328029;
var duomoLon = 8.9005577;

var parigiLat = 48.8588377;
var parigiLon = 2.2770202;


function preload() {
  bg = loadImage("./assets/map.png");

  position = getCurrentPosition();
  console.log(position);
}

function setup() {

  createCanvas(windowWidth, windowHeight)
  var parigi = createButton("Paris");
  parigi.position(windowWidth/30, windowHeight * 3 / 4);
  parigi.mousePressed(parigidistance);

  var barca = createButton("Barcelona");
  barca.position(windowWidth/30, windowHeight * 4 / 5);
  barca.mousePressed(barcadistance);
}

function parigidistance() {
  var distance = calcGeoDistance(position.latitude, position.longitude, parigiLat, parigiLon, "km");
  var parigidistance = createElement("p", "You're " + Math.round(distance) + " km far from Paris");
  parigidistance.position(windowWidth/11, windowHeight * 3 / 4 - 15)
}

function barcadistance() {
  var distance = calcGeoDistance(position.latitude, position.longitude, barcaLat, barcaLon, "km");
  var barcadistance = createElement("p", "You're " + Math.round(distance) + " km far from Barcelona");
  barcadistance.position(windowWidth/11, windowHeight * 4 / 5 - 15)
}

function draw() {
  background(bg);

  var posx = position.longitude;
  var circlex = map(posx, 0, 360, 0, windowWidth);

  var posy = position.latitude;
  var circley = map(posy, 0, 360, 0, windowHeight) * -1;

  // parigi coordinates
  var parigix = map(parigiLon, 0, 360, 0, windowWidth);

  var parigiy = map(parigiLat, 0, 360, 0, windowHeight) * -1;

  // barcelona coordinates
  var barcax = map(barcaLon, 0, 360, 0, windowWidth);

  var barcay = map(barcaLat, 0, 360, 0, windowHeight*0.90) * -1;

  // set the greenwhich position
  translate(windowWidth / 2 - (windowWidth / 42.4), windowHeight / 2 - (windowHeight / 18))

  // draw position
  push()
  fill('red')
  noStroke();
  ellipse(circlex, circley, 10);
  pop()

  // draw paris
  push()
  fill('blue')
  noStroke();
  ellipse(parigix, parigiy, 10);
  pop()

  // draw barcelona
  push()
  fill('yellow')
  noStroke();
  ellipse(barcax, barcay, 10);
  pop()
}
