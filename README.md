# ディレクトリ解説
MVCに基づくディレクトリ構造を採用した。


![image](https://github.com/user-attachments/assets/c4a2d3af-e80a-4394-be51-736db36ee346)


# 前提となるVSCode拡張機能
■ PHP  
バージョン:v1.49.15728  
発行者:DEVSENSE devsense.com  
-> 静的解析、フォーマット(Alt + Shift + F)形式統一のため  

■ PHP Debug  
バージョン:v1.35.0  
発行者:Xdebug xdebug.org  
-> Xdebugの使用に必要となるため  

■ PHP Intelephense  
バージョン:v1.12.2  
発行者:Ben Mewburn intelephense.com  

■ W3C Web Validator  
バージョン:v1.3.1  
発行者:Celian Riboulet  
-> コーディング規約統一のため  

■ JavaScript Debugger (Nightly)  
バージョン:v2024.8.817  
発行者:Microsoft microsoft.com  
-> JavaScriptデバッグのため  


# Dockerを使用する場合の構築手順
## 1.リポジトリのクローン
任意のディレクトリにリポジトリをクローン

## 2.Docker Desktopのインストール
https://www.docker.com/ja-jp/

## 3.Dockerコンテナの起動
クローンしたディレクトリへ移動し、  
Docker Desktopを起動したうえで下記コマンドを実行  
```bash
docker compose up --build
```

## 4.状態の確認
http://localhost/public/ へアクセスし、
以下のような表示となれば成功している。
```
ID: 1, Thickness: 10, Color: red
ID: 2, Thickness: 20, Color: blue
ID: 3, Thickness: 15, Color: green
```


      

  

# XAMPPを使用する場合の構築手順
# リポジトリのクローン
1.'xampp/htdocs'の中身を必要に応じてバックアップ  
2.'xampp/htdocs'内にこのリポジトリをクローン  

# 前提条件
## Xdebug
### 'which php'コマンド(mac)でphp実行ファイルの場所が表示されるか？
-> 環境変数にxamppのphp.exeを登録(Windowsの例:"C:\\xampp\\php\\php.exe")

### もし実行ファイルの場所が表示されるなら(xamppじゃない場所のphp使っている可能性もある)  
-> 下記リンク先でバージョン情報を貼り付け、xdebugをインストール(環境により手順やディレクトリが異なる)  
https://xdebug.org/wizard

### Xdebugのインストール手順3つ (phpのパスにより変動するので注意)  
1.xampp/php/ext/ にxdebugのdllファイルを保存  
2.xdebugのdllファイルを php_xdebug.dll に名前変更  
3.xampp/php/php.ini に以下の記述を追加  

[xdebug]
zend_extension = "C:\xampp\php\ext\php_xdebug.dll" ;追加したdllファイルのフルパス(確実なので)  
xdebug.mode = debug ;debugモードON  
xdebug.start_with_request = yes ;VSCodeから呼び出すため  

### xdebugインストールの確認
'php -m'でモジュールの一覧に以下の記述があるか確認。  
[Zend Modules]  
Xdebug  

### PHP単体用デバッグ構成の動作確認
vSCodeでhtdocs内の任意のphpファイルにブレークポイントを設定し、  
'php 単体'を実行してブレークポイントが動作するか。

### PHP結合用デバッグ構成の動作確認
また、XAMPPからApacheを起動し、
'php 結合'を起動してから、
ブラウザの'localhost'、または'php ファイル名.php'でファイルを実行し
ブレークポイントが動作するかを確認。


## nodejs(JSデバッグ用)
ターミナルで'node -v'コマンドを入力してバージョンが表示されるか。
-> 表示されない場合はNode.jsのインストール(v21.7.1)を行う。

Commitsの下に各OS用のインストーラーリンクがあるのでダウンロードする。
https://nodejs.org/en/blog/release/v21.7.1#2024-03-08-version-2171-current-targos

任意のJavaScriptファイルでブレークポイントを設定し、
デバッグ構成'JavaScript'を実行してブレークポイントが動作するか確認。
