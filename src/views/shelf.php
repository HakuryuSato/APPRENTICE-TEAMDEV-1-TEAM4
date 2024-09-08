<div class="shelf-container">
    <canvas id="bookshelf-canvas" class="bookshelf-canvas"></canvas>
</div>
<style>
    .shelf-container {
        background-image: url(./images/background.png);
        background-position: center;
        background-size: cover;
        max-height: 100vh;
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 2% 0;

    }

    /* 600pxでブレイクポイントを設定（スマホ <-> タブレット、PC想定） */
    @media screen and (max-width: 600px) {
        .shelf-container {
            padding: 5% 0;
        }
    }
</style>