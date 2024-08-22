// 本クラス
export class Book {
    // コンストラクタ引数として、
    // fetch_booksで受け取ったbookデータをプロパティに設定
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
        const bookHeight = 100

        // 厚みに応じて画像選択
        // bookImage.src = `./images/test_book_${this.bookThickness}.png`; // 0 ~ 3
        
        // テスト用
        bookImage.src = './images/book.png'
        

        bookImage.onload = () => { // ブラウザにオブジェクトを読み込んだ時に発火

            // 背景色を設定して本の四角形を描画 // 色をHEXカラーコードで変更するならば使用する。
            // ctx.fillStyle = this.coverColor;
            // ctx.fillRect(x, y, 20 + this.bookThickness, bookHeight);

            // 本の画像を描画 引数(画像, 描画するx座標, 描画y座標, 横幅, 高さ)
            // 注意：本の厚みに応じて値変更する必要がある。
            ctx.drawImage(bookImage, x, y, 20 + this.bookThickness, bookHeight);



            // テキストを縦書きで描画
            ctx.fillStyle = this.coverTextColor;

            ctx.font = "18px sans-serif";
            ctx.textBaseline = "top";

            for (let i = 0; i < this.categoryName.length; i++) {
                ctx.fillText(this.categoryName[i], x + 5, y + 5 + i * 20);
            }


        };
    }
}
