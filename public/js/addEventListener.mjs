import { Modal } from "./Modal.mjs";
import { sendLocalStorageData } from "./sendLocalStorageData.mjs";
import { renderShelf } from "./renderShelf.mjs";
import { refreshTable } from "./displayStudyHistoryAtModal.mjs";

// メイン関数
export function addEventListener() {
    document.addEventListener("DOMContentLoaded", () => { // DOMロード完了後
        // モーダル用インスタンス  -------------------------------------------------
        const ijinModal = new Modal("ijin-modal"); // 偉人モーダル
        const registerModal = new Modal("register-modal"); // 登録モーダル

        // ボタン群  -------------------------------------------------

        // 今日の勉強を終えるボタン
        const endTodaysStudyButton = document.getElementById(
            "end-todays-study",
        );

        // 記録するボタン
        const registerConfirmButton = document.getElementById(
            "register-confirm-button",
        );

        //累計画面閉じるボタン
        const registerConfirmCloseButton = document.getElementById(
            "register-confirm-close",
        );

        // 偉人閉じるボタン
        const ijinModalCloseButton = document.getElementById(
            "ijin-modal-close",
        );


        // クリックイベントリスナー群  -------------------------------------------------
        // register_modal.phpを表示する
        addClickListener(endTodaysStudyButton, () => {
            registerModal.open();}
        );

        // register_modal.phpを閉じる
        addClickListener(registerConfirmButton, () => {
            registerModal.close();  // 最初の処理: registerModalを閉じる
            sendLocalStorageData();
            ijinModal.open();       // 次の処理: ijinModalを開く
        });
        // 偉人モーダルを閉じる
        addClickListener(ijinModalCloseButton, () => {
            localStorage.clear(); // ローカルストレージを消す。
            refreshTable();
            renderShelf();
            ijinModal.close();
            endTodaysStudyButton.classList.add("unvisible");
        });

        //右上の✖️をおすとregistermodalを閉じる
        addClickListener(registerConfirmCloseButton, () => registerModal.close());

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
