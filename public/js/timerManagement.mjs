// タイマーを管理するためのクラス

import { Timer } from "./Timer.mjs";

// DB通信用関数
import { fetchBooks } from "./fetch_books.mjs";

export function timerManagement() {

  const timer = new Timer();
  const startButton = document.querySelector('#btn_start');
  const stopButton = document.querySelector('#btn_stop');
  const completeButton = document.querySelector('#btn_complete');
  const endTodaysStudy = document.querySelector('#end-todays-study');

  timer.removeButtonInivisibility(endTodaysStudy);

  startButton.addEventListener('click', () => {
    timer.timerStart();
    controlStartButton();
    controlCompleteButton();
  });
  stopButton.addEventListener('click', () => {
    timer.timerStop();
    toggleVisibleButton(startButton);
    toggleVisibleButton(stopButton);
    toggleVisibleButton(completeButton);
  });
  completeButton.addEventListener('click', () => {
    timer.timerComplete();
    toggleVisibleButton(completeButton);
    controlEndTodaysStudy()
  });
  endTodaysStudy.addEventListener('click', () => timer.displayStudyHistoryAtModal());



  function toggleVisibleButton(button) {
    button.classList.toggle('invisible');
  }

  function controlCompleteButton(){
    if(!completeButton.classList.contains('invisible')){
      toggleVisibleButton(completeButton);
    }
  }

  function controlEndTodaysStudy() {
    if(endTodaysStudy.classList.contains('invisible')){
      toggleVisibleButton(endTodaysStudy);
    }
  }

  function controlStartButton() {
    const inStudyCategory = document.querySelector('#inputCategory');
    if(inStudyCategory.value === null || inStudyCategory.value !== "default"){
      toggleVisibleButton(startButton);
      toggleVisibleButton(stopButton);
    }
  }
}
