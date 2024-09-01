// クラス
import { BookshelfRenderer } from "./BookshelfRenderer.mjs";
import { Shelf } from "./Shelf.mjs";
import { Book } from "./Book.mjs";
import { Modal } from "./Modal.mjs";

// DB通信用関数
import { fetchBooks } from "./fetch_books.mjs";

// イベントリスナー群  ---------------------------------------------------------------------------------------------------
// モーダル関連
document.addEventListener("DOMContentLoaded", () => { // DOMロード完了後
    

    // モーダル用インスタンス
    const ijinModal = new Modal("ijin-modal"); // 偉人モーダル
    const registerModal = new Modal("register-modal"); // 登録モーダル
    const registerConfirmModal = new Modal("register-confirm-modal"); // 確認用モーダル


    // ボタン群
    // 勉強開始ボタン
    const startStudyButton = document.getElementById(
        "start-study-button",
    );
    // 今日の勉強を終えるボタン
    const endTodaysStudyButton = document.getElementById("end-todays-study");

    // 偉人閉じるボタン
    const ijinModalCloseButton = document.getElementById("ijin-modal-close");

    // 登録確認ボタン
    const registerConfirmButton = document.getElementById(
        "register-confirm-button",
    );


    // クリックイベントリスナー群 
    // 偉人モーダル表示
    registerConfirmButton.addEventListener("click", () => {
        ijinModal.open();
    });

    // 偉人モーダル閉じる
    ijinModalCloseButton.addEventListener("click", () => {
        ijinModal.close();
    });

    // 登録モーダル表示
    startStudyButton.addEventListener("click", () => {
        registerModal.open();
    });

    // 登録モーダル閉じる
    registerConfirmButton.addEventListener("click", () => {
        registerModal.close();
    });

    // 登録確認モーダル表示
    endTodaysStudyButton.addEventListener("click", () => {
        registerConfirmModal.open();
    });

    // 登録確認モーダル非表示
    registerConfirmButton.addEventListener("click", () => {
        registerConfirmModal.close();
    });
});

//  ---------------------------------------------------------------------------------------------------



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
