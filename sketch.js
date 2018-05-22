/*
 *
 * Cinema Expandido WEB
 * Mi primer video (12 de febrero 2018)
 * Adrian Santuario Hernández
 * 
 *;
 
 * URL: 
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



/*
 *****************************************
 *****************************************
 * LYFE CYCLE METHODS
 *****************************************
 *****************************************
 */


function preload() {

  //Video
    video = createVideo("assets/videos/KLUSTERA_Insurgentes_YOLO.mov");


}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}

function setup() {
  //createCanvas(600, 400);
  createCanvas(displayWidth, displayHeight);
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

  video.loop();
  video.hide();
}



function drawVideo() {



  image(video, 0, 0);



}