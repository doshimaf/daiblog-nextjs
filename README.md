# daiblog-next.js

下記で作ったJamstackな個人ブログ。

- クライアントサイド：Next.js
- リポジトリ：GitHub
- ホスティング：Vercel

## 参考記事

### 全般

https://gotohayato.com/content/517/

### 独自ドメインのサブドメイン設定

https://blog.okaryo.io/20220320-vercel-deploy-with-custom-domain

### Googleフォント読み込み

https://qiita.com/dosukoi_man/items/4624de0275a53ba648d3

### Google Analytics

https://hukurouo.com/articles/2021-02-07-gtag

### Syntax Highlight

https://countstheclouds.com/posts/nextjs-blog-3/#syntax-highlighting

## ToDo

- タグ別の記事一覧ページの作成
- ウィジェットの作成
- フィードの生成
- サイトマップの生成
- メタタグの追加
- OGP タグの追加
- PWA 対応

## Next.jsのチュートリアルやったときの学び・メモ

ほぼ公式ドキュメントの翻訳。。。

- `<a>`タグじゃなく<Link>コンポーネントを使うことで、client-side navigationというのが使える。
- client-side navigation は、Javascript でページ遷移させることでブラウザ標準のページ遷移よりも高速。
- Next.jsは自動的にコード分割を行うので、各ページはそのページに必要なものだけを読み込みます。
- つまり、ホームページがレンダリングされるときに、他のページのコードが最初に提供されることはないのです。
- このため、ページ数が数百に及ぶ場合でも、ホームページの読み込みが速くなります。
- また、要求されたページのコードだけを読み込むということは、ページが分離されるということでもあります。
- あるページがエラーを起こしても、アプリケーションの残りの部分は動作するのです。
- さらに、Next.jsの本番ビルドでは、ブラウザのビューポートにLinkコンポーネントが表示されると、Next.jsはバックグラウンドで自動的にリンク先ページのコードをプリフェッチします。リンクをクリックしたときには、すでにリンク先ページのコードがバックグラウンドで読み込まれており、ページ遷移はほぼ瞬時におこなわれます。