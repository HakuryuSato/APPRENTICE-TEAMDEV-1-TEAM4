// クラス
import { BookshelfRenderer } from "./BookshelfRenderer.mjs";
import { Shelf } from "./Shelf.mjs";
import { Book } from "./Book.mjs";

// DB通信用関数
import { fetchBooks } from "./fetch_books.mjs";

// DBから本のデータ取得
const inputData = await fetchBooks();
/* inputData例
[
    {
        "session_id": 1,
        "cover_image": "book.png",
        "cover_color": "#f5a623",
        "cover_text_color": "#000000",
        "category_name": "PHP",
        "book_thickness": 0
    },
    {
        "session_id": 2,
        "cover_image": "book.png",
        "cover_color": "#2d2d2d",
        "cover_text_color": "#FFFFFF",
        "category_name": "JavaScript",
        "book_thickness": 0
    },
*/



// 棚を作成 *未完成
const shelves = [];
let currentShelf = new Shelf();
shelves.push(currentShelf);


for (const data of inputData) { // DBに存在する本データ数分ループ
    // dataからBookオブジェクト作成

        /*  book引数の例
        {
        sessionId: 2,
        coverColor: "#2d2d2d",
        coverTextColor: "#FFFFFF",
        categoryName: "JavaScript",
        bookThickness: 0,
        }
    */

    const book = new Book(
        data.session_id,
        data.cover_color,
        data.cover_text_color,
        data.category_name,
        data.book_thickness,
    );

    


    try { // ShelfクラスにBook追加を試みる
        currentShelf.addBook(book);
    } catch (e) { // 失敗なら新たな棚を作成
        currentShelf = new Shelf(20);
        shelves.push(currentShelf);
        currentShelf.addBook(book);
    }
}

// 本棚を描画して表示
const renderer = new BookshelfRenderer(shelves);
renderer.render("bookshelfCanvas"); // 'bookshelfCanvas'はHTMLにあるcanvas要素のID
