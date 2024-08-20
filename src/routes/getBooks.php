<?php

require_once __DIR__ . '/../../config/paths.php';
require_once PATH_SRC_ROOT . '/controllers/BookController.php';

// DBからデータを送受信するためのクラスを呼び出し
use Controllers\BookController;

try {
    // BookControllerのインスタンスを作成し、メソッドを呼び出す
    $controller = new BookController();
    $booksData = $controller->getBookDataFromDB();

    // JSON形式でデータを返す
    header('Content-Type: application/json');
    echo $booksData;

} catch (Exception $e) {
    header('Content-Type: application/json');
    echo json_encode(['error' => 'An error occurred: ' . $e->getMessage()]);
}

