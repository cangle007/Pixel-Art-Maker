let body = document.getElementsByTagName('body')[0];
let container = document.createElement('div');
body.appendChild(container);
container.setAttribute('id', 'containerID');

// --------------------BORDER--------------------
var containBorder = document.createElement('div');
container.appendChild(containBorder);

containBorder.setAttribute('id', 'borderID');
containBorder.style.width = '60%';
containBorder.style.paddingBottom = '.050%';
containBorder.style.backgroundColor = 'white';
containBorder.style.border = 'thin solid black';

// --------------------PALETTE BORDER--------------------
var paletteDiv = document.createElement('div');
body.appendChild(paletteDiv);

paletteDiv.setAttribute('id', 'paletteID');
paletteDiv.style.width = '50%';
paletteDiv.style.paddingBottom = '.010%';
paletteDiv.style.backgroundColor = 'white';
paletteDiv.style.border = 'solid black';

for (var k = 0; k < 4; k++) {
  var colorDiv = document.createElement('div');
  colorDiv.setAttribute('id', 'colorDiv' + [k]);
  colorDiv.style.width = '50%';
  colorDiv.style.paddingBottom = '20%';
  //colorDiv.style.backgroundColor = 'white';
  colorDiv.style.border = 'solid black';
  paletteDiv.appendChild(colorDiv);
}
// --------------------PIXEL in containBorder--------------------
for (var i = 0; i < 2772; i++) {
  var childDiv = document.createElement('div');
  childDiv.setAttribute('id', 'childDivID'); //why can't set it as a class?
  childDiv.style.width = '1.01%';
  childDiv.style.paddingBottom = '1%';
  childDiv.style.float = 'left';
  childDiv.style.border = 'thin solid black';
  childDiv.style.backgroundColor = 'white';
  containBorder.appendChild(childDiv);
}

// --------------------EVENT LISTENER--------------------
containBorder.addEventListener(
  'click',
  function(event) {
    var box = event.target;
    box.style.backgroundColor = 'red';
  },
  true
);

function setData() {
  return document.getElementById('colorDiv0').value;
}

function storeData() {
  LocalStorage.setItem('input', setData());
}

function test() {
  containBorder.addEventListener(
    'click',
    function(event) {
      var box = event.target;

      if (box == document.getElementById('colorDiv0')) {
        return (box.style.backgroundColor = 'red');
      } else if (box == document.getElementById('colorDiv1')) {
        return (box.style.backgroundColor = 'blue');
      } else if (box == document.getElementById('colorDiv2')) {
        return (box.style.backgroundColor = 'yellow');
      } else if (box == document.getElementById('colorDiv3')) {
        return (box.style.backgroundColor = 'green');
      }
    },
    true
  );
}

// --------------DELETE---------------------------
// container.style.width = '5%';
// container.style.paddingBottom = '5%';
// container.style.backgroundColor = 'white';
// container.style.border = 'solid black';

// var paletteDiv = document.createElement('div');
// container.appendChild(paletteDiv);
//
// paletteDiv.setAttribute('id', 'test');
// paletteDiv.style.width = '50%';
// paletteDiv.style.paddingBottom = '50%';
// paletteDiv.style.backgroundColor = 'white';
// paletteDiv.style.border = 'solid black';

// ----------------------------------------------------------------------

// How to use appendChild and container
// let body = document.getElementsByTagName('body')[0];
// let containerPalette = document.createElement('div');
//
// body.appendChild(containerPalette);
// containerPalette.setAttribute('id', 'Palette');
//
// var paletteDiv = document.createElement('div');
// containerPalette.appendChild(paletteDiv);
//
// paletteDiv.setAttribute('id', 'test');
// paletteDiv.style.width = '5%';
// paletteDiv.style.paddingBottom = '5%';
// paletteDiv.style.backgroundColor = 'white';
// paletteDiv.style.border = 'solid black';
