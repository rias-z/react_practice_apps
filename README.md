# react_practice_apps
reactでいろいろアプリ作ります  
大したことをしないので基本masterで作業

## 作成予定アプリ
- (終)キャラクター作成 (create-character-app)  
  - reactを使う，reduxは使わない
  - データ保存は直下にuserディレクトリを作ってuser.jsonに保存する

- (終)チャットアプリ (multi-chat-app)  
  - authあり
  - reactを使う，reduxは使わない 
  - 全員が見ることのできる全体チャットを実装
  - チャットのログをjsonとして保存する
  - 再度ログインしてもチャットの内容が消えないようにする

- (終)チャットアプリ (admin-chat-app)
  - authなし
  - reactを使う，reduxは使わない 
  - adminユーザと通常ユーザを区別する
  - 全体チャットを実装
  - adminと他ユーザとの秘密チャットを実装

- 画像投稿アプリ (image-post-app)
  - reactを使う
  - 画像アップロード機能
    - サムネイルをトリミングできるようにしたいよね
  - 画像リスト表示機能
  - 画像保存

- マップ生成アプリ (create-map-app)

## 環境
node v9.3.0

## セットアップ
各appディレクトリで
```
npm install
```

## 起動
react
```
$ npm start
```

### 対応サーバが必要 (port: 5000)
- multi-chat-app
- admin-chat-app
