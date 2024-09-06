export class Timer {
  constructor() {
    /* 変数定義 */
    this.timerId = null;
    this.timerList = this.getData("timerList");
    this.seconds = 0;
    this.id = 0;

    //初期表示
    if(this.timerList){
      this.timerList.forEach(study => {
        this.addTd(study);
      })
    } else {
      this.timerList = [];
    }

    /* 入力部分取得 */
    this.displayTimer = document.querySelector('#timer-display');
    this.inputCategory = document.querySelector('#inputCategory');
  }
  /* タイマースタート */
  timerStart(){
    const categoryInStudy = this.inputCategory.value;
    if(this.timerId === null && categoryInStudy !== ""){
      this.timerId = setInterval(() => {
        this.seconds++;
        this.displayTimer.innerText = this.formatTime(this.seconds);
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
    const categoryInStudy = this.getData("categoryInStudy");

    if(categoryInStudy) {
      this.addHistory(categoryInStudy);
    }

    this.seconds = 0;
    this.displayTimer.innerText = '00:00:00';
    const inStudyCategory = document.querySelector('#in_study_category');
    inStudyCategory.innerText = "";
  }

  /* 学習中カテゴリー表示*/
  addInStudy(categoryName)
  {
    const inStudyCategory = document.querySelector('#in_study_category');
    inStudyCategory.innerText = '学習中：' + categoryName;
    /* ローカルストレージに保存 */
    const categoryInStudy = {
      category_name: categoryName,
    }
    localStorage.setItem('categoryInStudy', JSON.stringify(categoryInStudy));
  }

  /* 時間フォーマット変換処理*/
  formatTime(time) {
    const hours = String(Math.floor(time / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, '0');
    const secs = String(time % 60).padStart(2, '0');
    return `${hours}:${minutes}:${secs}`;
  }

  saveData() {
    const categoryElements = document.querySelectorAll('td#history_category');
    const sumTimeElements = document.querySelectorAll('td#sum_time');

    let studies = [];

    categoryElements.forEach((categoryElement, index) => {
        const sumTimeElement = sumTimeElements[index];
        if (sumTimeElement) {
          const sumTime = this.timeToSeconds(sumTimeElement.innerText);
            studies.push({
                category_name: categoryElement.innerText,
                session_duration_minutes: sumTime,
            });
        }
    });

    // ローカルストレージに保存
    localStorage.setItem("timerList", JSON.stringify(studies));
}

    /* ローカルストレージから取得 */
  getData(data)
  {
    const info = localStorage.getItem(data);
    if(info){
      return JSON.parse(info);
    } else {
      return false;
    }
  }

  /* 履歴に追加 */
  addHistory(finishCategory) {
    finishCategory.session_duration_minutes = this.seconds;

    this.addTd(finishCategory);

    this.timerList.push(finishCategory);

    this.saveData('timerList',this.timerList);
  }

  addTd(finishCategory) {
    const tbody = document.querySelector('tbody');
    const newRow = this.createRow(finishCategory);

    tbody.appendChild(newRow);
  }

  createRow(finishCategory) {
    const newRow = document.createElement('tr');

    // カテゴリ、時間、削除ボタンのtd要素を追加
    newRow.appendChild(this.createTd('history_category', finishCategory.category_name));
    newRow.appendChild(this.createTd('sum_time', this.formatTime(finishCategory.session_duration_minutes)));
    newRow.appendChild(this.createDeleteButtonTd());

    return newRow;
  }

  createTd(id, textContent) {
    const td = document.createElement('td');
    td.setAttribute('id', id);
    td.innerText = textContent;
    return td;
  }

  createDeleteButtonTd() {
    const td = document.createElement('td');
    const btnDelete = document.createElement('button');

    btnDelete.className = 'recent';    // クラスを追加
    btnDelete.id = 'btn_delete';       // IDを追加
    btnDelete.name = 'btn_delete';     // name属性を追加
    btnDelete.type = 'button';         // type属性を追加
    btnDelete.textContent = '削除';    // ボタンのテキスト

    btnDelete.addEventListener('click', (e) => this.DeleteList(e));

    td.appendChild(btnDelete);
    return td;
  }

  DeleteList(e)
  {
      e.preventDefault();
      const btnDelete = e.target;
      const td = btnDelete.parentElement;
      const tr = td.parentElement;

      tr.remove();
      this.saveData();
  }

  timeToSeconds(time) {
    const [hours, minutes, seconds] = time.split(':').map(Number);
    return (hours * 3600) + (minutes * 60) + seconds;
  }
}

/**
 * todo
 * ・開始ボタンと停止ボタンの切り替え
 * ・削除ボタンの機能追加
 * ・リファクタリング
 * ・変数名の変更
 * ・データのフォーマット確認
 */
