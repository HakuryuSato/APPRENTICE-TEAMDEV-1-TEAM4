<?php

// DBから取得したデータを、様々な形へ変換するためのコントローラー

// 名前空間を指定
namespace Controllers;

// BookModelのファイルを読み込む
require_once __DIR__ . '/../models/BookModel.php';

use Models\BookModel;

class BookController
{
    private $bookModel;

    public function __construct()
    {
        // BookModelを初期化
        $this->bookModel = new BookModel();
    }

    // 本データを取得
    public function getBookData()
    {
        // モデルからデータを取得
        $studySessions = $this->bookModel->getBookDataFromDB();

        // 取得したデータを変換
        $bookData = $this->convertStudySessionsToBooks($studySessions);

        // データをJSON形式で返す
        return json_encode($bookData);
    }

    // カテゴリーを取得
    public function getCategoriesData()
    {

        // モデルからデータを取得
        $categories = $this->bookModel->getCategoriesFromDB();


        // データをJSON形式で返す
        return json_encode($categories);
    }

    // 学習データを送信
    public function sendStudyData($studyData)
    {

        // カテゴリー作成
        $this->createCategories($studyData);

        // カバー作成
        $this->createCovers($studyData);

        // 学習セッション保存
        $this->saveStudySessions($studyData);
    }



    // 合計勉強時間を取得するメソッド
    public function getTotalStudyTime()
    {

        $totalStudyMinutes = $this->bookModel->getTotalStudyMinuteFromDB();

        if(!empty($totalStudyMinutes)){
            return json_encode($totalStudyMinutes);
        }
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


    // カテゴリーが存在しなければ作成するメソッド
    private function createCategories($studyData)
    {
        $categories = $this->bookModel->getCategoriesFromDB();
        $newCategories = array_diff(array_column($studyData, 'category_name'), array_column($categories, 'category_name'));

        if (!empty($newCategories)) {
            $this->bookModel->sendCategories($newCategories);
        }
    }

    // カバーが存在しなければ作成するメソッド
    private function createCovers($studyData)
    {
        $categoryNames = array_column($studyData, 'category_name');
        $categoryIds = $this->bookModel->getCategoriesIdFromDB($categoryNames); # ['PHP'=>1, 'Laravel'=>2]

        $categoryCoverIds = $this->bookModel->getCategoryCoverIdsFromDB();
        $newCategoryCovers = array_diff(array_values($categoryIds), array_column($categoryCoverIds, 'category_id'));

        // カバーのないカテゴリが存在するなら
        if (!empty($newCategoryCovers)) {
            // 使用可能なカバーIdを調べ
            $availableCoverIds = $this->bookModel->getAvailableCoverIds();
            $coverData = [];

            // カバーのないカテゴリIdでループ
            foreach ($newCategoryCovers as $categoryId) {
                $coverId = array_shift($availableCoverIds);
                $coverData[] = ['category_id' => $categoryId, 'cover_id' => $coverId];
            }
            // カバーデータ送信
            $this->bookModel->sendCategoryCover($coverData);

            // 注意：現状、予め作成したカバー種類を超えるカテゴリを登録すると動作しない。
        }
    }

    // 勉強セッションを保存するメソッド
    private function saveStudySessions($studyData)
    {
        // 今回の勉強セッションのカテゴリ名から、カテゴリIDを取得
        $categoryNames = array_column($studyData, 'category_name');
        $categoryIds = $this->bookModel->getCategoriesIdFromDB($categoryNames);

        // DB送信用データ整形
        $studySessionsData = [];
        foreach ($studyData as $study) {

            $studySessionsData[] = [
                'category_id' => $categoryIds[$study['category_name']],
                'session_duration_minutes' => $study['session_duration_minutes'],
            ];
        }

        $this->bookModel->sendStudySessions($studySessionsData);
    }



}
