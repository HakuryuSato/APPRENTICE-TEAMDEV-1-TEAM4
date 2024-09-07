import { convertTimeToSeconds, formatTime } from "./timerUtils.mjs";
import { saveDataStudyHistory } from "./storageUtils.mjs";

// export function confirmSubmit(e)
// {
//   const answer = confirm("提出してもよいですか？");

//   if(!answer){
//     e.preventDefault();
//   }
// }

  /* 行追加 */
export function addTd(finishCategory) {
    const tbody = document.querySelector('tbody#tmp_history');
    const newRow = createRow(finishCategory);
    tbody.appendChild(newRow);
};

function createRow(finishCategory)
{
    const newRow = document.createElement('tr');

    // カテゴリ、時間、削除ボタンのtd要素を追加
    newRow.appendChild(createTd('history_category', 'history_category', finishCategory.category_name));
    newRow.appendChild(createTd('timer', 'sum_time', formatTime(finishCategory.session_duration_minutes)));
    newRow.appendChild(createDeleteButtonTd());

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

function createDeleteButtonTd()
{
  const td = document.createElement('td');
  td.id = 'delete';
  const btnDelete = document.createElement('button');

  btnDelete.className = 'recent';
  btnDelete.id = 'btn_delete';
  btnDelete.name = 'btn_delete';
  btnDelete.type = 'button';
  btnDelete.innerHTML = '';
  btnDelete.addEventListener('click', (e) => deleteList(e));
  td.appendChild(btnDelete);
  return td;
}

function deleteList(e)
{
  const btnDelete = e.target;
  const td = btnDelete.parentElement;
  const tbody = document.querySelector('tbody#tmp_history');
  const endTodaysStudy = document.querySelector('#end-todays-study');
  const tr = td.parentElement;
  tr.remove();
  console.log(tbody.hasChildNodes());
  if(!tbody.hasChildNodes()){
    endTodaysStudy.classList.toggle('unvisible');
  }
  saveDataStudyHistory();
}
