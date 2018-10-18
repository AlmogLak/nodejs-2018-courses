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
require("./App.css");
var TableRow_1 = require("./TableRow");
var App = (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.joinShopping = _this.joinShopping.bind(_this);
        _this.deleteItem = _this.deleteItem.bind(_this);
        _this.addNewItem = _this.addNewItem.bind(_this);
        _this.cancelJoining = _this.cancelJoining.bind(_this);
        return _this;
    }
    App.prototype.joinShopping = function (item) {
        this.props.joinShopping(item);
    };
    App.prototype.cancelJoining = function (item) {
        this.props.cancelJoining(item);
    };
    App.prototype.deleteItem = function (itemId) {
        this.props.deleteItem(itemId);
    };
    App.prototype.addNewItem = function (event) {
        this.props.addNewItem();
    };
    App.prototype.render = function () {
        var _this = this;
        return (
            <  >
            (<span>logged as: </span>, (<span style={{ color: 'tomato' }}>{this.props.username} </span>
                ,
                    (<button type="button" onClick={this.props.onLogout}>x</button>
                        ,
                            (<h1>Group Shopping</h1>
                                ,
                                    (<hr />
                                        ,
                                            (<button className="add-item-button" type="button" onClick={this.addNewItem}>+ Publish this item!</button>
                                                ,
                                                    (<h3>Current Deals: </h3>
                                                        ,
                                                            <table>
                <tbody>
                {this.props.items.map(function (item) { return (<TableRow_1["default"] key={item.id} item={item} joinShopping={_this.joinShopping} cancelJoining={_this.cancelJoining} deleteItem={_this.deleteItem} isMine={_this.isMine(item)}/>); })}
                </tbody>
            </table>))))))));
         >
        ;
        ;
    };
    App.prototype.isMine = function (item) {
        return this.props.username === item.attuid;
    };
    return App;
}(React.Component));
exports["default"] = App;
