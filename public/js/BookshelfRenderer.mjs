// 本棚描画クラス
export class BookshelfRenderer {
    constructor(shelfImage, shelves) {
        this.shelfImage = shelfImage;
        this.shelves = shelves;
    }

    render(canvasId) {
        const canvas = document.getElementById(canvasId);
        const ctx = canvas.getContext('2d');

        const shelfImage = new Image();
        shelfImage.src = this.shelfImage;

        shelfImage.onload = () => {
            // 背景の本棚画像を描画
            ctx.drawImage(shelfImage, 0, 0);

            // 各棚に本を描画
            let shelfY = 50;
            for (const shelf of this.shelves) {
                shelf.draw(ctx, shelfY);
                shelfY += 120;  // 次の棚のY座標
            }
        };
    }
}