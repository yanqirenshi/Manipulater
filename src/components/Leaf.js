import React from 'react';

import Box from '@mui/material/Box';

export default function Leaf (props) {
    const x = props.x;
    const y = props.y;
    const w = props.w;
    const h = props.h;
    const children = props.children;

    return (
        <Box sx={{
                 position: 'fixed',
                 left: x,
                 top:  y,
                 padding: '5px',
                 borderRadius: '5px',
                 zIndex: 888,
                 background: 'rgba(8, 156, 163, 1.0)',
             }}>

          <Box sx={{
              background: '#fff',
              width: w,
              height: h,
              borderRadius: '4px',
          }}>
            {children}
          </Box>

        </Box>
    );
}
