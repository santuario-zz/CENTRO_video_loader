/*
 *
 * Cinema Expandido WEB
 * Mi primer video (12 de febrero 2018)
 * Adrian Santuario Hernández
 * 
 *;
 
 * URL: https://santuario.github.io/CENTRO_video_loader/
 */


/*
 *****************************************
 *****************************************
 * VARIABLES
 *****************************************
 *****************************************
 */

// Video
var video;
var isLoaded = false;


var angle = 0;
/*
 *****************************************
 *****************************************
 * LYFE CYCLE METHODS
 *****************************************
 *****************************************
 */


function preload() {

  //Video
  //video = createVideo("assets/videos/KLUSTERA_Insurgentes_YOLO.mov");



}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}

function setup() {
  //createCanvas(600, 400);
  createCanvas(windowWidth, windowHeight);
  initialize();



}

function draw() {
  background(255);


  drawVideo();


}


/*
 *****************************************
 *****************************************
 * INITIALIZE METHODS
 *****************************************
 *****************************************
 */


function initialize() {
  isLoaded = false;

  initializeVideo();
}


/*
 *****************************************
 *****************************************
 * VIDEO METHODS
 *****************************************
 *****************************************
 */


function initializeVideo() {
  video = createVideo("assets/videos/centro.mov", videoLoaded);
  video.loop();
  video.hide();
}

function videoLoaded() {
  isLoaded = true;

}

function drawVideo() {


  if (isLoaded == true) {
    image(video, 0, 0);
  } else {
    background(51);
    translate(windowWidth / 2, windowHeight / 2);
    rotate(angle);
    strokeWeight(4);
    stroke(255);
    line(0, 0, 100, 0);
    angle += 0.1;
  }




}