export async function fetchIjinText() {
    try {
        const response = await fetch(
            "http://localhost:80/src/routes/getIjinText.php",
        );

        if (!response.ok) { // リクエスト失敗ならエラー処理
            throw new Error("Network response was not ok");
        }
        // console.log(response.json().message)

        const data = await response.json(); // JSONとしてパース
        console.log(data)
        return data
    } catch (error) {
        console.error("Fetch error:", error);
        return null; // エラー時に null を返す
    }
}
