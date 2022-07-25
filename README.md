# daiblog-next.js

下記で作ったJamstackな個人ブログ。

- クライアントサイド：Next.js
- リポジトリ：GitHub
- ホスティング：Vercel

## MEMO

### 投稿日と更新日を両方表示させる

公式ドキュメント（'https://nextjs.org/learn/basics/dynamic-routes/polishing-post-page'(https://nextjs.org/learn/basics/dynamic-routes/polishing-post-page)）を参考に、date.js で date-fns を使って投稿日（publish）の書式を設定。

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

React超初心者だったため、はじめコンポーネント名　upDate のように小文字から始めておりデベロッパーツールのコンソールに下記のエラーが表示されて正常に動作しなかった。

```
Warning: The tag <upDate> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.
```

「このブラウザでは <upDate> タグは認識されません。Reactコンポーネントをレンダリングする場合は、コンポーネント名を大文字で始めます。」とのこと。

小文字でコンポーネント名を定義すると、<div>　のような組み込みのコンポーネントとして参照され 'div' のような文字列に変換されるため、ブラウザに認識されない。

そのため、ユーザー定義のコンポーネント名は、大文字で始める必要がある。


## ToDo

- タグ別の記事一覧ページの作成
- シンタックスハイライト
- ウィジェットの作成
- フィードの生成
- サイトマップの生成
- メタタグの追加
- OGP タグの追加
- PWA 対応