<?php

// DB操作を行うためのモデル

namespace Models;

use PDO;
use Exception;

class BookModel
{
    private $pdo;

    // PDOでMySQLと接続  -------------------------------------------------
    public function __construct()
    {

        // データベース設定を含むファイルを読み込み
        $dbConfig = require __DIR__ . '/../../config/database.php';

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

    // 本棚用データを取得
    public function getBookDataFromDB()
    {
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

        // 結果を返す
        return $result->fetchAll(PDO::FETCH_ASSOC);
    }


    // カテゴリーとカバーデータを取得する
    public function getCategoryCoverDataFromDB()
    {
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

        $result = $this->pdo->query($sql);
        return $result->fetchAll(PDO::FETCH_ASSOC);
    }

    // カテゴリー名の一覧を取得する
    public function getCategoriesFromDB()
    {
        $sql = "
            SELECT 
                category_name
            FROM 
                categories
        ";
    
        $result = $this->pdo->query($sql);
        return $result->fetchAll(PDO::FETCH_ASSOC);
    }


}
