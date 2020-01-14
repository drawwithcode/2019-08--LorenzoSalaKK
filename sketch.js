let myMap;
let canvas;
var position;
const mappa = new Mappa('MapboxGL', "pk.eyJ1Ijoia2Fyb3Rha2lkIiwiYSI6ImNrMm1oZzl2djBnbzYzY29mcHI1aHJ1b2oifQ.1XOszSMpdhXzJh2c6Y_45g");

var b2Lat = 45.5058567;
var b2Lon = 9.1646566;

var todoLat = 45.5033794;
var todoLon = 9.1592392;

var distanceb2, distancetodo;

const options = {
  lat: b2Lat,
  lng: b2Lon,
  zoom: 12,
  style: "mapbox://styles/mapbox/traffic-night-v2"
}

function preload() {
  position = getCurrentPosition();
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);


  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);

  distancetodo = Math.round(calcGeoDistance(position.latitude, position.longitude, todoLat, todoLon, "km"));
  distanceb2 = Math.round(calcGeoDistance(position.latitude, position.longitude, b2Lat, b2Lon, "km"));


  createElement("p", "You are " + distancetodo + " km away from Todomodo and " + distanceb2 + " km away from B2! Is it a bad or a good news?");
}

function draw() {

  clear();

  var you = myMap.latLngToPixel(position.latitude, position.longitude);
  rectMode(CENTER)
  fill('black')
  rect(you.x, you.y, 16, 12)
  fill('fuchsia');
  noStroke();
  textAlign(CENTER, CENTER)
  textStyle(BOLD)
  textSize(10)
  text('YOU', you.x, you.y)

  var b2 = myMap.latLngToPixel(b2Lat, b2Lon);
  rectMode(CENTER)
  fill('black')
  rect(b2.x, b2.y, 16, 12)
  fill('gold');
  noStroke();
  textAlign(CENTER, CENTER)
  textStyle(BOLD)
  textSize(10)
  text('B2', b2.x, b2.y)

  var todo = myMap.latLngToPixel(todoLat, todoLon);
  rectMode(CENTER)
  fill('black')
  rect(todo.x, todo.y, 70, 20)
  fill('aquamarine');
  noStroke();
  textAlign(CENTER, CENTER)
  textStyle(BOLD)
  textSize(10)
  text('TODOMODO', todo.x, todo.y)
}
