<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bookshelf</title>
</head>

<body>

    <!-- 本棚 -->
    <?php include '../src/views/book_shelf_canvas.php'; ?>

    <!-- 偉人のモーダル -->
    <div id="ijin_modal" class="modal" style="display: none;">
    <div class="modal-content">
        <span class="close">&times;</span>
        <a>偉人の言葉</a>
    </div>
</div>


    <!-- モーダルを開くボタン -->
    <button id="openIjinModal">偉人モーダルを開く</button>


    <!-- JavaScript -->
    <script type="module" src="js/main.mjs"></script>


</body>

</html>