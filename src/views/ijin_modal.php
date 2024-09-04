<!-- 佐藤：デバッグのためijin-modalのcss class 'modal'を外しています。 -->
<div class=''>
    <div id="ijin-modal" class="ijin-modal" types="">
        <div class="ijin-modal-container">
            <div class="ijin-modal-content">
                <div class="ijin-modal-ijin-image-and-name">
                    <img id='ijin-image' class="ijin-image" src='images/ijins/ijin1.png'>
                    <div style="text-align: center;">
                        <span class="ijin-name">アーサー・ケプラー</span><br>
                        <span class="ijin-name">(1875 - 1953)</span>
                    </div>
                </div>
                <div id='ijin-text' class="ijin-text"></div>
            </div>
            <button id='ijin-modal-close'>ありがとう</button>
        </div>
    </div>
</div>

<!-- 後々style.cssへ移動？ -->
<style>
    .ijin-modal {
        /* デバッグ用display:block */
        display: block;

        /* 角を丸める */
        border-radius: 30px;

        /* フェードイン */
        animation: fadeIn 1s ease-in-out;

        /* 画面中央 */
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        /* 最前面 */
        z-index: 100;

        /* モーダルのサイズ */
        width: 50%;
        height: 50%;

        /* 背景を半透明 */
        background-color: white;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }



    .ijin-modal-container {
        display: flex;
        flex-direction: column;
        /* 縦並び */
        align-items: center;
        /* 中央揃え */
        justify-content: center;
        /* 中央揃え */
        height: 100%;
    }

    .ijin-modal-content {
        display: flex;
        /* 横並び */
        align-items: center;
        /* 縦方向の中央揃え */
        margin-bottom: 20px;
        /* ボタンとの余白 */
    }

    .ijin-image {
        max-width: 200px;
        /* 画像の最大幅を制限 */
        margin-right: 20px;
        /* テキストとの間の余白 */
    }

    .ijin-text {
        /* テキストがスペースを埋めるようにする */
        flex-grow: 1;
        color: black;
    }

    .ijin-name {
        color: gray;
    }





    .ijin-modal-ijin-image-and-name {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 20px;
    }
</style>