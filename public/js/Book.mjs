// 本クラス
export class Book {
    // コンストラクタ引数として、
    // fetch_booksで受け取ったbookデータをプロパティに設定
    constructor(
        sessionId, // 1
        coverImage, // normal
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
        const bookHeight = 237;

        // 厚み、色に応じて画像選択
        bookImage.src = `./images/${this.coverImage}_${this.coverColor}_${this.bookThickness}.png`;

        bookImage.onload = () => { // ブラウザにオブジェクトを読み込んだ時に発火

            // 本の画像を描画 引数(画像, 描画するx座標, 描画y座標, 横幅, 高さ)
            ctx.drawImage(bookImage, x, y, this.bookThickness * 20, bookHeight);

            // テキストを縦書きで描画 *本の厚みで余裕あれば描画？
            ctx.fillStyle = this.coverTextColor;

            // フォントと配置位置
            ctx.font = "18px sans-serif";
            ctx.textBaseline = "top";

            // テキストの描画開始位置を計算
            const textX = x + (this.bookThickness * 20) / 2; // 本の厚みの中心

            // テキストを描画
            for (let i = 0; i < this.categoryName.length; i++) {
                const textWidth = ctx.measureText(this.categoryName[i]).width; // 各文字の幅を計算
                ctx.fillText(
                    this.categoryName[i],
                    textX - textWidth / 2,
                    y + 5 + i * 20,
                ); 
            }


        };
    }
}
