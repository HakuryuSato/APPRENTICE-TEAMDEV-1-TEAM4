import { convertTimeToSeconds, formatTime } from "./timerUtils.mjs";
import { saveDataStudyHistory } from "./storageUtils.mjs";

export function addTodayRecord(finishCategory) {
    const tbody = document.querySelector('tbody#total_history');
    const newRow = createRow(finishCategory);
    tbody.appendChild(newRow);
};

function createRow(finishCategory)
{
    const newRow = document.createElement('tr');

    // カテゴリ、時間のtd要素を追加
    newRow.appendChild(createTd('history_category', 'modal_history_category', finishCategory.category_name));
    newRow.appendChild(createTd('timer', 'modal_sum_time', formatTime(finishCategory.session_duration_minutes)));

    return newRow;
};

function createTd(className, id, textContent)
{
    const td = document.createElement('td');
    td.setAttribute('class', className);
    td.setAttribute('id', id);
    td.innerText = textContent;
    return td;
};

export function clearModalTable(){
    const tbody = document.querySelector('tbody#total_history');
    tbody.innerHTML = '';
}

export function refreshTable(){
    const tbody = document.querySelector('tbody#tmp_history');
    tbody.innerHTML = '';
}

export function displayTotalTimeAtModal(studyHistoryList){
    const tbody = document.querySelector('tbody#total_history');
    const newRow = document.createElement('tr');
    newRow.setAttribute('class', 'total_time');
    const totalTime = formatTime(studyHistoryList.reduce((total, session) => {
        return total + session.session_duration_minutes;
    }, 0));

    newRow.appendChild(createTd('modal_total_time_title', 'modal_total_time_title', '累計時間'));
    newRow.appendChild(createTd('modal_total_time timer', 'modal_total_time', totalTime));
    tbody.appendChild(newRow);
}
