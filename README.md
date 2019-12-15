# eslint-plugin-detect-haiku

俳句を禁止するプラグイン

これは [クソアプリ Advent Calendar 2019](https://qiita.com/advent-calendar/2019/kuso-app)の 19 日目の記事である、[タイトル未定](https://qiita.com/sadnessOjisan/98619eaaef1da8d6545a) のために開発されたものです。

## 導入

eslint とプラグインの導入

```zsh
$ yarn add -D eslint eslint-plugin-detect-haiku
```

設定ファイル(eslintrc など)を編集

```js
module.exports = {
  // 中略
  plugins: ["detect-haiku"],
  rules: {
    "detect-haiku/forbid_haiku": 2
  }
};
```

## 開発

モジュールインストール

```zsh
$ yarn install
```

実行

```zsh
$ yarn run start
```

公開前にドライラン

```zsh
$ tar -tf $(npm pack)
```

npm に公開

```zsh
$ npm publish
```
