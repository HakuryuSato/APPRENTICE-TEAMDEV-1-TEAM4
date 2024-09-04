<form action="">
    <div class="timer-container">
        <div class="recent">学習内容：</div>
        <select class="recent">
            <option value="new_task">新規作成</option>
        </select>
        <input class="recent" type="text">
        <div class="recent" class="timer" id="" name="timer">00:00:00</div>
        <button class="recent" type="submit">開始</button>
        <button class="recent" type="submit">リセット</button>
    </div>
    <div>
        <!--ここに記録済みタスクが縦に並ぶ-->
    </div>
    <!-- 提出ボタン-->
    <button class="submit" type="submit">今日の学習を終了する</button>
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
        margin: 0 1em;
        text-align: center;
    }
</style>