var canWidth = 600;
var canHeight = 300;
  
// position of the canvas where I want to draw our frame
var x = 0;
var y = 0;

//coordinate of sprite sheet from where i want to take out the pic/ choose which pic
var srcX;
var srcY;

var sheetWidth= 2048;
var sheetHeight= 2048;
//number of frame 9 frames on the first line
var cols = 9;
var rols = 17;
// 2048/9
var width = sheetWidth / cols;
var height = sheetHeight/ rols; 

var currentframe = 0;
var uni = new Image();
uni.src = "uni2.png";

var canvas = document.getElementById("canvas");
canvas.width = canWidth;
canvas.height = canHeight;
//context draw 2d images
var ctx = canvas.getContext("2d");
function updateFrame(){

    currentframe= ++currentframe % cols; // 1%9=1; -- 9%9=1;
    srcX = currentframe * width;
    srcY = 0;

    ctx.clearRect(x, y, width, height);

}
//to draw the img
function drawImage(){
    updateFrame();
    ctx.drawImage(uni, srcX, srcY, width, height, x, y, width, height);

}
//so the unicorn wont stop running
setInterval(function(){
    drawImage();
//this function will be called every 100ms    
}, 80);