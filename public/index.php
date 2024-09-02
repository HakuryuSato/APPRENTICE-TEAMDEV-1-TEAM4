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
    <link rel="stylesheet" href="style.css">
    <title>Bookshelf</title>
</head>

<body>
    <div class="header">
        <div class="total" id="">累計勉強時間</div>
        <div class="total timer" id="" name="totaltimer">00:00:00</div>
    </div>

    <!--本棚部分-->
    <div class="shelf-container">
        <canvas id="bookshelfCanvas" width="600" height="800"></canvas>
    </div>

    <form action="">
        <div class="timer-container">
            <div class="recent">学習内容：</div>
            <input class="recent" type="text">
            <input class="recent" type="text">
            <div class="recent" class="timer" id="" name="timer">00:00:00</div>
            <button class="recent" type="submit">開始</button>
            <button class="recent" type="submit">リセット</button>
        </div>
        <div>
            <!--ここに記録済みタスクが縦に並ぶ-->
        </div>
        <!-- 提出ボタン-->
        <button calss="submit" type="submit">今日の学習を終了する</button>
    </form>
    <script type="module" src="js/main.mjs"></script>



</body>

</html>