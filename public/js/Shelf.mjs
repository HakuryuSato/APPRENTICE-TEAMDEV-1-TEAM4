// 棚クラス

// 棚の横幅最大数 *本棚の横幅px数が決まったら、px数に変更する
// const maxBooksPerShelf = 20;

export class Shelf {
    constructor() {
        this.books = [];
        this.booksWidth = 0;
    }

    // 本を追加可能か返す
    canAddBook(book){
        // 棚1段の幅を超えないなら本追加 47=(940px/20)
        return this.booksWidth + book.bookThickness < 47
    }

    // 本を追加する
    addBook(book) {
        this.books.push(book);
        this.booksWidth += book.bookThickness
    }

    drawBooks(ctx, shelfYPosition) {
        let currentX = 20; // 本描画スタート位置(左からXpx)
        for (const book of this.books) {
            book.draw(ctx, currentX, shelfYPosition);
            currentX += book.bookThickness * 20 ; // 本の厚み分右へずらす (1 -> 20px, 2 -> 40px)
        }
    }
}
