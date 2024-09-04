<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Bookshelf</title>
</head>

<body>
    <!-- ヘッダー -->
    <?php include '../src/views/header.php'; ?>

    <!--本棚-->
    <?php include '../src/views/shelf.php'; ?>

    <!-- フッター -->
    <?php include '../src/views/form.php'; ?>


    <!-- モーダル系 -->
    <!-- 偉人モーダル -->
    <?php include '../src/views/ijin_modal.php'; ?>

    <!-- 勉強時間登録用モーダル -->
    <?php include '../src/views/register_modal.php'; ?>

    <!-- JavaScript -->
    <script type="module" src="js/main.mjs"></script>

</body>

</html>