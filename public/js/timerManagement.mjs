// タイマーを管理するためのクラス

import { Timer } from "./Timer.mjs";

// DB通信用関数
import { fetchBooks } from "./fetch_books.mjs";

export function timerManagement() {

  const timer = new Timer();
  const startButton = document.querySelector('#btn_start');
  const stopButton = document.querySelector('#btn_stop');
  const completeButton = document.querySelector('#btn_complete');

  startButton.addEventListener('click', () => timer.timerStart());
  stopButton.addEventListener('click', () => timer.timerStop());
  completeButton.addEventListener('click', () => timer.timerComplete());
}
