// クラス
import { BookshelfRenderer } from "./BookshelfRenderer.mjs";
import { Shelf } from "./Shelf.mjs";
import { Book } from "./Book.mjs";

// DB通信用関数
import { fetchBooks } from "./fetch_books.mjs";

// 佐藤：一時的に本データの取得と描画を直接記述していますが、
//      モーダルの管理などが加わった際に分割する必要があります。

// DBから本のデータ取得
const inputData = await fetchBooks();
/* inputData例
[
    {
        "session_id": 1,
        "cover_image": "normal",
        "cover_color": "red",
        "cover_text_color": "#000000",
        "category_name": "PHP",
        "book_thickness": 0
    },
    {
        "session_id": 2,
        "cover_image": "normal",
        "cover_color": "red",
        "cover_text_color": "#FFFFFF",
        "category_name": "JavaScript",
        "book_thickness": 0
    },
*/

/*
名称の定義
棚：横に伸びる1段の棚
本棚：5段の棚を持つ、1列の本棚


メモ：複数ページに分ける場合、ここで取得するDBデータの範囲をsession_idで分け、
表示するページごとに次のsessin_idから取得し再描画する。
*/

// 棚5段分を格納する本棚オブジェクト
const currentBookShelf = new BookshelfRenderer();

// 棚1段目を作成
let currentShelf = new Shelf();
currentBookShelf.addShelf(currentShelf);

// データを本オブジェクトに変換し、棚へ格納する
for (const data of inputData) { // DBに存在する本データ数分ループ
    // dataからBookオブジェクト作成
    /*  book引数の例
        {
        sessionId: 2,
        coverImage: 'normal',
        coverColor: "red",
        coverTextColor: "#FFFFFF",
        categoryName: "JavaScript",
        bookThickness: 0,
        }
    */

    const book = new Book(
        data.session_id,
        data.cover_image,
        data.cover_color,
        data.cover_text_color,
        data.category_name,
        data.book_thickness,
    );

    // 本をまだ棚に格納できるなら
    if (currentShelf.canAddBook(book)) {
        // 現在の棚に本を格納
        currentShelf.addBook(book);

        // 棚には本を追加できないが、本棚に棚を追加できるなら
    } else if (currentBookShelf.canAddShelf()) {
        currentBookShelf.addShelf(currentShelf);
        currentShelf = new Shelf();
        currentShelf.addBook(book);

        // 棚にも本棚にも追加できない場合、本棚を描画
    } else {
        currentBookShelf.render("bookshelfCanvas");
        break;
    }
}
