"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Root;
var _react = _interopRequireDefault(require("react"));
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _Psychology = _interopRequireDefault(require("@mui/icons-material/Psychology"));
var _Search = _interopRequireDefault(require("@mui/icons-material/Search"));
var _GitHub = _interopRequireDefault(require("@mui/icons-material/GitHub"));
var _Link = _interopRequireDefault(require("@mui/icons-material/Link"));
var _Groups = _interopRequireDefault(require("@mui/icons-material/Groups3"));
var _PrecisionManufacturing = _interopRequireDefault(require("@mui/icons-material/PrecisionManufacturing"));
var _SupportAgent = _interopRequireDefault(require("@mui/icons-material/SupportAgent"));
var _Tooltip = _interopRequireDefault(require("@mui/material/Tooltip"));
var _Work = _interopRequireDefault(require("@mui/icons-material/Work"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Root(props) {
  var operator = props.operator;
  var onClick = props.onClick;
  var active = props.active;
  var border_width = operator.border.w;
  var width = operator.size.w;
  var height = operator.size.h;
  var x = operator.position.x;
  var y = operator.position.y;
  var click = function click() {
    return onClick(operator.code);
  };
  var sx_base = {
    position: 'fixed',
    left: x,
    top: y,
    maxWidth: width + 'px',
    maxHeight: height + 'px',
    borderRadius: width + 'px',
    padding: border_width + 'px',
    background: active ? "rgba(8, 156, 163, 1.0)" : "#888",
    zIndex: 888888
  };
  var sx_content = {
    width: width - border_width * 2 + 'px',
    height: height - border_width * 2 + 'px',
    borderRadius: width - border_width * 2 + 'px',
    background: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };
  var val = operator.label.val;
  var type = operator.label.type;
  return /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    sx: sx_base,
    onClick: click
  }, type === 'function' && /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    sx: sx_content
  }, val()), type === 'text' && /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    sx: sx_content
  }, text(val, active)), type === 'icon' && icon(operator, active, val, sx_content));
}
function icon(operator, active, val, sx) {
  if (active) return /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    sx: sx
  }, iconContents(operator, active));
  return /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: val
  }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    sx: sx
  }, iconContents(operator, active)));
}
function iconContents(operator, active) {
  var code = operator.label.code;
  if (!code) return operator.label.val;
  var sx = {
    fontSize: 44,
    color: active ? 'rgba(8, 156, 163, 1.0)' : '#888'
  };
  if ('settings' === code) return /*#__PURE__*/_react["default"].createElement(_Psychology["default"], {
    sx: sx
  });
  if ('search' === code) return /*#__PURE__*/_react["default"].createElement(_Search["default"], {
    sx: sx
  });
  if ('backlogs' === code) return /*#__PURE__*/_react["default"].createElement(_Work["default"], {
    sx: sx
  });
  if ('github' === code) return /*#__PURE__*/_react["default"].createElement(_GitHub["default"], {
    sx: sx
  });
  if ('links' === code) return /*#__PURE__*/_react["default"].createElement(_Link["default"], {
    sx: sx
  });
  if ('customers' === code) return /*#__PURE__*/_react["default"].createElement(_SupportAgent["default"], {
    sx: sx
  });
  if ('meetings' === code) return /*#__PURE__*/_react["default"].createElement(_Groups["default"], {
    sx: sx
  });
  if ('products' === code) return /*#__PURE__*/_react["default"].createElement(_PrecisionManufacturing["default"], {
    sx: sx
  });
  return operator.label.val;
}
function text(text, active) {
  return /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    sx: {
      fontSize: 22,
      color: active ? 'rgba(8, 156, 163, 1.0)' : '#888'
    }
  }, text);
}