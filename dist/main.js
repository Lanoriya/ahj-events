/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/goblin.png
const goblin_namespaceObject = __webpack_require__.p + "2dbd01ce16c0fa83cb67.png";
;// CONCATENATED MODULE: ./src/js/components/lose.js

function lose() {
  btnReset.disabled = false;
  alert("Пропустили 5 гоблинов");
  btnReset.classList.remove("hidden");
  clearInterval(timer);
}
;// CONCATENATED MODULE: ./src/js/app.js


let cells = document.querySelectorAll(".cell");
let score = document.querySelector(".score");
let img = document.createElement("img");
let btnReset = document.querySelector(".reset-btn");
let timer = setInterval(rePress, 1000);
let scoreCounter = 0;
let loseCounter = -1;
let prevCellIndex = -1;
img.src = goblin_namespaceObject;
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
;// CONCATENATED MODULE: ./src/index.js



/******/ })()
;