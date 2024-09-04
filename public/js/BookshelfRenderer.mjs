// 本棚描画クラス
export class BookshelfRenderer {
    constructor() {
        this.shelves = [];

        // 本棚の柄を変える？
        // this.shelfImage = shelfImage;
    }

    // 棚を追加できるかを返す
    canAddShelf() {
        return this.shelves.length < 5;
    }

    // 棚を1段追加する
    addShelf(shelf) {
        this.shelves.push(shelf);
    }

    // 本棚を描画する
    render(canvasId) {
        const canvas = document.getElementById(canvasId);
        const ctx = canvas.getContext("2d");

        const shelfImage = new Image();
        shelfImage.src = "./images/book_shelf.png";
        canvas.width = 484;
        canvas.height = 644;

        shelfImage.onload = () => {
            // 背景の本棚画像を描画
            ctx.drawImage(shelfImage, 0, 0);

            this.shelves.forEach((shelf, index) => {
                let shelfY;
                if (index === 0) {
                    shelfY = 20; // 0番目は20
                } else {
                    shelfY = 275 + (index - 1) * 250; // 1番目以降は275, 525, 775, 1025...
                }
                shelf.drawBooks(ctx, shelfY);
            });

        };
    }
}
