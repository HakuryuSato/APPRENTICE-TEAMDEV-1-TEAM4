<div class='modal' id="ijin-modal">
    <div class="ijin-modal" types="">
        <div class="modal-bg"></div>
        <div class="ijin-modal-container">
            <div class="ijin-modal-content">
                <div class="ijin-modal-ijin-image-and-name">
                    <img id='ijin-image' class="ijin-image" src='images/ijins/ijin1.png'>
                    <div style="text-align: center;">
                        <p class="ijin-name">アーサー・ケプラー</p>
                        <p class="ijin-name">(1875 - 1953)</p>
                    </div>
                </div>
                <div class="ijin-text">
                    <div id='ijin-text'></div>
                </div>
            </div>
            <button class="close" id='ijin-modal-close'>ありがとう</button>
        </div>
    </div>
</div>

<!-- 後々style.cssへ移動？ -->
<style>
    .ijin-modal {
        /* フェードイン */
        animation: fadeIn 1s ease-in-out;
        width: 100%;
        height: 100%;
        font-family: "ShipporiMinchoB1", "ヒラギノ", serif;
    }

    .modal-bg {
        /* 位置を固定 */
        position: fixed;
        top: 0;
        left: 0;
        /* 画面いっぱいに広がるようにする */
        width: 100%;
        height: 100%;
        /* 黒い背景色(今回は黒で60%の不透明度) */
        background: rgba(0, 0, 0, 0.6);
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    /* モーダル */
    .ijin-modal-container {
        width: max(60vw, 500px);
        height: max(50vh, 350px);
        background-color: #C7B299;
        display: flex;
        flex-direction: column;
        /* 縦並び */
        align-items: center;
        /* 中央揃え */
        justify-content: center;
        /* 画面中央 */
        position: fixed;
        inset: 0;
        margin: auto;
        /* 最前面 */
        z-index: 1000;
        padding: 2rem 1rem;
    }

    /* ボタン以外 */
    .ijin-modal-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 70%;
    }

    /* 画像 */
    .ijin-image {
        width: 80%;
        margin-bottom: 0.5rem;
    }

    /* 名言 */
    .ijin-text {
        width: 65%;
    }

    /* 名前 */
    .ijin-name {
        font-size: 1rem;
    }

    /* 左側 */
    .ijin-modal-ijin-image-and-name {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 30%;
    }

    /* ボタン */
    .ijin-modal button {
        margin-top: 2rem;
        background-color: #B08BD5;
    }

    /* 600pxでブレイクポイントを設定（スマホ <-> タブレット、PC想定） */
    @media screen and (max-width: 600px) {

        .ijin-modal-container {
            /* モーダルのサイズ */
            width: 90%;
            height: 50%;
            min-height: 400px;
            padding: 1rem 0.5rem;
        }

        .ijin-modal-content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 70%;
        }

        .ijin-text {
            width: 90%;
        }

        .ijin-image {
            width: 40%;
        }

        .ijin-modal-ijin-image-and-name {
            width: 90%;
        }
    }
</style>