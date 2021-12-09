// When true, moving the mouse draws on the canvas
let isDrawing = false;
let x = 0;
let y = 0;

const canvas = document.getElementById('canvas-tool');
const context = canvas.getContext('2d');
context.lineJoin = "round";

//setting canvas dimensions
const configureCanvas = () => {
    context.canvas.width = canvas.clientWidth;
    context.canvas.height = canvas.clientWidth * 0.6;
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.strokeStyle = document.getElementById('color-change').value;
    context.lineJoin = 'round';
    context.lineWidth = document.getElementById('thickness').value;
}

window.onload = () => {
  /* tools */
  //color change
  const changeColor = document.getElementById('color-change');
  changeColor.addEventListener('change', (e) => {
    const newColor = e.target.value;
    context.strokeStyle = newColor;
  }, false);
  //thickness change
  const thicknessSlider = document.getElementById('thickness');
  thicknessSlider.addEventListener('change', (e) => {
    const newThickness = e.target.value;
    context.lineWidth = newThickness;
  }, false);
  //clear canvas
  const clearCanvas = document.getElementById('clear-canvas');
  clearCanvas.addEventListener('click', e => {
    context.fillRect(0, 0, canvas.width, canvas.height);
  }, false);
  //post canvas
  const postCanvas = document.getElementById('save-canvas');
  postCanvas.addEventListener('click', e => {
    alert('not yet implemented :)');
  }, false);

  // initial canvas sizing and config
  configureCanvas();

  // event listeners for mousedown, mousemove, and mouseup
  canvas.onmousedown = handleMouseDown;
  canvas.onmousemove = handleMouseMove;
  window.onmouseup = handleMouseUp;
}

window.onresize = configureCanvas;

const findPosition = e => {
    const rect = canvas.getBoundingClientRect();
    const newX = e.clientX - rect.left;
    const newY = e.clientY - rect.top;
    return [newX, newY];
}

const handleMouseDown = e => {
  canvas.classList.remove('idle');
  canvas.classList.add('drawing');
  isDrawing = true;
  [x, y] = findPosition(e);
  context.moveTo(x, y);
  context.beginPath();
};

const handleMouseMove = e => {
  [x, y] = findPosition(e);
  if (isDrawing) {
    //draw line
    context.lineTo(x, y);
    context.closePath();
    context.stroke();
    context.moveTo(x, y);
  }
  else {
    context.moveTo(x, y);
  }
};

const handleMouseUp = e => {
  canvas.classList.remove('drawing');
  canvas.classList.add('idle');
  isDrawing = false;
};