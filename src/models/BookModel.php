<?php

namespace Models;

use PDO;
use Exception;

class BookModel {
    private $pdo;

    // PDOでMySQLと接続  -------------------------------------------------
    public function __construct() { 
        // パスの定義を含むファイルを読み込み
        require_once __DIR__ . '/../config/paths.php';

        // データベース設定を含むファイルを読み込み
        $dbConfig = require PATH_CONFIG . '/database.php';

        try {
            // データベース設定を使ってPDO接続を初期化
            $this->pdo = new PDO(
                $dbConfig['dsn'],
                $dbConfig['username'],
                $dbConfig['password']
            );
            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (Exception $e) {
            // 接続エラー時の例外処理
            die('Database connection failed: ' . $e->getMessage());
        }
    }

    // DBから本に必要なデータを取得するメソッド  -------------------------------------------------
    public function getBookDataFromDB() { 
        $sql = "
            SELECT 
                s.session_id,
                s.session_duration_minutes,
                c.category_name,
                b.cover_image,
                b.cover_color,
                b.cover_text_color
            FROM 
                study_sessions s
            JOIN 
                categories c ON s.category_id = c.category_id
            JOIN 
                category_cover cc ON c.category_id = cc.category_id
            JOIN 
                book_covers b ON cc.cover_id = b.cover_id
        ";
        
        // クエリの実行
        $result = $this->pdo->query($sql);
        $studySessions = $result->fetchAll(PDO::FETCH_ASSOC);

        // データをBooksDataとして変換して返す
        return $this->convertStudySessionsToBooks($studySessions);
    }

    // 取得したDBのデータをJS用に変換するメソッド  -------------------------------------------------
    private function convertStudySessionsToBooks(array $studySessions) { 
        $BooksData = [];

        foreach ($studySessions as $session) {
            $minutes = $session['session_duration_minutes'];
            $bookThickness = 0;

            if ($minutes > 15 && $minutes <= 30) {
                $bookThickness = 1;
            } elseif ($minutes > 30 && $minutes <= 60) {
                $bookThickness = 2;
            } elseif ($minutes > 60) {
                $bookThickness = 3;
            }

            $BooksData[] = [
                'session_id' => $session['session_id'],
                'cover_image' => $session['cover_image'],
                'cover_color' => $session['cover_color'],
                'cover_text_color' => $session['cover_text_color'],
                'category_name' => $session['category_name'],
                'book_thickness' => $bookThickness
            ];
        }

        return $BooksData;
    }
}
