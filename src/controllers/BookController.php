<?php

// 名前空間を指定
namespace Controllers;

// BookModelのファイルを読み込む
require_once __DIR__ . '/../models/BookModel.php';

use Models\BookModel;

class BookController {
    private $bookModel;

    public function __construct() {
        // BookModelを初期化
        $this->bookModel = new BookModel();
    }

    public function getBookDataFromDB() {
        // モデルからデータを取得
        $bookData = $this->bookModel->getBookDataFromDB();

        // データをJSON形式で返す
        return json_encode($bookData);
    }
}