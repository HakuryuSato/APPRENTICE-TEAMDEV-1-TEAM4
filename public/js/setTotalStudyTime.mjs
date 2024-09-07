import { formatTime } from "./timerUtils.mjs";
import { fetchTotalStudyMinutes } from "./fetch_totalStudyMinutes.mjs";

// 合計勉強時間を設定する関数
export async function setTotalStudyTime($second) {
    const totalTimerElement = document.getElementById("total-timer");

    if ($second) { // もし引数に値(秒)があるなら
        // 変換してセット
        totalTimerElement.innerText = formatTime($second);
    } else { // ないなら
        try {
            // fetchTotalStudyMinutesは非同期関数でPromiseを返すのでawaitで待つ
            const totalStudyData = await fetchTotalStudyMinutes();
            const totalStudyMinutes = totalStudyData[0].total_study_minutes;

            console.log(totalStudyMinutes);
            if (totalStudyMinutes !== null) {
                // 秒数に変換してから、formatTimeした結果を格納
                const totalSeconds = totalStudyMinutes * 60; // 分を秒に変換
                const formattedTime = formatTime(totalSeconds);
                console.log(formattedTime);
                totalTimerElement.innerText = formattedTime;
            }
        } catch (error) {
            console.error("Error fetching total study minutes:", error);
        }
    }
}
