// 本棚を描画するための関数群

// クラス
import { BookshelfRenderer } from "./BookshelfRenderer.mjs";
import { Shelf } from "./Shelf.mjs";
import { Book } from "./Book.mjs";

// DB通信用関数
import { fetchBooks } from "./fetch_books.mjs";

export async function renderShelf() {
    // DBから本のデータ取得
    const inputData = await fetchBooks();
    console.log(inputData);

    /*
        名称の定義
        棚：横に伸びる1段の棚
        本棚：5段の棚を持つ、1列の本棚


        メモ：複数ページに分ける場合、ここで取得するDBデータの範囲をsession_idで分け、
        表示するページごとに次のsessin_idから取得し再描画する。
    */

    // 棚5段分を格納する本棚オブジェクト
    let currentBookShelf = new BookshelfRenderer();

    // 棚1段目を作成
    let currentShelf = new Shelf();
    currentBookShelf.addShelf(currentShelf);

    // データを本オブジェクトに変換し、棚へ格納する
    for (const data of inputData) { // DBに存在する本データ数分ループ
        // dataからBookオブジェクト作成
        /*  book引数の例
        {
        sessionId: 2,
        coverImage: 's',
        coverColor: "red",
        coverTextColor: "#FFFFFF",
        categoryName: "JavaScript",
        bookThickness: 1,
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
            currentShelf = new Shelf();
            currentBookShelf.addShelf(currentShelf);
            currentShelf.addBook(book);

            
        }
        // 棚にも本棚にも追加できない場合、本棚を新たに描画(予定でしたが、時間がないので、棚を一つ描画にとどめます。)
        // else {
        //     currentBookShelf.addShelf(currentShelf);
        //     currentBookShelf = new BookshelfRenderer();
        //     currentShelf = new Shelf();
        //     currentShelf.addBook(book);
        // }
    }
    currentBookShelf.render("bookshelf-canvas");
}
