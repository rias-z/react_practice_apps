# react_practice_apps

reactでいろいろアプリ作ります

## 作成アプリ
- キャラクター作成 (create-character-app)  
  - reactを使う，reduxは使わない
  - データ保存は直下にuserディレクトリを作ってuser.jsonに保存する

- チャットアプリ (chat-app)  
  - reactを使う，reduxは使わない 
  - adminユーザと通常ユーザを区別する
  - 全員が見ることのできる全体チャットを実装
  - adminユーザと各通常ユーザ間での秘密チャットを実装
  - チャットのログをjsonとして保存する
  - 再度ログインしてもチャットの内容が消えないようにする
- 画像投稿アプリ (image-post-app)
- マップ生成アプリ (create-map-app)

## セットアップ
```
$ npm install -g json-server
```

## 起動
react
```
$ npm start
```

json-server
```
$ cd server/
$ json-server db.json -p 5000
'''
