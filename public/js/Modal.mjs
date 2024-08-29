class Modal {
    constructor(id) {
        this.modal = document.getElementById(id);
        this.closeButton = this.modal.querySelector(".close");
        this.initEvents();
    }

    open() {
        this.modal.style.display = "block";
    }

    close() {
        this.modal.style.display = "none";
    }

    initEvents() {
        this.closeButton.addEventListener("click", () => this.close());
    }
}
