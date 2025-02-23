import React from 'react';

import Box from '@mui/material/Box';

export default function Leaf (props) {
    const x = props.x;
    const y = props.y;
    const w = props.w;
    const h = props.h;
    const children = props.children;
    const theme_color = props.theme_color || { r: 8, g: 156, b: 163 };;

    return (
        <Box sx={{
                 position: 'fixed',
                 left: x,
                 top:  y,
                 padding: '5px',
                 borderRadius: '5px',
                 zIndex: 888,
                 background: `rgba(${theme_color.r}, ${theme_color.g}, ${theme_color.b}, 1.0)`,
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
