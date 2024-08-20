<?php

require_once __DIR__ . '/models/BookModel.php';

use Models\BookModel;

// BookModelを初期化
$bookModel = new BookModel();

$bookData = $bookModel->getBookDataFromDB();

// データをJSON形式で返す
echo json_encode($bookData);
return json_encode($bookData);