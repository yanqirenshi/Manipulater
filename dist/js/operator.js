"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var React = _interopRequireWildcard(require("react"));
var _beach = _interopRequireDefault(require("@yanqirenshi/beach"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var util = new _beach["default"]();
var Operators = /*#__PURE__*/function () {
  function Operators() {
    _classCallCheck(this, Operators);
    this.window_size = {
      w: null,
      h: null
    };
  }
  _createClass(Operators, [{
    key: "initialize",
    value: function initialize(window_size, operators) {
      var new_operators = util.cp(operators);
      new_operators.list = operators.list;
      new_operators.initialized = util.ts();
      new_operators.list = operator.calRootPos(window_size.w, window_size.h, operators.list);
      return new_operators;
    }
    //
    //              window center
    //                    :                    window height
    //   |<------- operators width ------->|      |
    //                    :                       |
    //   +-----+       +-----+       +-----+      |
    //   | R1  |<--s-->| R2  |<--s-->| R3  |      |
    //   +-----+       +-----+       +-----+  -   |
    //                    :                   |   |
    //                    :                   s   |
    //   |<--->|       |<--->|       |<--->|  |   |
    //     w1            w2            w3     -   -
    //
  }, {
    key: "calRootPos",
    value: function calRootPos(w, h) {
      var operators = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      this.window_size.w = w;
      this.window_size.h = h;
      var size = operators.length;
      if (size === 0) return [];

      // Root 間の Space は全部固定
      var s = 11;

      // operators width を計算する。
      var operators_width = operators.reduce(function (w, operator, i) {
        return w + operator.size.w;
      }, (size - 1) * s);

      // operators の 開始 x を計算する。
      var start_x = w / 2 - operators_width / 2;

      // operator 毎 の position を計算する。
      return operators.map(function (operator) {
        var new_operator = util.cp(operator);

        // cal x
        new_operator.position.x = start_x;
        start_x += new_operator.size.w + s;

        // cal y
        new_operator.position.y = h - new_operator.size.h - s;
        return new_operator;
      });
    }
    // +------------------+
    // | reaf             |
    // |  ............... |
    // |  ............... |
    // |  ............... |
    // +------------------+
    //         V branch
    //     +------+
    //     | Root |
    //     +------+
  }, {
    key: "calBranchPos",
    value: function calBranchPos() {}
  }, {
    key: "calReefPos",
    value: function calReefPos() {}
    // ////////////////////////////////////////////////////////////////
    // Getter, Selector
    // ////////////////////////////////////////////////////////////////
  }, {
    key: "selectedOperator",
    value: function selectedOperator(operators) {
      var active = operators.active;
      if (active === null) return null;
      return operators.list.find(function (operator) {
        return operator.code === active;
      }) || null;
    }
    // ////////////////////////////////////////////////////////////////
    // Update state
    // ////////////////////////////////////////////////////////////////
  }, {
    key: "clickedRoot",
    value: function clickedRoot(code, operators) {
      var new_operators = util.cp(operators);
      new_operators.active = new_operators.active === code ? null : code;
      return new_operators;
    }
  }]);
  return Operators;
}();
var operator = new Operators();
var _default = exports["default"] = operator;