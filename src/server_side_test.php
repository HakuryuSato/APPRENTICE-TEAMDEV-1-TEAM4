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
$messageFromGpt = $gptController->getMessageFromGpt();

// テキスト部分のみ抽出
$content = $messageFromGpt['choices'][0]['message']['content'] ?? '';

// contentが取得できない場合のデフォルトメッセージ
if (empty($content)) {
    $content = "明日も前へ進み続けよう。困難を乗り越えるその姿勢が、偉大な歴史を紡いでいく力となる。";
}

echo $content;