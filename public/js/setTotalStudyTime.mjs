import { formatTime } from "./timerUtils.mjs";
import { fetchTotalStudyMinutes } from "./fetch_totalStudyMinutes.mjs";


/* 

合計勉強時間を設定する関数

引数：秒 (DBの合計学習時間に可算する秒数)

*/ 

export async function setTotalStudyTime($second) { 
    // 累計合計時間を表示するHTMLタグのid名
    const totalTimerElement = document.getElementById("total-timer");

    try {
        // fetchTotalStudyMinutesは非同期関数でPromiseを返すのでawaitで待つ
        const totalStudyData = await fetchTotalStudyMinutes();
        const totalStudyMinutes = totalStudyData[0].total_study_minutes;

        let totalSeconds = totalStudyMinutes ? totalStudyMinutes * 60 : 0; // 分を秒に変換

        if ($second) { // 引数$secondが存在するなら加算
            totalSeconds += $second;
        }

        const formattedTime = formatTime(totalSeconds); // 形式 HH:MM:SS
        totalTimerElement.innerText = formattedTime;
    } catch (error) {
        console.error("Error fetching total study minutes:", error);
    }
}
