<?php

namespace Controllers;

class GPTController
{
    private $apiKey;
    private $apiEndpoint;

    public function __construct()
    {
        // 環境変数からOpenAI APIキーを取得
        $this->apiKey = getenv('OPENAI_API_KEY');
        $this->apiEndpoint = 'https://api.openai.com/v1/chat/completions';


        if (!$this->apiKey) {
            throw new \Exception('APIキーが設定されていません');
        }
    }

    public function getMessageFromGpt()
    {
        // リクエストデータを作成
        $data = [
            'model' => 'gpt-3.5-turbo',
            'messages' => [
                ['role' => 'user', 'content' => 'あなたは有名で静かな偉人です 今日も勉強を頑張った人に向けて記号を使わず名言風に50文字以内で励ましの言葉を述べてください']
            ],

        ];

        // cURLでリクエストを送信
        $ch = curl_init($this->apiEndpoint); // cURL handle

        // 変数格納用
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        // ヘッダー指定
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            'Content-Type: application/json',
            'Authorization: Bearer ' . $this->apiKey,
        ]);


        // POST
        curl_setopt($ch, CURLOPT_POST, true);

        // $dataをjson形式で指定
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));

        $response = curl_exec($ch);

        // エラーチェック
        if (curl_errno($ch) || !$response) {
            throw new \Exception('cURLエラー');
        }

        // セッション終了
        curl_close($ch);

        $responseArray =  json_decode($response, true);

        $ijinText = $responseArray['choices'][0]['message']['content'] ?? '';
 
        // contentが取得できない場合のデフォルトメッセージ
        // if (empty($content)) {
        //     $ijinText = "明日も前へ進み続けよう。困難を乗り越えるその姿勢が、偉大な歴史を紡いでいく力となる。";
        // }
        
        return $ijinText;
        
    }
}
