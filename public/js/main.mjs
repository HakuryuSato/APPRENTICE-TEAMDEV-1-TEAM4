// 一旦main.jsで全て記述
//  ファイル分割する方法を調べるのと、fetchから値取得する方法や取得したデータが正しいか確認すること

// // fetch_books.jsをインポートする
import { fetchBooks } from './fetch_books.mjs';

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
const bookShelfImagePath = './images/book_shelf.png';
const bookImagePath = './images/book.png';




// 本棚描画クラス
class BookshelfRenderer {
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





// 入力データの本をオブジェクトに変換して追加
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
    const book = new Book(data.session_id, data.cover_color, data.cover_text_color, data.category_name, data.book_thickness);
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
renderer.render('bookshelfCanvas');  // 'bookshelfCanvas'はHTMLにあるcanvas要素のID

// document.addEventListener("DOMContentLoaded", fetchBooks);