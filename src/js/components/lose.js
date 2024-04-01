import { btnReset, timer } from "../app";

export function lose() {
  btnReset.disabled = false;
  alert("Пропустили 5 гоблинов");
  btnReset.classList.remove("hidden");
  clearInterval(timer);
}
