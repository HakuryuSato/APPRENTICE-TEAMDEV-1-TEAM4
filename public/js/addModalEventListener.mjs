import { Modal } from "./Modal.mjs";

export function addModalEventListener() {
    document.addEventListener("DOMContentLoaded", () => { // DOMロード完了後
        // モーダル用インスタンス
        const ijinModal = new Modal("ijin-modal"); // 偉人モーダル
        const registerModal = new Modal("register-modal"); // 登録モーダル
        const registerConfirmModal = new Modal("register-confirm-modal"); // 確認用モーダル

        // ボタン群
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

        // クリックイベントリスナー群
        // 偉人モーダル表示
        registerConfirmButton.addEventListener("click", () => {
            ijinModal.open();
        });

        // 偉人モーダル閉じる
        ijinModalCloseButton.addEventListener("click", () => {
            ijinModal.close();
        });

        // 登録モーダル表示
        startStudyButton.addEventListener("click", () => {
            registerModal.open();
        });

        // 登録モーダル閉じる
        registerConfirmButton.addEventListener("click", () => {
            registerModal.close();
        });

        // 登録確認モーダル表示
        endTodaysStudyButton.addEventListener("click", () => {
            registerConfirmModal.open();
        });

        // 登録確認モーダル非表示
        registerConfirmButton.addEventListener("click", () => {
            registerConfirmModal.close();
        });
    });
}
