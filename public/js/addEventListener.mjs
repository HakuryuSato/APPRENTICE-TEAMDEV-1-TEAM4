import { Modal } from "./Modal.mjs";

// メイン関数
export function addEventListener() {
    document.addEventListener("DOMContentLoaded", () => { // DOMロード完了後
        // モーダル用インスタンス  -------------------------------------------------
        const ijinModal = new Modal("ijin-modal"); // 偉人モーダル
        const registerModal = new Modal("register-modal"); // 登録モーダル
        const registerConfirmModal = new Modal("register-confirm-modal"); // 確認用モーダル


        // ボタン群  -------------------------------------------------
        // 勉強開始ボタン
        const startStudyButton = document.getElementById(
            "start-study-button",
        );
        // 今日の勉強を終えるボタン
        const endTodaysStudyButton = document.getElementById(
            "end-todays-study",
        );

        // 偉人閉じるボタン
        const ijinModalCloseButton = document.getElementById(
            "ijin-modal-close",
        );

        // 登録確認ボタン
        const registerConfirmButton = document.getElementById(
            "register-confirm-button",
        );
        //  -------------------------------------------------




        // クリックイベントリスナー群  -------------------------------------------------
        // 偉人モーダルを表示する
        addClickListener(registerConfirmButton, () => ijinModal.open());

        // 偉人モーダルを閉じる
        addClickListener(ijinModalCloseButton, () => ijinModal.close());

        // 登録モーダルを表示する
        addClickListener(startStudyButton, () => registerModal.open());

        // 登録モーダルを閉じる
        addClickListener(registerConfirmButton, () => registerModal.close());

        // 登録確認モーダルを表示する
        addClickListener(
            endTodaysStudyButton,
            () => registerConfirmModal.open(),
        );

        // 登録確認モーダルを閉じる
        addClickListener(
            registerConfirmButton,
            () => registerConfirmModal.close(),
        );
        //  -------------------------------------------------
    });
}

// クリックイベントを要素に追加するための汎用関数
function addClickListener(element, callback) {
    // 要素が存在する場合のみイベントリスナーを追加
    if (element) {
        element.addEventListener("click", callback);
    }
}
