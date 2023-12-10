## MenuBook

サイドメニュー的な。


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
