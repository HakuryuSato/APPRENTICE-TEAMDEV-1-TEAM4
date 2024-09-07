import { formatTime } from "./timerUtils.mjs";
import { saveToLocalStorage, getDataFromLocalStorage, saveDataStudyHistory } from "./storageUtils.mjs";
import { addTd } from "./domUtils.mjs";
import { addTodayRecord } from "./displayStudyHistoryAtModal.mjs";

export class Timer {
  constructor() {
    this.timerId = null;
    this.studyHistoryList = [];
    this.studyHistoryList = getDataFromLocalStorage("studyHistoryList");
    this.currentSeconds = getDataFromLocalStorage("currentTimeElapsed");
    this.inputCategory = document.querySelector('#inputCategory');
    this.displayStudyHistory();

    //リロード時に選択項目、現時点の経過時間を保存
    const savedValue = localStorage.getItem('selectedOption');
    this.inputCategory.value = savedValue;

    this.displayTimer = document.querySelector('#timer-display');
    this.displayTimer.innerText = formatTime(this.currentSeconds);
  }

    /* タイマースタート */
  timerStart(){
    const categoryInStudy = this.inputCategory.value;
    if(this.timerId === null && categoryInStudy !== ""){
      this.timerId = setInterval(() => {
        this.currentSeconds++;
        this.displayTimer.innerText = formatTime(this.currentSeconds);
        saveToLocalStorage('currentTimeElapsed', this.currentSeconds);
        this.saveSelected();
      }, 1000);
      this.addInStudy(categoryInStudy);
    }
  }

  /* タイマー一時停止 */
  timerStop(){
    clearInterval(this.timerId);
    this.timerId = null;
  }

  /* タイマーリセット */
  timerComplete()
  {
    const categoryInStudy = getDataFromLocalStorage("categoryInStudy");
    if(categoryInStudy) {
      this.addHistory(categoryInStudy);
    }
    this.currentSeconds = 0;
    saveToLocalStorage('currentTimeElapsed', 0);
    this.displayTimer.innerText = '00:00:00';
    const inStudyCategory = document.querySelector('#in_study_category');
    inStudyCategory.innerText = "";
  }

  /* 学習中カテゴリー表示*/
  addInStudy(categoryName)
  {
    const inStudyCategory = document.querySelector('#in_study_category');
    inStudyCategory.innerText = '学習中：' + categoryName;
    const categoryInStudy = {
      category_name: categoryName,
    }
    saveToLocalStorage('categoryInStudy', categoryInStudy);
  }

  /* 履歴に追加 */
  addHistory(finishCategory) {
    finishCategory.session_duration_minutes = this.currentSeconds;
    addTd(finishCategory);
    this.studyHistoryList.push(finishCategory);
    saveDataStudyHistory('studyHistoryList',this.studyHistoryList);
  }

  saveSelected()
  {
    const selected = this.inputCategory.value;
    localStorage.setItem('selectedOption', selected);
  };

  displayStudyHistory(){
    if(this.studyHistoryList){
      this.studyHistoryList.forEach(session => {
        addTd(session);
      });
    }
  }
  // モーダルに累計を表示
  displayStudyHistoryAtModal(){
    if(this.studyHistoryList){
      this.studyHistoryList.forEach(session => {
        addTodayRecord(session);
      });
    }
  }
}
