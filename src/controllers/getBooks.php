<?php
header('Content-Type: application/json');

$dsn = 'mysql:host=mysql;dbname=bookshelf;charset=utf8';
$username = 'root';
$password = '';

try {
    $pdo = new PDO($dsn, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmt = $pdo->query('SELECT * FROM books');
    $books = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($books);
} catch (PDOException $e) {
    echo json_encode(['error' => 'Connection failed: ' . $e->getMessage()]);
}
