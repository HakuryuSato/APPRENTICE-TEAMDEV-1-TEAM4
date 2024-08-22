const Book = require("./Book.mjs");

// 棚クラス
export class Shelf {
    constructor(maxBooksPerShelf) {
        this.maxBooksPerShelf = maxBooksPerShelf;
        this.books = [];
    }

    addBook(book) {
        if (this.books.length < this.maxBooksPerShelf) {
            this.books.push(book);
        } else {
            throw new Error("This shelf is full!");
        }
    }

    draw(ctx, shelfYPosition) {
        let currentX = 50;
        for (const book of this.books) {
            book.draw(ctx, currentX, shelfYPosition);
            currentX += 20 + book.bookThickness;
        }
    }
}
