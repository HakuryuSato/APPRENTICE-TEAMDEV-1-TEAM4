<?php

// モデルから直接DBデータを取得するためのテストコード

require_once __DIR__ . '/models/BookModel.php';

use Models\BookModel;

// BookModelを初期化
$bookModel = new BookModel();


// 本棚データ取得のテスト
// $bookData = $bookModel->getBookDataFromDB();
// echo json_encode($bookData);
// return json_encode($bookData);

// カテゴリー取得のテスト
$categories = $bookModel->getCategoriesFromDB();
echo json_encode($categories);



