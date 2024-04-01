import Icon from "./goblin.png";
import { lose } from "./components/lose";

let cells = document.querySelectorAll(".cell");
let score = document.querySelector(".score");
let img = document.createElement("img");
export let btnReset = document.querySelector(".reset-btn");
export let timer = setInterval(rePress, 1000);

let scoreCounter = 0;
let loseCounter = -1;
let prevCellIndex = -1;

img.src = Icon;
img.classList.add("goblin");

function rePress() {
  btnReset.disabled = true;
  let cellsRandom;
  do {
    cellsRandom = Math.floor(Math.random() * cells.length);
  } while (cellsRandom === prevCellIndex);

  prevCellIndex = cellsRandom;
  cells[cellsRandom].appendChild(img);
  loseCounter++;
  if (loseCounter === 5) {
    cells[cellsRandom].removeChild(img);
    lose();
  }
}

img.addEventListener("click", () => {
  loseCounter--;
  scoreCounter++;
  score.innerHTML = scoreCounter;
  clearInterval(timer);
  timer = setInterval(rePress, 1000);
  rePress();
});

btnReset.addEventListener("click", () => {
  btnReset.classList.add("hidden");
  scoreCounter = 0;
  loseCounter = -1;
  score.innerHTML = 0;
  timer = setInterval(rePress, 1000);
  rePress();
});

rePress();
