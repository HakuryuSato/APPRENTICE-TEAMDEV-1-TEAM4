<!--php部分は他のファイルに移す -->
<?php

use Models\BookModel;

require_once __DIR__ . '/../models/BookModel.php';

/* カテゴリー一覧取得 */
$bookModel = new BookModel();
$categories = $bookModel->getCategoriesFromDB();
?>

<div id="form">
    <div class="timer-container">
        <div class="category-timer">
            <select name="new-task" class="recent category" id="inputCategory">
                <option value="default">学習内容を選択</option>
                <?php foreach ($categories as $index => $category): ?>
                    <option value="<?php echo $category['category_name'] ?>"><?php echo $category['category_name'] ?></option>
                <?php endforeach; ?>
                <option value="newtask">新規項目を作成</option>
            </select>
            <div class="recent timer" id="timer-display" name="timer">00:00:00</div>
        </div>
        <div class="btn-container">
            <button class="recent" id="btn_start" name="btn_start" type="button">開始</button>
            <button class="recent invisible" id="btn_stop" name="btn_stop" type="button">停止</button>
            <button class="recent invisible" id="btn_complete" name="btn_complete" type="button">完了</button>
        </div>
    </div>
    <p id="in_study_title">
        <span id="in_study_category"></span>
    </p>
    <table id="learning_history_list" class="learning_history_list">
        <tbody id="tmp_history"></tbody>
    </table>
    <!-- 提出ボタン-->
    <button class="submit invisible" id="end-todays-study" name="btn_submit" type="submit">
        今日の学習を終了する
    </button>
</div>


<style>
    div#form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 3rem 0;
    }

    .timer-container {
        width: 100%;
        display: grid;
        justify-content: space-around;
        grid-template-columns: 5.5fr 4fr;
        gap: 2rem;
        margin: 0 auto;
        padding-bottom: 1rem;
    }

    .category-timer {
        display: flex;
        flex-direction: row;
        justify-content: end;
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
        display: grid;
        place-items: center;
        padding-top: 0.25em;
    }

    .recent {
        text-align: center;
    }

    .invisible {
        display: none;
    }

    ul {
        list-style-type: none;
    }

    #in_study_title {
        padding-bottom: 1rem;
    }

    table {
        border-collapse: collapse;
        margin-bottom: 1.5rem;
    }

    td {
        text-align: center;
        padding: 0 0.5rem;
        height: 2rem;
        line-height: 2rem;
        margin: 0.25rem 0;
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
        height: 1.25rem;
        background: #f8f8f8;
    }

    button#btn_delete.recent::before {
        transform: translate(-50%, -50%) rotate(45deg);
        z-index: 2;
    }

    button#btn_delete.recent::after {
        transform: translate(-50%, -50%) rotate(-45deg);
        z-index: 2;
    }

    button#btn_start {
        background-color: #59ba78;
    }

    button#btn_complete {
        background-color: #B08BD5;
    }

    button#btn_stop {
        background-color: #FF665C;
    }

    .submit {
        background-color: #B08BD5;
    }

    @media screen and (min-width: 1200px) {
        .timer-container {
            grid-template-columns: 5.5fr 4fr;
            gap: 4rem;
        }
    }

    @media screen and (max-width: 900px) {

        .timer-container {
            grid-template-columns: 5fr 4fr;
            gap: 2rem;
        }

        .timer-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
            flex-wrap: wrap;
            gap: 1rem 1.5rem;
        }

        .category-timer {
            gap: 1rem;
        }

        .btn-container {
            justify-content: center;
            gap: 1rem;
        }

    }

    @media screen and (max-width: 600px) {

        td {
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
        }


        button#btn_delete.recent::before,
        button#btn_delete.recent::after {
            content: '';
            width: 2px;
            height: 0.75rem;
        }

    }
</style>