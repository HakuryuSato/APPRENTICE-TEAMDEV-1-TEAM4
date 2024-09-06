import { convertTimeToSeconds } from "./timerUtils.mjs";

  /* ローカルストレージから取得 */
export function getDataFromLocalStorage(key)
{
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : false;
}

export function saveToLocalStorage(key, value)
{
  localStorage.setItem(key, JSON.stringify(value));
}

  /* ローカルストレージに学習履歴を保存 */
export function saveDataStudyHistory() {
  const categoryElements = document.querySelectorAll('td#history_category');
  const sumTimeElements = document.querySelectorAll('td#sum_time');

  let studies = [];

  categoryElements.forEach((categoryElement, index) => {
      const sumTimeElement = sumTimeElements[index];
      if (sumTimeElement) {
        const sumTime = convertTimeToSeconds(sumTimeElement.innerText);
          studies.push({
              category_name: categoryElement.innerText,
              session_duration_minutes: sumTime,
          });
      }
  });

  saveToLocalStorage("studyHistoryList", studies);
}
