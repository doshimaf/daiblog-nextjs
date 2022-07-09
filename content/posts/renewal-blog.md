---
  title: 個人ブログをリニューアルしました。
  published: 2022-07-09
---

2019年から始めて、書いたり消したり、サイト丸ごとリセットしたりと紆余曲折あった個人ブログを大幅にリニューアルしました。

##　リニューアルの目的

もともとWordPressで構築していたのですが、もっと気軽にアウトプットしたいなと思っており、作るハードルが少しくらい高くても書くハードルを下げるために、Markdownで書けて、WordPress本体やテーマやプラグイン、セキュリティ対策など、気にすることを減らせるJamstackなブログにしています。

正直なところ、イマドキのフロントエンドっぽいNext.jsやJamstackってカッコよさげ！使ってみたい！という思いが７割です。

今まではWordPressが優秀なこともあり、アイキャッチ画像を作って設定してみたり、デザインを工夫したりと記事を書く以外のことも頑張ってましたが、ちょっとめんどくさいなと思ってたので、

- アイキャッチ画像なし
- 装飾は最低限
- 記事は備忘録とかメモに近い

という感じで、運営していく予定です。

##　Jamstackブログの構成

ブログは下記で構築しています。

- クライアントサイド：Next.js
- コードホスティング：GitHub
- ビルド・ホスティング：Vercel

Next.jsに触れたのも、Vercelというホスティングサービスに触れたのも初めてで、勢いと楽しさだけで作ったので、課題は山積みな感じですが、今まで通りマイペースにコツコツ作り込んでいこうと思います。

参考までに、今回Next.jsでJamstackブログを作る際に参考にさせていただいた記事を載っけておきます。

機能追加に合わせて、都度更新していきます。

### 全体の構築

https://gotohayato.com/content/517/

###　独自ドメインのサブドメイン設定

https://blog.okaryo.io/20220320-vercel-deploy-with-custom-domain

### Googleフォント読み込み

https://qiita.com/dosukoi_man/items/4624de0275a53ba648d3

###　Google Analytics

https://hukurouo.com/articles/2021-02-07-gtag

##　おわりに

まだまだ本格的なブログとしては未完成なところが多く、やることがたくさんありますが、楽しみながらこつこつ学んでいけたらなと思っています。

記事も僕自身の負担にならない程度にわかりやすく書けるよう努力していくので、今後ともよろしくお願いいたします。