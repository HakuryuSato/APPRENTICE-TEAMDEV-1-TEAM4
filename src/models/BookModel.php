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

    //
    private function fetchData($sql, $params = [])
    {
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute($params);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
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
        return $this->fetchData($sql);
        // 結果を返す
        // return $result->fetchAll(PDO::FETCH_ASSOC);
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

    // カテゴリー名からカテゴリーidを取得する
    public function getCategoriesIdFromDB($categoryNames)
    {
        if (empty($categoryNames)) {
            throw new Exception('Category names array is empty.');
        }
    
        // カテゴリー名の配列をプレースホルダに変換
        $placeholders = implode(',', array_fill(0, count($categoryNames), '?'));
    
        // SQLクエリの作成
        $sql = "SELECT category_id, category_name FROM categories WHERE category_name IN ($placeholders)";
    
        // クエリの実行
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute($categoryNames);
    
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
        // 結果を連想配列に変換（category_name => category_id の形式）
        $categoryIds = [];
        foreach ($result as $row) {
            $categoryIds[$row['category_name']] = $row['category_id'];
        }
    
        return $categoryIds;
    }

    // 本カバーのidを取得
    public function getBookCoverIdFromDB()
    {

        $sql = "
        SELECT 
            cover_id
        FROM 
            book_covers
    ";

        $result = $this->pdo->query($sql);
        return $result->fetchAll(PDO::FETCH_ASSOC);
    }

    // カテゴリーとカバーの相関テーブルからデータ取得
    public function getCategoryCoverIdsFromDB()
    {
        $sql = "
        SELECT 
            *
        FROM 
            category_cover
    ";

        $result = $this->pdo->query($sql);
        return $result->fetchAll(PDO::FETCH_ASSOC);
    }



    // 学習データを送信する
    public function sendStudySessions($data)
    {
        $values = [];
        $params = [];

        foreach ($data as $index => $session) {
            $values[] = "(:category_id{$index}, :duration{$index}, NOW())";
            $params["category_id{$index}"] = $session['category_id'];
            $params["duration{$index}"] = $session['session_duration_minutes'];
        }

        $sql = "INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES " . implode(", ", $values);
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute($params);
    }

    
    public function sendCategories($categories)
    {
        $values = [];
        $params = [];

        foreach ($categories as $index => $category) {
            $values[] = "(:category_name{$index})";
            $params["category_name{$index}"] = $category;
        }

        $sql = "INSERT INTO categories (category_name) VALUES " . implode(", ", $values);
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute($params);
    }

    // カテゴリーカバーを送信
    public function sendCategoryCover($data)
    {
        $values = [];
        $params = [];

        foreach ($data as $index => $cover) {
            $values[] = "(:category_id{$index}, :cover_id{$index})";
            $params["category_id{$index}"] = $cover['category_id'];
            $params["cover_id{$index}"] = $cover['cover_id'];
        }

        $sql = "INSERT INTO category_cover (category_id, cover_id) VALUES " . implode(", ", $values);
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute($params);
    }

    public function getAvailableCoverIds()
    {
        $sql = "SELECT cover_id FROM book_covers WHERE cover_id NOT IN (SELECT cover_id FROM category_cover)";
        $result = $this->pdo->query($sql);
        return $result->fetchAll(PDO::FETCH_COLUMN);
    }
}
