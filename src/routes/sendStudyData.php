<?php

require_once __DIR__ . '/../controllers/BookController.php';

use Controllers\BookController;

try {
    // 本番用
    // $postData = file_get_contents('php://input');
    // $studyData = json_decode($postData, true);


    // テスト用
    $studyData = [
        [
            'category_name' => 'PHP',
            'session_duration_minutes' => 30,
        ],
        [
            'category_name' => 'Laravel',
            'session_duration_minutes' => 138,
        ],
    ];






    // BookControllerのインスタンスを作成し、メソッドを呼び出す
    $controller = new BookController();
    $result = $controller->sendStudyData($studyData);

    // 処理結果をJSON形式で返す
    header('Content-Type: application/json');
    echo json_encode(['success' => $result]);

} catch (Exception $e) {
    header('Content-Type: application/json');
    echo json_encode(['error' => 'An error occurred: ' . $e->getMessage()]);
}
