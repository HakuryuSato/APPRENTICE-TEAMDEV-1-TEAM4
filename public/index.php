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
    <div name="header">
        <div class="" id="">累計勉強時間</div>
        <div class="" id="" name="totaltimer">00:00:00</div>
    </div>

    <!--本棚部分-->
    <div class="shelf-container">
        <canvas id="bookshelfCanvas" width="600" height="800"></canvas>
    </div>

    <div name="record-container">
        <div class="timer-container">
            <form action="">
                <p>学習内容</p>
                <input type="text">
                <input type="text">
                <div class="" id="" name="timer" 00:00:00></div>
                <button type="submit">開始</button>
                <button type="submit">リセット</button>
            </form>
        </div>
        <div>
            <!--ここに記録済みタスクが縦に並ぶ-->
        </div>
        <!-- 提出ボタン-->
        <button type="submit">今日の学習を終了する</button>
    </div>
    <script type="module" src="js/main.mjs"></script>



</body>

</html>