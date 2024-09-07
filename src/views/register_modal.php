<!-- モーダルで1日終了時に出る画面（未修正） -->
<div class='register-modal modal' id="register-modal">
    <div class="modal-bg"></div>
    <div class="register-modal-container">
        <div class="modal-overwrap">
            <span class="close-btn" id="register-confirm-close"></span>
            <div class="timer-container">
                <div>
                    <p>今日の学習内容</p>
                    <!--ここに記録済みタスクが縦に並ぶ-->
                    <table id="learning_history_list" class="learning_history_list">
                        <tbody id="total_history">

                        </tbody>
                    </table>


                    <!-- 提出ボタン-->
                    <button class="close" id="register-confirm-button">記録する</button>



                </div>
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

    .register-modal-container {
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
    }

    .modal-overwrap {
        width: 100%;
        height: 100%;
        position: relative;
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
    @media screen and (max-width: 600px) {}
</style>