<?php

// モデルから直接DBデータを取得するためのテストコード

require_once __DIR__ . '/models/BookModel.php';
require_once __DIR__ . '/controllers/GPTController.php';

use Models\BookModel;
use Controllers\GPTController;

// BookModelを初期化
$bookModel = new BookModel();


// 本棚データ取得のテスト
// $bookData = $bookModel->getBookDataFromDB();
// echo json_encode($bookData);
// return json_encode($bookData);

// カテゴリー取得のテスト
// $categories = $bookModel->getCategoriesFromDB();
// echo json_encode($categories);



// GPT取得のテスト
$gptController = new GPTController();
$ijinText = $gptController->getMessageFromGpt();

echo $ijinText;
