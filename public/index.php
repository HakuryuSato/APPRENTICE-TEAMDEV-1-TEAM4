<?php

// メインページ、ここに対して様々なviewを呼びだし、
// JavaScriptで表示非表示を切り替え、SPAを実現する壮大な計画が立てられている。

// viewsから、Booksのビューを呼び出し
// include '../src/views/books_view.php';


?>

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bookshelf</title>
</head>
<body>
    <canvas id="bookshelfCanvas" width="600" height="800"></canvas>
    <!-- <script type="module" src="js/fetch_books.js"></script> -->
    <script type="module" src="js/main.js"></script>
    <!-- <script type="module" src="js/test_import.js"></script> -->

  
    
</body>
</html>