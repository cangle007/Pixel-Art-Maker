//Main body
var body = document.getElementsByTagName('body')[0];

//get Main canvas
var mainCanvas = document.getElementById('canvas');

//condition set for mouse and defaultColor
var mouseDown = false;
var defaultColor = 'white';
var defaultEraserColor = 'black';

body.addEventListener('mouseup', function() {
  mouseDown = false;
  console.log("Fired 'mouseup' event");
});

//Current color
var currentColor = document.getElementById('colorPencil');
currentColor.style.backgroundColor = defaultColor;

//Create Eraser
// var eraser = document.getElementById('eraser');
// eraser.style.backgroundColor = defaultEraserColor;

// eraser.addEventListener('click', function(event) {
//   var box = event.target;
//   box.style.backgroundColor = 'black';
// });

//Creating Pixel into canvas
for (let i = 0; i < 3003; i++) {
  var createDiv = document.createElement('div');
  createDiv.classList.add('canvasPixel');

  createDiv.style.width = '1.01%';
  createDiv.style.paddingBottom = '1%';
  createDiv.style.float = 'left';
  createDiv.style.border = 'thin solid black';
  createDiv.style.backgroundColor = 'transparent';
  createDiv.style.cursor = 'pointer';
  mainCanvas.appendChild(createDiv);

  createDiv.addEventListener('mousedown', function() {
    var box = event.target;
    box.style.backgroundColor = defaultColor;
    mouseDown = true;
  });

  createDiv.addEventListener('mouseover', function() {
    var box = event.target;
    if (mouseDown === true) {
      box.style.backgroundColor = defaultColor;
    }
  });
}

//Creating pallet Container
var listOfColors = [
  'antiqueWhite',
  'aquamarine',
  'black',
  'blue',
  'green',
  'yellow',
  'red',
  'purple',
  'orange',
  'pink'
  // 'YellowGreen',
  // 'WhiteSmoke',
  // 'Wheat',
  // 'Violet',
  // 'Turquoise',
  // 'MediumSlateBlue',
  // 'LightSteelBlue'
];

var palletContainer = document.getElementById('palette');

for (let k = 0; k < listOfColors.length; k++) {
  var colors = document.createElement('div');
  colors.style.backgroundColor = listOfColors[k];
  colors.classList.add('colorDiv');

  colors.addEventListener('click', function(event) {
    var box = event.target;
    defaultColor = box.style.backgroundColor; //change the default color after click
    currentColor.style.backgroundColor = defaultColor;
  });

  // eraser.addEventListener('mousedown', function(event) {
  //   var box = event.target;
  //   box.style.backgroundColor = defaultEraserColor;
  //   mousedown = true;
  // });

  palletContainer.appendChild(colors);
}
