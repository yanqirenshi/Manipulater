import * as React from 'react';

import Box from '@mui/material/Box';

export default function Root (props) {
    const operator = props.operator;
    const onClick  = props.onClick;
    const active   = props.active;
    const border_width = operator.border.w;
    const width        = operator.size.w;
    const height       = operator.size.h;
    const x            = operator.position.x;
    const y            = operator.position.y;

    const click = ()=> onClick(operator.code);

    const sx_base = {
        position: 'fixed',
        left: x,
        top:  y,
        maxWidth: width + 'px',
        maxHeight: height + 'px',
        borderRadius: width + 'px',
        padding: border_width + 'px',
        background: active ? "rgba(8, 156, 163, 1.0)" : "rgba(8, 156, 163, 0.2)",
        zIndex:888,
    };

    const sx_content = {
        width: (width - border_width * 2) + 'px',
        height: (height - border_width * 2) + 'px',
        borderRadius: (width - border_width * 2) + 'px',
        background: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const val = operator.label.val;

    console.log('============================');
    console.log(val);
    console.log(typeof val==='function');
    console.log(typeof val!=='function');
    console.log(operator);

    return (
        <Box sx={sx_base}
             onClick={click}>
          <Box sx={sx_content}>
            {typeof val==='function' && val()}
            {typeof val!=='function' && val}
          </Box>
        </Box>
    );
}
