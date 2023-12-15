import * as React from 'react';

import Root from './Operators/Root.js';
import Branch from './Operators/Branch.js';

import operator from '../js/operator.js';

export default function Manipulater (props) {
    const actions     = props.actions;
    const operators   = props.operators;
    const window_size = props.window_size;
    const leafs = props.leafs;

    React.useEffect(()=> {
        if (!window_size)
            return;

        if (!operators.initialized)
            actions.operator.change(
                operator.initialize(window_size, operators));
    }, [window_size, actions.operator, operators]);

    if (!window_size) return null;

    const clickRoot = (code)=>
          actions.operator.change(operator.clickedRoot(code, operators));

    const selected_operator = operator.selectedOperator(operators);

    return (
        <>
          {selected_operator &&
           <>
             <Branch root={selected_operator}/>
             {leafs(selected_operator)}
           </>}

          {operators.list.map(operator=> {
              return (
                  <Root key={operator.code}
                        operator={operator}
                        active={operator.code===operators.active}
                        actions={actions}
                        onClick={clickRoot}/>
              );
          })}
        </>
    );
}
