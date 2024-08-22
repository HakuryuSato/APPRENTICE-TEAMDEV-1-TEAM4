// 棚クラス

// 棚の横幅最大数 *本棚の横幅px数が決まったら、px数に変更する
const maxBooksPerShelf = 20

export class Shelf {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        if (this.books.length < maxBooksPerShelf) {
            this.books.push(book);
        } else {
            throw new Error("This shelf is full!");
        }
    }

    drawBooks(ctx, shelfYPosition) {
        let currentX = 20;
        for (const book of this.books) {
            book.draw(ctx, currentX, shelfYPosition);
            currentX += 20 + book.bookThickness;
        }
    }
}
