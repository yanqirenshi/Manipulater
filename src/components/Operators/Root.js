import React from 'react';

import Box from '@mui/material/Box';
import S from '@mui/material/Typography';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SearchIcon from '@mui/icons-material/Search';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import Groups3Icon from '@mui/icons-material/Groups3';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Tooltip from '@mui/material/Tooltip';
import WorkIcon from '@mui/icons-material/Work';

export default function Root (props) {
    const operator = props.operator;
    const onClick  = props.onClick;
    const active   = props.active;
    const theme_color = props.theme_color;

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
        background: active ? `rgba(${theme_color.r}, ${theme_color.g}, ${theme_color.b}, 1.0)` : "#888",
        zIndex: 888,
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
    const type = operator.label.type;
    const sx = operator.label.sx;

    return (
        <Box sx={sx_base}
             onClick={click}>

          {type==='function' &&
           <Box sx={sx_content}>
             {val()}
           </Box>}

          {type==='text' &&
           <Box sx={sx_content}>
             {text(val, active, sx, theme_color)}
           </Box>}

          {type==='icon'
           && icon(operator, active, val, sx_content, theme_color)}

        </Box>
    );
}

function icon (operator, active, val, sx, theme_color) {
    if (active)
        return (
            <Box sx={sx}>
              {iconContents(operator, active, theme_color)}
            </Box>
        );

    return (
        <Tooltip title={val}>
          <Box sx={sx}>
            {iconContents(operator, active, theme_color)}
          </Box>
        </Tooltip>
    );
}

function iconContents (operator, active, theme_color) {
    const code = operator.label.code;

    if (!code)
        return operator.label.val;

    const sx = {
        fontSize:44,
        color: active ? `rgba(${theme_color.r}, ${theme_color.g}, ${theme_color.b}, 1.0)` : '#888',
    };

    if ('settings'===code)
        return <PsychologyIcon sx={sx}/>;

    if ('search'===code)
        return <SearchIcon sx={sx}/>;

    if ('backlogs'===code)
        return <WorkIcon sx={sx}/>;

    if ('github'===code)
        return <GitHubIcon sx={sx}/>;

    if ('links'===code)
        return <LinkIcon sx={sx}/>;

    if ('customers'===code)
        return <SupportAgentIcon sx={sx}/>;

    if ('meetings'===code)
        return <Groups3Icon sx={sx}/>;

    if ('products'===code)
        return <PrecisionManufacturingIcon sx={sx}/>;

    return operator.label.val;
}

function text (text, active, sx={}, theme_color) {
    return (
        <S sx={{
            ...{
                fontSize:22,
                color: active ? `rgba(${theme_color.r}, ${theme_color.g}, ${theme_color.b}, 1.0)` : '#888',
            },
            ...sx,
        }}>
          {text}
        </S>
    );
}
