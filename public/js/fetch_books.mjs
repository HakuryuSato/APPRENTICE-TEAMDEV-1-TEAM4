// バックエンドのgetBooks.phpを呼び出す関数
export async function fetchBooks() {
    try {
        const response = await fetch("http://localhost:80/src/routes/getBooks.php");
        if (!response.ok) { // リクエスト失敗ならエラー処理
            throw new Error("Network response was not ok");
        }
        
        // 成功ならデータを返す
        const data = await response.json();
        // console.log(data)
        return data;
    } catch (error) {
        console.error("Fetch error:", error);
        return null; // エラー時に null を返す
    }
}
