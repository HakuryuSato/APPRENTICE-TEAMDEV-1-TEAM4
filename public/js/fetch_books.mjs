// getBooks.phpを呼び出すための関数
export function fetchBooks() {
    fetch("http://localhost:80/src/routes/getBooks.php")
        .then((response) => { // リクエストが成功したら
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            return response.json(); // JSON形式でレスポンスを解析
        })
        .then((data) => { // レスポンス解析が成功したら
            // console.log(data)
            return data; // データを返す

            /* dataの構造は以下
                [
                    {
                        "session_id": 1,
                        "cover_image": "book.png",
                        "cover_color": "#f5a623",
                        "cover_text_color": "#000000",
                        "category_name": "PHP",
                        "book_thickness": 0
                    },
                    {
                        "session_id": 2,
                        "cover_image": "book.png",
                        "cover_color": "#2d2d2d",
                        "cover_text_color": "#FFFFFF",
                        "category_name": "JavaScript",
                        "book_thickness": 0
                    },
                    ...

            */
        })
        .catch((error) => {
            console.error("Fetch error:", error);
        });
}

// ページがロードされたときに自動的にfetchBooksを呼び出す
// document.addEventListener("DOMContentLoaded", fetchBooks);
