<?php

require_once __DIR__ . '/../controllers/GPTController.php';

// DBからデータを送受信するためのクラスを呼び出し
use Controllers\GPTController;

try {
    // BookControllerのインスタンスを作成し、メソッドを呼び出す
    $gptController = new GPTController();
    $ijinText = $gptController->getMessageFromGpt();


    // JSON形式でデータを返す
    header('Content-Type: application/json');
    // echo $ijinText;
    echo json_encode(['message' => $ijinText]);

} catch (Exception $e) {
    header('Content-Type: application/json');
    echo json_encode(['error' => 'An error occurred: ' . $e->getMessage()]);
}

