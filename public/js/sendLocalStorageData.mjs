import { postStudyData } from "./post_study_data.mjs";

export async function sendLocalStorageData() {
    // ローカルストレージからデータを取得
    const timerList = localStorage.getItem("timerList");
    console.log(timerList);

    if (!timerList) {
        console.log("No data to send.");
        return;
    }

    // JSON文字列をパース
    const studyData = JSON.parse(timerList);

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
