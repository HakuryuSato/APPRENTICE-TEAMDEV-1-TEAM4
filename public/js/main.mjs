// 一旦main.jsで全て記述
//  ファイル分割する方法を調べるのと、fetchから値取得する方法や取得したデータが正しいか確認すること

// // fetch_books.jsをインポートする
import { fetchBooks } from "./fetch_books.mjs";
import { BookshelfRenderer } from "./BookshelfRenderer.mjs";
import { Shelf } from "./Shelf.mjs";
import { Book } from "./Book.mjs";



// fetchBooksを呼び出し、inputDataにデータを格納
let inputData;

// document.addEventListener("DOMContentLoaded", () => {
//     fetchBooks().then((data) => {
//         inputData = data;
//     }).catch((error) => {
//         console.error("Error loading books:", error);
//     });
// });

// console.log(inputData)

// 画像ファイルのパス
const bookShelfImagePath = "./images/book_shelf.png";
const bookImagePath = "./images/book.png";

// テスト用データ
// const inputData = [
//     {
//         "session_id": 1,
//         "cover_color": "#f5a623",
//         "cover_text_color": "#000000",
//         "category_name": "PHP",
//         "book_thickness": 0
//     },
//     {
//         "session_id": 2,
//         "cover_color": "#2d2d2d",
//         "cover_text_color": "#FFFFFF",
//         "category_name": "JavaScript",
//         "book_thickness": 0
//     }
//     // 他の本のデータをここに追加
// ];

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

// document.addEventListener("DOMContentLoaded", fetchBooks);
