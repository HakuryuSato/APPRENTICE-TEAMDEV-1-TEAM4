// Book.js
const bookImagePath = "./images/book.png";

// 本クラス
export class Book {
    constructor(
        sessionId,
        coverColor,
        coverTextColor,
        categoryName,
        bookThickness,
    ) {
        this.sessionId = sessionId;
        this.coverColor = coverColor;
        this.coverTextColor = coverTextColor;
        this.categoryName = categoryName;
        this.bookThickness = bookThickness;
    }

    draw(ctx, x, y) {
        const bookImage = new Image();
        bookImage.src = bookImagePath;

        bookImage.onload = () => {
            // 背景色を設定して本の四角形を描画
            ctx.fillStyle = this.coverColor;
            ctx.fillRect(x, y, 20 + this.bookThickness, 100);

            // 本の画像を描画
            ctx.drawImage(bookImage, x, y, 20 + this.bookThickness, 100);

            // テキストを縦書きで描画
            ctx.fillStyle = this.coverTextColor;
            ctx.font = "16px sans-serif";
            ctx.textBaseline = "top";
            for (let i = 0; i < this.categoryName.length; i++) {
                ctx.fillText(this.categoryName[i], x + 5, y + 5 + i * 20);
            }
        };
    }
}
