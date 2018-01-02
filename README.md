# react_practice_apps

reactでいろいろアプリ作ります

## 作成アプリ
- キャラクター作成 (create-character-app)
reactを使う，reduxは使わない  
データ保存は直下にuserディレクトリを作ってuser.jsonに保存する

- チャットアプリ (chat-app)
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
