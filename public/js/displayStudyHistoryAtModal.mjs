import { convertTimeToSeconds, formatTime } from "./timerUtils.mjs";
import { saveDataStudyHistory } from "./storageUtils.mjs";

export function addTodayRecord(finishCategory) {
    const tbody = document.querySelector('tbody');
    const newRow = createRow(finishCategory);
    tbody.appendChild(newRow);
};

function createRow(finishCategory)
{
    const newRow = document.createElement('tr');

    // カテゴリ、時間、削除ボタンのtd要素を追加
    newRow.appendChild(createTd('history_category', 'history_category', finishCategory.category_name));
    newRow.appendChild(createTd('timer', 'sum_time', formatTime(finishCategory.session_duration_minutes)));

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
