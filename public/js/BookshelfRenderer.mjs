// 本棚描画クラス
export class BookshelfRenderer {
    constructor(shelves) {
        // this.shelfImage = shelfImage; // 本棚の柄を変える？
        this.shelves = shelves;
    }

    render(canvasId) {
        const canvas = document.getElementById(canvasId);
        const ctx = canvas.getContext("2d");

        const shelfImage = new Image();
        shelfImage.src = "./images/book_shelf.png";

        shelfImage.onload = () => {
            // 原点を左下に設定し、Y軸を反転
            ctx.translate(0, canvas.height);
            ctx.scale(1, -1);

            // 背景の本棚画像を描画
            ctx.drawImage(shelfImage, 0, 0);



            // 棚1段に本を描画
            let shelfY = 13;
            for (const shelf of this.shelves) {
                shelf.drawBooks(ctx, shelfY);
                shelfY += 130; // 次の棚のY座標
            }

        };
    }
}
