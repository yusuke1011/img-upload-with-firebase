# スクリーンショット保存アプリ（QLコード）
とある装置用に作成したものです。  
サーバ側の画面のスクリーンショットをクライアント側に表示させ、クラウドに保存します。   
保存後はQLコードで保存先にアクセスすることができます。  

![image](https://github.com/yusuke1011/img-upload-with-firebase/blob/image/image.PNG)  

### 背景
とある装置に表示されている画面のスクリーンショットをiPadなどの端末で確認したいという要望を実現しました。  
クロスドメイン制約を解決するため、その装置上でサーバーを立てるという方法を採りました。  
ユースケースとしては、  
1. ユーザがiPadなどの端末で装置のスクリーンショットを表示させ、第三者にお見せする。
2. その第三者が画像を欲した場合に端末に表示させているスクリーンショットをクラウドストレージへ保存する。
3. 表示されたQRコードをスマホなどの他の端末より読み取ることで、第三者が画像を自分の端末に保存できる。

### 構成
[画像更新]
サーバー側では、リクエストを受けスクリーンショットを保存するexeを実行し、得た画像をbase64に変換してクライアントへ送信する。  
クライアント側では、受け取った画像を表示する。  
※exeはC#を用いて作成してあります。  

[画像保存]
クライアント側でFirebase Storageに画像を保存する。  

### 以下を使用しております。
- express
- vue
- vue-cli
- bootstrap
- Firebase Authentication
- Firebase Storage
- Cloud FireStore 

## How to use

```bash
# install dependencies
npm install

# serve with hot reload at localhost:3000
npm start
```
