## Manipulater

画面の端に並ぶ、丸いボタン (ドック) と、ボタンを押したときに開く吹き出しの部品です。

### インストール

```bash
npm install @yanqirenshi/manipulater
```

次のパッケージは peerDependencies です。アプリ側でインストールしてください。(アプリが使っている MUI をそのまま使うため、Manipulater は MUI を同梱しません)

| パッケージ | 範囲 | 動作を確かめた版 |
| --- | --- | --- |
| `react` / `react-dom` | `^18.0.0 || ^19.0.0` | 18.3.1 / 19.3.1 |
| `@mui/material` / `@mui/icons-material` | `^5.14.20 || ^6.0.0 || ^7.0.0 || ^9.0.0` | 5.18.0 / 6.5.0 / 7.3.11 / 9.5.0 |
| `@emotion/react` / `@emotion/styled` | `^11.11.0` | 11.14 |

```bash
npm install react react-dom @mui/material @mui/icons-material @emotion/react @emotion/styled
```

MUI を使っているアプリは、すでに入っているので、追加は要りません。
アプリの `ThemeProvider` のテーマが、そのまま使われます。


### Usage

```
<Operators operators={operators}
           window_size={window_size}
           actions={actions}
           leafs={root=> <Leafs root={root}/>}/>
```


```
import React from 'react';

import Github from './operators/Githubjs';
import Links from './operators/Links.js';
import Search from './operators/Search.js';
import Other from './operators/Other.js';

export default function Leafs (props) {
    const root = props.root;

    if ('search'===root.code)
        return <Search root={root}/>;

    if ('links'===root.code)
        return <Links root={root}/>;

    if ('github'===root.code)
        return <Github root={root}/>;

    return <Other root={root}/>;
}
```
