<!--php部分は他のファイルに移す -->
<?php

use Models\BookModel;

require_once __DIR__ . '/../models/BookModel.php';

/* カテゴリー一覧取得 */
$bookModel = new BookModel();
$categories = $bookModel->getCategoriesFromDB();
?>

<!-- action部分を佐藤さんプログラムと結合 -->
<form id="form" method="post" action="#">
    <div class="timer-container">
        <select name="new-task" class="recent category" id="inputCategory">
            <option value="">学習内容を選択</option>
            <?php foreach($categories as $index => $category): ?>
                <option value="<?php echo $category['category_name'] ?>"><?php echo $category['category_name'] ?></option>
            <?php endforeach; ?>
        </select>
        <div class="recent timer" id="timer-display" name="timer">00:00:00</div>
        <button class="recent" id="btn_start" name="btn_start" type="button">開始</button>
        <button class="recent" id="btn_stop" name="btn_stop" type="button">停止</button>
        <button class="recent" id="btn_complete" name="btn_complete" type="button">完了</button>
    </div>
        <p id="in_study_title">
            <span id="in_study_category"></span>
        </p>
        <table id="learning_history_list" class="learning_history_list">
            <tbody>
                <!-- <tr> -->
                    <!-- <td id="history_category"></td>
                    <td id="sum_time"></td>
                    <td id="btn_delete"><button class="recent" id="btn_stop" name="btn_stop" type="button">削除</button></td> -->
                <!-- </tr> -->
            </tbody>
        </table>
    <!-- 提出ボタン-->
    <button class="submit" id="btn_submit" name="btn_submit" type="submit">
        今日の学習を終了する
    </button>
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2rem 0;
    }

    .timer-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 40px;
        margin: 0 auto;
        flex-wrap: wrap;
    }

    .timer {
        font-family: "Oxanium", "ヒラギノ角ゴシック", "メイリオ", sans-serif;
        font-weight: 400;
        font-size: 1.25em;
    }

    .recent {
        margin: 0 0.7em;
        text-align: center;
    }

    .category {
        width: 400px;
        font-size: 2rem;
        border: 1px solid;
    }

    ul {
        list-style-type: none;
    }

    /* 仮テーブルCSS*/
    table {
        border: none;
        margin-bottom: 20px;
    }
    table , td, th {
        border-collapse: collapse;
    }
    td, th {
        padding: 3px;
        width: 300px;
        height: 25px;
    }
    th {
        background: #f0e6cc;
    }
    .even {
        background: #fbf8f0;
    }
    .odd {
        background: #fefcf9;
    }
</style>
