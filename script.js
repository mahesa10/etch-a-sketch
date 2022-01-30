const container = document.querySelector('.container')
const changeBtn = document.querySelector('#btn-change-grid');
const root = document.documentElement;
const eraseBtn = document.querySelector('#btn-erase');
const blackColorBtn = document.querySelector('#btn-black-color');
const randomColorBtn = document.querySelector('#btn-random-color');
const rangeLabel = document.querySelector('#range-label');
const rangeInput = document.querySelector('#grid-number-range');

const createDiv = document.createElement('div');
createDiv.classList.add("grid");

function createGrid(gridNum) {
  let totalSquares = gridNum * gridNum;
  for (let i = 0; i < totalSquares; i++) {
    container.appendChild(createDiv.cloneNode(true));
  }

  let gridSize = 480 / gridNum;
  root.style.setProperty('--grid-size', gridSize + 'px');
}

function addEventtoGrid() {
  let grids = document.querySelectorAll('.grid');
  grids.forEach(grid => {
    grid.addEventListener('mouseover', changeGridColor);
  })
}

let gridColor = "black"

function colorMode(color) {
  gridColor = color
}

function changeGridColor(e) {
  const grid = e.target;
  if (gridColor === "black") {
    grid.style.backgroundColor = `#000000`;
  } else if (gridColor === "random") {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    grid.style.backgroundColor = `#${randomColor}`;
  }
}

function removeColor() {
  let grids = document.querySelectorAll('.grid');
  grids.forEach(grid => grid.style.backgroundColor = "white");
}

function changeGridNumber(number) {
  container.innerHTML = "";

  createGrid(number);
  addEventtoGrid();
  removeColor();
}

function updateGridNumberLabel(number) {
  rangeLabel.textContent = `${number}x${number}`
}

eraseBtn.addEventListener('click', removeColor);
randomColorBtn.addEventListener('click', () => colorMode("random"));
blackColorBtn.addEventListener('click', () => colorMode("black"));
rangeInput.addEventListener('change', () => changeGridNumber(rangeInput.value));
rangeInput.addEventListener('mousemove', () => updateGridNumberLabel(rangeInput.value));

window.addEventListener("load", () => {
  createGrid(16);
  addEventtoGrid();
});