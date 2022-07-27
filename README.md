# daiblog-next.js

下記で作ったJamstackな個人ブログ。

- クライアントサイド：Next.js
- リポジトリ：GitHub
- ホスティング：Vercel

## MEMO

### 投稿日と更新日を両方表示させる

公式ドキュメント（https://nextjs.org/learn/basics/dynamic-routes/polishing-post-page ）を参考に、date.js で date-fns を使って投稿日（publish）の書式を設定。

Dateコンポーネントを投稿日に、UpDateコンポーネントを更新日として書式を設定するため、date.jsの処理を default export（デフォルトエクスポート）から named export（名前付きエクスポート）に書き換える。

名前付きエクスポートはモジュールごとに複数持てるけど、デフォルトエクスポートはファイル1つに対して1つだけしか持てないので。

```js
/*
  before
*/
import { parseISO, format } from 'date-fns';

// default export
export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}
```
```js
/*
  after
*/
import { parseISO, format } from 'date-fns';

// named export
function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'yyyy.MM.dd')}</time>;
}

function UpDate({ dateString }) {
  const update = parseISO(dateString);
  return <time dateTime={dateString}>{format(update, 'yyyy.MM.dd')}</time>;
}

export {Date, UpDate};
```

エクスポート方法を名前付きエクスポートに変更したので、[id].js や index.js の import も書き換える。

```js
// before
import Date from '../../components/date';
```
```js
// after
import { Date, UpDate } from '../../components/date';
```

React超初心者だったため、はじめコンポーネント名を upDate のように小文字から始めておりデベロッパーツールのコンソールに下記のエラーが表示されて正常に動作しなかった。

```
Warning: The tag <upDate> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.
```

「このブラウザでは `<upDate>` タグは認識されません。Reactコンポーネントをレンダリングする場合は、コンポーネント名を大文字で始めます。」とのこと。

小文字でコンポーネント名を定義すると、`<div>`　のような組み込みのコンポーネントとして参照され 'div' のような文字列に変換されるため、ブラウザに認識されない。

そのため、ユーザー定義のコンポーネント名は、大文字で始める必要がある。

### シンタックスハイライトの導入

下記の記事を参考に導入した。

- https://frendly.dev/posts/using-prism-js-in-next-js

.babelrc.jsファイルの対象言語やカラーテーマ、プラグインは必要に応じて設定。

全て設定したものの、ハイライトが適応されない。

他の同様の方法でシンタックスハイライトを導入しているブログのGithubに公開されているコードを参考に検証する。

僕の場合、lib/posts.js で使用しているremark-htmlの下記部分を編集することで解決した。

```js
// before
// ...

const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
const contentHtml = processedContent.toString();

// ...
```

```js
// after
// ...

const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(matterResult.content);
const contentHtml = processedContent.toString();

// ...
```

remark-htmlのsanitizeオプションをfalseにすることで、HTML出力時にサニタイジング（エスケープ処理）されないように設定。

XSS対策上、ユーザーがフォームやコメントなどの文字入力できる場合にはエスケープ処理をしておく必要があるが、
現状そのような機能は導入しない静的サイトなのでエスケープ処理せず、正常にハイライトされるようにした。

## ToDo

- タグ別の記事一覧ページの作成
- ウィジェットの作成
- フィードの生成
- サイトマップの生成
- メタタグの追加
- OGP タグの追加
- PWA 対応
