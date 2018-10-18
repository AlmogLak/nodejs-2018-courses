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
require("./TableRow.css");
var Loader_1 = require("./Loader");
var TableRow = (function (_super) {
    __extends(TableRow, _super);
    function TableRow(props) {
        var _this = _super.call(this, props) || this;
        _this.onJoinShopping = _this.onJoinShopping.bind(_this);
        _this.removeItem = _this.removeItem.bind(_this);
        _this.getControls = _this.getControls.bind(_this);
        _this.onCancelJoining = _this.onCancelJoining.bind(_this);
        return _this;
    }
    TableRow.prototype.onJoinShopping = function (event) {
        if (this.props.item.id !== undefined) {
            this.props.joinShopping(this.props.item);
        }
    };
    TableRow.prototype.onCancelJoining = function (event) {
        if (this.props.item.id !== undefined) {
            this.props.cancelJoining(this.props.item);
        }
    };
    TableRow.prototype.removeItem = function (event) {
        console.log('removing itemId ', this.props.item.id);
        if (this.props.item.id !== undefined) {
            this.props.deleteItem(this.props.item.id);
        }
    };
    TableRow.prototype.render = function () {
        return (<tr>
                <td><img className="item-image" src={this.props.item.imageUrl}/></td>
                <td>
                    <a className="ellipsis link" target="_blank" href={this.props.item.url} title={this.props.item.name}>{this.props.item.name}
                    </a>
                    <Loader_1["default"] value={this.props.item.buyers && this.props.item.buyers.length} target={this.props.item.targetNumOfBuyers}/>
                </td>
                <td className="price">{this.props.item.currency} {this.props.item.price}</td>
                {this.getControls()}
            </tr>);
    };
    TableRow.prototype.getControls = function () {
        return this.props.isMine ?
            (<td><button type="button" onClick={this.removeItem}>🗑️</button></td>) :
            (<td>
                <button type="button" onClick={this.onCancelJoining}>-</button>
                <button type="button" onClick={this.onJoinShopping}>+</button>
            </td>);
    };
    return TableRow;
}(React.Component));
exports["default"] = TableRow;
