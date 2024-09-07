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

    }

    open() {
        this.modal.style.setProperty('display', 'block');
    }

    close() {

        this.modal.style.setProperty('display', 'none', 'important');
    }

}