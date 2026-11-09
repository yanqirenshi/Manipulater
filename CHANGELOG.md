# 更新履歴

## 0.1.0

MUI と Emotion を peerDependencies に移し、React 19 に対応しました。

### 利用側への影響 (破壊的な変更です)

- `@mui/material`・`@emotion/react`・`@emotion/styled` を、`dependencies` から `peerDependencies` に移しました。**アプリ側で、これらをインストールしてください。**(MUI を使っているアプリは、すでに入っています)
  - これまでは、Manipulater が MUI 5 を同梱していたため、MUI 6 以降を使うアプリには、MUI が 2 つ入り、アプリの `ThemeProvider` が Manipulater に届きませんでした。これからは、アプリの MUI を 1 つだけ使います。
- `@mui/icons-material` を、peerDependencies に足しました。(ソースは使っていましたが、宣言していませんでした)
- peerDependencies の範囲:
  - `react`・`react-dom`: `^18.0.0 || ^19.0.0`(これまでは `^18.2.0`)
  - `@mui/material`・`@mui/icons-material`: `^5.14.20 || ^6.0.0 || ^7.0.0 || ^9.0.0`
  - `@emotion/react`・`@emotion/styled`: `^11.11.0`
- 部品の見た目と機能は、変わりません。コードの変更はありません。

### 動作を確かめた版

`npm pack` したものを、`overrides` や `--legacy-peer-deps` 無しで入れて、`@mui/material` が 1 つだけであることと、描画できることを確かめました。

| React | MUI |
| --- | --- |
| 19.3.1 | 9.5.0 |
| 19.3.1 | 7.3.11 |
| 18.3.1 | 6.5.0 |
| 18.3.1 | 5.18.0 |
