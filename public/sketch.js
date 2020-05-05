var socket;
const clearButton = document.getElementById('clear-board');
const startButton = document.getElementById('getWord');
const greenButton = document.getElementById('green');
const blueButton = document.getElementById('blue');
const yellowButton = document.getElementById('yellow');
const purpleButton = document.getElementById('purple');
const redButton = document.getElementById('red');
const blackButton = document.getElementById('black');

let stateClient = 0;
let color = "black";
startButton.addEventListener('click', start)

startButton.style.display = 'none';

function start(){
  socket.emit('start');
  socketOnStart();
}

function setup() {
  createCanvas(1910,700);

  background("hsl(0, 0%, 100%)");

  socket = io.connect('/');
  socket.on('mouse', newDrawing)
  socket.on('board', boardClear)
  socket.on('online', playerShow)
  socket.on('start', socketOnStart)
  socket.on('init', (state)=>{
    stateClient = state;
    document.getElementById("timer").innerText = "000"
  })
}
function playerShow(player){
  playerText = document.getElementById("players-online")
  playerText.innerText = "Wiews: " + player.countp
}


function newDrawing(data){
  stroke("black");
  strokeWeight(4);
  line(data.x, data.y, data.x2, data.y2)
}

function mouseDragged(){
    console.log('Sending: ' + mouseX + ', ' + mouseY);
    var data = {
        x: mouseX,
        y: mouseY,
        x2: pmouseX,
        y2: pmouseY
    }
    socket.emit('mouse', data);
    stroke(color);
    if (mouseIsPressed === true){
      strokeWeight(4);
      line(mouseX, mouseY, pmouseX, pmouseY)
    }
}

clearButton.addEventListener('click', sendBoardSize)
clearButton.addEventListener('click', start)

function sendBoardSize(){
  var canvasSize = {
    width : canvas.width,
    height : canvas.height
  }

  socket.emit('board', canvasSize)
  boardClear(canvasSize)
}

function socketOnStart(){
  doIt(stateClient);
}

function boardClear(canvasSize){
  console.log("kex")
  var ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.rect(0, 0, canvasSize.width, canvasSize.height);
  ctx.fillStyle = "hsl(0, 0%, 100%)";
  ctx.fill();
}

function doIt(seconds) {
  clearButton.removeEventListener('click',start)
  clearButton.removeEventListener('click',sendBoardSize)
  document.getElementById("timer").innerText = seconds;
  if (seconds > 0) {
    handle = setTimeout(function() {
      doIt(seconds - 1);
    }, 1000);
  } else {
      document.getElementById("timer").innerText = "";
      document.getElementById('guessword').innerText =  ''
      clearButton.addEventListener('click', sendBoardSize)
      clearButton.addEventListener('click', start)
  }
}

greenButton.addEventListener('click', greenShift)
redButton.addEventListener('click', redShift)
yellowButton.addEventListener('click',yellowShift)
purpleButton.addEventListener('click', purpleShift)
blueButton.addEventListener('click', blueShift)
blackButton.addEventListener('click', blackShift)

function redShift(){
  color = "red";
}
function greenShift(){
  color = "green";
}
function yellowShift(){
  color = "yellow";
}
function purpleShift(){
  color = "purple";
}
function blueShift(){
  color = "blue";
}
function blackShift(){
  color = "black";
}