import { convertTimeToSeconds, formatTime } from "./timerUtils.mjs";

export function confirmSubmit(e)
{
  const answer = confirm("提出してもよいですか？");

  if(!answer){
    e.preventDefault();
  }
}

  /* 行追加 */
export function addTd(finishCategory) {
    const tbody = document.querySelector('tbody');
    const newRow = createRow(finishCategory);

    tbody.appendChild(newRow);
};

function createRow(finishCategory)
{
    const newRow = document.createElement('tr');

    // カテゴリ、時間、削除ボタンのtd要素を追加
    newRow.appendChild(createTd('history_category', finishCategory.category_name));
    newRow.appendChild(createTd('sum_time', formatTime(finishCategory.session_duration_minutes)));
    newRow.appendChild(createDeleteButtonTd());

    return newRow;
};

function createTd(id, textContent)
{
    const td = document.createElement('td');
    td.setAttribute('id', id);
    td.innerText = textContent;
    return td;
};

function createDeleteButtonTd()
{
  const td = document.createElement('td');
  const btnDelete = document.createElement('button');

  btnDelete.className = 'recent';
  btnDelete.id = 'btn_delete';
  btnDelete.classList.add('btn_delete');
  btnDelete.name = 'btn_delete';
  btnDelete.type = 'button';
  btnDelete.textContent = '削除';
  td.appendChild(btnDelete);
  return td;
}
