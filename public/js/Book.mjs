// 本クラス
export class Book {
    // コンストラクタ引数として、
    // fetch_booksで受け取ったbookデータをプロパティに設定
    constructor(
        sessionId, // 1
        coverImage, //
        coverColor, // 'red'
        coverTextColor, // #000000
        categoryName, // 'PHP'
        bookThickness, // 1 ~ 4
    ) {
        this.sessionId = sessionId;
        this.coverImage = coverImage;
        this.coverColor = coverColor;
        this.coverTextColor = coverTextColor;
        this.categoryName = categoryName;
        this.bookThickness = bookThickness;
    }

    draw(ctx, x, y) {
        const bookImage = new Image();
        const bookHeight = 128;

        // 厚み、色に応じて画像選択
        bookImage.src =
            `./images/books/${this.coverImage}_${this.coverColor}_${this.bookThickness}.png`;

        bookImage.onload = () => { // ブラウザにオブジェクトを読み込んだ時に発火
            // 本の画像を描画 引数(画像, 描画するx座標, 描画y座標, 横幅, 高さ)
            ctx.drawImage(bookImage, x, y, this.bookThickness * 10, bookHeight);

            // テキストを縦書きで描画 *本の厚みで余裕あれば描画？
            ctx.fillStyle = this.coverTextColor;

            // フォントと配置位置
            ctx.font = "8px sans-serif";
            ctx.textBaseline = "top";

            // テキストの描画開始位置を計算
            // X
            const textX = x + (this.bookThickness * 10) / 2; 

            // Y
            const textY = y +
                (this.coverImage === "s"
                    ? 45
                    : this.coverImage === "m"
                    ? 30
                    : 10);

            // テキストを描画
            for (let i = 0; i < this.categoryName.length; i++) {
                const textWidth = ctx.measureText(this.categoryName[i]).width; // 各文字の幅を計算
                ctx.fillText(
                    this.categoryName[i],
                    textX - textWidth / 2,
                    textY + i * 7,
                );
            }
        };
    }
}
