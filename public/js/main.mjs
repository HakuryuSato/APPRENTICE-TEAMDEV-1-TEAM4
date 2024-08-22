// クラス
import { BookshelfRenderer } from "./BookshelfRenderer.mjs";
import { Shelf } from "./Shelf.mjs";
import { Book } from "./Book.mjs";

// DB通信用関数
import { fetchBooks } from "./fetch_books.mjs";

// 画像ファイルのパス
const bookShelfImagePath = "./images/book_shelf.png";
const bookImagePath = "./images/book.png";


// DBから本のデータ取得
const inputData = await fetchBooks();

// 棚を作成
const shelves = [];
let currentShelf = new Shelf(20);
shelves.push(currentShelf);

for (const data of inputData) {
    const book = new Book(
        data.session_id,
        data.cover_color,
        data.cover_text_color,
        data.category_name,
        data.book_thickness,
    );
    try {
        currentShelf.addBook(book);
    } catch (e) {
        // 新しい棚を作成し、本を追加
        currentShelf = new Shelf(20);
        shelves.push(currentShelf);
        currentShelf.addBook(book);
    }
}

// 本棚を描画して表示
const renderer = new BookshelfRenderer(bookShelfImagePath, shelves);
renderer.render("bookshelfCanvas"); // 'bookshelfCanvas'はHTMLにあるcanvas要素のID
