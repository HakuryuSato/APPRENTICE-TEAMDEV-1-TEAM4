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

        // 変換が必要であれば変換
        // $categories = $this->

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

        // // カテゴリー作成
        // // DBからカテゴリー名を取得
        // $categories = $this->bookModel->getCategoriesFromDB();

        // // カテゴリーがDBに存在しないものを抽出
        // $newCategories = array_diff(array_column($studyData, 'category_name'), array_column($categories, 'category_name'));

        // // カテゴリーが存在しないなら新たに保存し
        // if (!empty($newCategories)) {
        //     $this->bookModel->sendCategories($newCategories);
        // }


        // // カバー作成
        // // $studyDataの各カテゴリーのidを取得 
        // $categoryIds = $this->bookModel->getCategoriesIdFromDB(array_column($studyData, 'category_name'));

        // // category_coverのid一覧を取得
        // $categoryCoverIds = $this->bookModel->getCategoryCoverIdsFromDB();

        // // $studyDataから、$categoryCoverIdsにcategory_idが存在しないものを抽出
        // $newCategoryCovers = array_diff(array_keys($categoryIds), array_column($categoryCoverIds, 'category_id'));

        // // category_coverに、$studyDataのカテゴリー名のカテゴリーidが存在しない場合
        // if (!empty($newCategoryCovers)) {
        //     // まだ$categoryCoverIdsに存在しないcover_idを抽出して
        //     $availableCoverIds = $this->bookModel->getAvailableCoverIds();
        //     $coverData = [];


        //     // 最も数字が小さいcover_idとcategory_idを送信
        //     foreach ($newCategoryCovers as $categoryId) {
        //         $coverId = array_shift($availableCoverIds);  // 最も小さいcover_idを取得
        //         $coverData[] = ['category_id' => $categoryId, 'cover_id' => $coverId];
        //     }
        //     $this->bookModel->sendCategoryCover($coverData);
        // }



        // // 学習セッション保存
        // // $studyDataをもとに、カテゴリidと経過時間(分)の配列を作り、送信
        // $studySessionsData = [];
        // foreach ($studyData as $study) {
        //     $studySessionsData[] = [
        //         'category_id' => $categoryIds[$study['category_name']],
        //         'session_duration_minutes' => $study['session_duration_minutes'],
        //     ];
        // }

        // $this->bookModel->sendStudySessions($studySessionsData);
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
        $categoryIds = $this->bookModel->getCategoriesIdFromDB($categoryNames);

        $categoryCoverIds = $this->bookModel->getCategoryCoverIdsFromDB();
        $newCategoryCovers = array_diff(array_keys($categoryIds), array_column($categoryCoverIds, 'category_id'));

        if (!empty($newCategoryCovers)) {
            $availableCoverIds = $this->bookModel->getAvailableCoverIds();
            $coverData = [];

            foreach ($newCategoryCovers as $categoryId) {
                $coverId = array_shift($availableCoverIds);
                $coverData[] = ['category_id' => $categoryId, 'cover_id' => $coverId];
            }
            $this->bookModel->sendCategoryCover($coverData);
        }
    }

    // 勉強セッションを保存するメソッド
    private function saveStudySessions($studyData)
    {
        $categoryNames = array_column($studyData, 'category_name');
        $categoryIds = $this->bookModel->getCategoriesIdFromDB($categoryNames);

        $studySessionsData = [];
        foreach ($studyData as $study) {
            // if (!isset($categoryIds[$study['category_name']])) {
            //     throw new Exception("Category ID not found for category name: " . $study['category_name']);
            // }

            $studySessionsData[] = [
                'category_id' => $categoryIds[$study['category_name']],
                'session_duration_minutes' => $study['session_duration_minutes'],
            ];
        }

        $this->bookModel->sendStudySessions($studySessionsData);
    }
}
