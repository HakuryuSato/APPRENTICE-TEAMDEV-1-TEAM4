import { postStudyData } from "./post_study_data.mjs";

export async function sendLocalStorageData() {
    // ローカルストレージからデータを取得
    const timerList = localStorage.getItem("timerList");

    if (!timerList) { // ローカルストレージにデータがなければ終了
        console.log("No data to send.");
        return;
    }

    // JSON文字列をパース
    let studyData = JSON.parse(timerList);

    // 秒を分に変換
    studyData.forEach((item) => {
        if (item.session_duration_minutes !== undefined) {
            item.session_duration_minutes /= 60;
        }
    });

    try {
        // データ送信
        const result = await postStudyData(studyData);

        if (result) {
            console.log("Data sent successfully:", result);
            // 送信成功後、ローカルストレージのデータを削除
            localStorage.removeItem("timerList");
        } else {
            console.error("Data sending failed.");
        }
    } catch (error) {
        console.error("Error sending data:", error);
    }
}
