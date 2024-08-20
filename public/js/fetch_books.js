// function fetchBooks() {
//     fetch('http://localhost:80/src/routes/getBooks.php')
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.text();  // まずはテキストとしてレスポンスを解析
//         })
//         .then(data => {
//             console.log('Response Text:', data);  // レスポンスが取得できているか確認
//             // JSONに変換を試みる
//             try {
//                 const jsonData = JSON.parse(data);
//                 console.log('Books Data:', jsonData);  // JSONに変換できたらログ出力
//             } catch (e) {
//                 console.error('Error parsing JSON:', e);  // JSON変換エラー時のログ
//             }
//         })
//         .catch(error => {
//             console.error('Fetch error:', error);
//         });
// }



// getBooks.phpを呼び出すための関数
function fetchBooks() {
    fetch('http://localhost:80/src/routes/getBooks.php')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();  // JSON形式でレスポンスを解析
        })
        .then(data => {
            console.log('Books Data:', data);
            // ここでデータを処理します。例として、コンソールに出力
            // 必要に応じてHTMLにデータを反映させる処理を書く
        })
        .catch(error => {
            console.error('Fetch error:', error);
            // エラーメッセージを表示するなどのエラーハンドリング
        });
}

// ページがロードされたときに自動的にfetchBooksを呼び出す
document.addEventListener('DOMContentLoaded', fetchBooks);
