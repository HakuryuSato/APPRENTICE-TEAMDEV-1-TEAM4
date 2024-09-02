<?php

// DBから取得したデータを、様々な形へ変換するためのコントローラー

// 名前空間を指定
namespace Controllers;

// BookModelのファイルを読み込む
require_once __DIR__ . '/../models/BookModel.php';

use Models\BookModel;

class BookController {
    private $bookModel;

    public function __construct() {
        // BookModelを初期化
        $this->bookModel = new BookModel();
    }

    public function getBookData() {
        // モデルからデータを取得
        $studySessions = $this->bookModel->getBookDataFromDB();

        // 取得したデータを変換
        $bookData = $this->convertStudySessionsToBooks($studySessions);

        // データをJSON形式で返す
        return json_encode($bookData);
    }

    public function getCategoriesData(){

        // モデルからデータを取得
        $categories = $this->bookModel->getCategoriesFromDB();

        // 変換が必要であれば変換
        // $categories = $this->

        // データをJSON形式で返す
        return json_encode($categories);
    }

    

    // 取得したDBのデータをJS用に変換するメソッド  -------------------------------------------------
    private function convertStudySessionsToBooks(array $studySessions)
    {
        $BooksData = [];

        foreach ($studySessions as $session) {
            $minutes = $session['session_duration_minutes'];
            $bookThickness = 1;

            if ($minutes > 15 && $minutes <= 30) {
                $bookThickness = 2;
            } elseif ($minutes > 30 && $minutes <= 60) {
                $bookThickness = 3;
            } elseif ($minutes > 60) {
                $bookThickness = 4;
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