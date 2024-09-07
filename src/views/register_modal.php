<!-- モーダルで1日終了時に出る画面（未修正） -->
<div class='register-modal modal' id="register-modal">
    <div class="modal-bg"></div>
    <div class="register-modal-container">
        <div class="modal-overwrap">
            <span class="close-btn" id="register-confirm-close"></span>
            <div class="register-modal-contents">

                <p>今日の学習内容</p>
                <!--ここに記録済みタスクが縦に並ぶ-->
                <table id="learning_history_list" class="learning_history_list">
                    <tbody id="total_history">

                    </tbody>
                </table>


                <!-- 提出ボタン-->
                <button class="close submit" id="register-confirm-button">記録する</button>




            </div>
        </div>
    </div>
</div>




<style>
    .register-modal {
        /* フェードイン */
        animation: fadeIn 1s ease-in-out;
        width: 100%;
        height: 100%;

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
        z-index: 3;
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

    .register-modal-container {
        width: max(60vw, 500px);
        height: fit-content;
        background-color: #f8f8f8;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: fixed;
        inset: 0;
        margin: auto;
        z-index: 10;
    }

    .modal-overwrap {
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 4;

    }

    .register-modal-contents {
        width: 100%;
        height: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        gap: 1rem;
    }

    .register-modal-contents p {
        margin-top: 2rem;
        height: 2rem;
    }

    .register-modal-contents table {
        height: fit-content;
        margin: 0 auto;
    }

    .register-modal-contents td.history_category {
        text-align: left;
    }

    .register-modal-contents button {
        height: 2rem;
        min-width: auto;
        width: fit-content;
        margin-bottom: 1.5rem;
    }

    .close-btn {
        position: absolute;
        top: 0;
        right: 0;
        padding: 1rem;
    }

    .close-btn::before,
    .close-btn::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 3px;
        height: 1rem;
        background: #373737;
    }

    .close-btn::before {
        transform: translate(-50%, -50%) rotate(45deg);
        z-index: 2;
    }

    .close-btn::after {
        transform: translate(-50%, -50%) rotate(-45deg);
        z-index: 2;
    }


    /* 600pxでブレイクポイントを設定（スマホ <-> タブレット、PC想定） */
    @media screen and (max-width: 600px) {

        .register-modal-container {
            /* モーダルのサイズ */
            width: 90%;
            height: fit-content;
            padding: 1rem 0.5rem;
        }

        .register-modal-contents p {
            margin-top: 1rem;
            height: 1rem;
        }

        .register-modal-contents button {
            height: fit-content;
            margin-bottom: 1rem;
        }

    }
</style>