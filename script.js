const container = document.querySelector('.container')
const createDiv = document.createElement('div');
createDiv.classList.add("grid");
const changeBtn = document.querySelector('#change-grid-btn');
const root = document.documentElement;

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

function changeGridColor(e) {
  let grid = e.target;
  grid.style.backgroundColor = 'blue';
}

function removeColor() {
  let grids = document.querySelectorAll('.grid');
  grids.forEach(grid => grid.style.backgroundColor = "white");
}

function askGridNumber() {
  let gridNumInput = prompt("Enter grid number:");
  if (gridNumInput > 64) {
    alert("Please enter a number no more than 64");
    return;
  }
  changeGridNumber(gridNumInput);
  removeColor();
}

changeBtn.addEventListener('click', askGridNumber);

function changeGridNumber(number) {
  container.innerHTML = "";

  createGrid(number);
  addEventtoGrid();
}


window.addEventListener("load", () => {
  createGrid(16);
  addEventtoGrid();
});