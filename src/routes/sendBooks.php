<?php

require_once __DIR__ . '/../controllers/BookController.php';

use Controllers\BookController;

try {
    // POSTリクエストからデータを受け取る
    $postData = file_get_contents('php://input');
    $bookData = json_decode($postData, true);

    // BookControllerのインスタンスを作成し、メソッドを呼び出す
    $controller = new BookController();
    $result = $controller->saveBookData($bookData);

    // 処理結果をJSON形式で返す
    header('Content-Type: application/json');
    echo json_encode(['success' => $result]);

} catch (Exception $e) {
    header('Content-Type: application/json');
    echo json_encode(['error' => 'An error occurred: ' . $e->getMessage()]);
}
