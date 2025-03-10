import React from 'react';

import Box from '@mui/material/Box';

// https://www.granfairs.com/blog/staff/make-triangle-with-css
// http://apps.eky.hk/css-triangle-generator/ja

export default function Branch (props) {
    const root = props.root;
    const theme_color = props.theme_color;

    const w_center = root.position.x + (root.size.w / 2);

    const x = w_center - (22 / 2) - 3;
    const y = root.position.y - 28;

    return (
        <Box sx={{
            position: 'fixed',
            left: x,
            top:  y,
            borderTop:   `27px solid rgba(${theme_color.r}, ${theme_color.g}, ${theme_color.b}, 1.0)`,
            borderRight: '15px solid transparent',
            borderLeft:  '15px solid transparent',
            zIndex: 888,
        }}>
        </Box>
    );
}
