/*
【モーダルを管理するためのクラス】
[使用方法]
const ijin_modal = Modal('偉人モーダルのdivタグに記述したid')
ijin_modal.open()
ijin_modal.close()

*/

export class Modal {
    constructor(id) {
        this.modal = document.getElementById(id);
        this.closeButton = this.modal.querySelector(".close");

        // 初期状態を非表示に設定
        // this.modal.style.display = "none";

        console.log(`Modal element with id '${id}' found.`);
        this.initEvents();
        console.log("modal init")
    }

    open() {
        // this.modal.style.display = "block";
        console.log("modal open")
        this.modal.style.setProperty('display', 'block', 'important');
    }

    close() {
        this.modal.style.display = "none";
    }

    initEvents() {
        this.closeButton.addEventListener("click", () => this.close());
    }
}
