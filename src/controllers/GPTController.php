<?php

// GPT-3.5との通信を行うためのコントローラー

namespace Controllers;

class GPTController {
    private $apiKey;
    private $apiEndpoint;

    public function __construct() {
        // OpenAI APIキーを設定（環境変数から取得するのが望ましい）
        $this->apiKey = getenv('OPENAI_API_KEY');
        $this->apiEndpoint = 'https://api.openai.com/v1/chat/completions';
    }

    public function communicateWithGPT($messages) {
        // リクエストデータを作成
        $data = [
            'model' => 'gpt-3.5-turbo',
            'messages' => $messages,
            'max_tokens' => 150,
            'temperature' => 0.7,
        ];

        // cURLでリクエストを送信
        $ch = curl_init($this->apiEndpoint);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            'Content-Type: application/json',
            'Authorization: Bearer ' . $this->apiKey,
        ]);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));

        $response = curl_exec($ch);
        curl_close($ch);

        // レスポンスを返す
        return json_decode($response, true);
    }
}
