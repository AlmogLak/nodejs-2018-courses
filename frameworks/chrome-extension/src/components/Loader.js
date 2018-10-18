"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var Loader = (function (_super) {
    __extends(Loader, _super);
    function Loader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Loader.prototype.render = function () {
        var percentage = (Math.min(this.props.value / this.props.target * 100, 100)).toFixed(2);
        return (<div style={{ position: 'relative', height: '10px' }}>
                <span style={{
            position: 'absolute',
            height: '10px',
            width: '100%',
            background: '#f1de7c'
        }}/>
                <span style={{
            position: 'absolute',
            height: '10px',
            width: percentage + '%',
            background: '#9a84af'
        }}/>
            </div>);
    };
    return Loader;
}(React.Component));
exports["default"] = Loader;
