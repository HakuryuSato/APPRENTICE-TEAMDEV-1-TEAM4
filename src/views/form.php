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
        <div class="category-timer">
            <select name="new-task" class="recent category" id="inputCategory">
                <option value="">学習内容を選択</option>
                <?php foreach ($categories as $index => $category): ?>
                    <option value="<?php echo $category['category_name'] ?>"><?php echo $category['category_name'] ?></option>
                <?php endforeach; ?>
            </select>
            <div class="recent timer" id="timer-display" name="timer">00:00:00</div>
        </div>
        <div class="btn-container">
            <button class="recent" id="btn_start" name="btn_start" type="button">開始</button>
            <button class="recent" id="btn_stop" name="btn_stop" type="button">停止</button>
            <button class="recent" id="btn_complete" name="btn_complete" type="button">完了</button>
        </div>
    </div>
    <p id="in_study_title">
        <span id="in_study_category"></span>
    </p>
    <table id="learning_history_list" class="learning_history_list">
        <tbody>
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
        padding: 3rem 0;
        gap: 2rem 0;
    }

    .timer-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: middle;
        margin: 0 auto;
        flex-wrap: wrap;
        gap: 1rem 1.5rem;
    }

    .category-timer {
        display: flex;
        flex-direction: row;
        gap: 1.5rem;
    }

    .btn-container {
        display: flex;
        flex-direction: row;
        gap: 1.5rem;
    }

    .timer {
        font-family: "Oxanium", "ヒラギノ角ゴシック", "メイリオ", sans-serif;
        font-weight: 400;
        font-size: 1.25em;
        height: 2rem;
        line-height: 2rem;
    }

    .recent {
        text-align: center;
    }

    ul {
        list-style-type: none;
    }

    table {
        border-collapse: collapse;
    }

    td {
        text-align: center;
        padding: 0.5rem;
        height: 2rem;
        line-height: 2rem;
    }

    td#history_category {
        text-align: left;
        min-width: 8rem;
    }

    td#sum_time {
        padding-left: 1rem;
        padding-right: 1rem;
        width: fit-content;
    }

    td#delete {
        padding-left: 1rem;
        padding-right: 1rem;
        width: fit-content;

    }

    button#btn_delete.recent {
        min-width: auto;
        width: 2rem;
        height: 2rem;
        aspect-ratio: 1 / 1;
        padding: 0;
        margin: 0;
        display: block;
        position: relative;
        background-color: #FF665C;
    }

    button#btn_delete.recent::before,
    button#btn_delete.recent::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 3px;
        height: 1rem;
        background: #373737;
    }

    button#btn_delete.recent::before {
        transform: translate(-50%, -50%) rotate(45deg);
        z-index: 2;
    }

    button#btn_delete.recent::after {
        transform: translate(-50%, -50%) rotate(-45deg);
        z-index: 2;
    }

    .in_study_title {
        margin-bottom: 2rem;
    }

    button#btn_start {
        background-color: #FFD4AC;
    }

    button#btn_complete {
        background-color: #59BA78;
    }

    button#btn_stop {
        background-color: #FF665C;
    }

    .submit {
        background-color: #59BA78;
    }

    @media screen and (max-width: 600px) {
        form {
            gap: 1rem 0;
        }

        .category-timer {
            gap: 1rem;
        }

        .btn-container {
            gap: 1rem;
        }

        td {
            padding-top: 0.25rem;
            padding-bottom: 0.25rem;
            height: 1.25rem;
            line-height: 1.25rem;
        }

        td#sum_time,
        td#delete {
            padding-left: 0.25rem;
            padding-right: 0.25rem;
        }

        button#btn_delete.recent {
            width: 1.25rem;
            height: 1.25rem;
            aspect-ratio: 1 / 1;
            display: block;
            position: relative;
        }
    }
</style>