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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var React = require("react");
var App_1 = require("../components/App");
var App_container_state_1 = require("./App.container.state");
var crawler_1 = require("../crawler");
var Login_1 = require("../components/Login");
var baseUrl = 'http://localhost:3000/api/items';
var CACHE_KEY = 'NODEJS_COURSE_GROUP_SHOPPING_ITEMS';
var USERNAME = 'NODEJS_COURSE_GROUP_SHOPPING_NAME';
var X_AUTH = 'X-AUTH';
var headers = new Headers({ 'Content-Type': 'application/json' });
var AppContainer = (function (_super) {
    __extends(AppContainer, _super);
    function AppContainer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = new App_container_state_1.AppContainerState();
        _this.joinShopping = _this.joinShopping.bind(_this);
        _this.deleteItem = _this.deleteItem.bind(_this);
        _this.addNewItem = _this.addNewItem.bind(_this);
        _this.onLogin = _this.onLogin.bind(_this);
        _this.onLogout = _this.onLogout.bind(_this);
        _this.cancelJoining = _this.cancelJoining.bind(_this);
        return _this;
    }
    AppContainer.prototype.onLogin = function (username) {
        var _this = this;
        this.setState({ username: username }, function () {
            window.localStorage.setItem(USERNAME, username);
            headers.append(X_AUTH, username);
            _this.getItems();
        });
    };
    AppContainer.prototype.onLogout = function () {
        this.setState({ username: '' }, function () {
            headers["delete"](X_AUTH);
            window.localStorage.removeItem(USERNAME);
        });
    };
    AppContainer.prototype.addNewItem = function () {
        var _this = this;
        crawler_1.getItemFromPage()
            .then(function (item) {
            return __assign({}, item, { targetNumOfBuyers: 10, attuid: _this.state.username, buyers: [] });
        })
            .then(function (item) { return _this.createGroupShopping(item); })["catch"](function (err) {
            /* tslint:disable */
            console.log(err);
            // this.setState({
            //     err
            // });
        });
    };
    AppContainer.prototype.createGroupShopping = function (item) {
        var _this = this;
        return fetch(baseUrl, { method: 'POST', headers: headers, body: JSON.stringify(item) })
            .then(function (res) { return _this.handleHTTPErrors(res); })
            .then(function (res) { return res.json(); })
            .then(function (createdItem) {
            _this.setState((function (prevState) { return ({
                err: '',
                items: prevState.items.concat(createdItem),
                loading: false
            }); }));
        });
    };
    AppContainer.prototype.deleteItem = function (itemId) {
        var _this = this;
        console.log('deleting...', itemId);
        fetch(baseUrl + "/" + itemId, { headers: headers, method: 'DELETE' })
            .then(function (res) { return _this.handleHTTPErrors(res); })
            .then(function (res) {
            _this.setState(function (prevState) { return ({
                err: '',
                items: prevState.items.filter(function (item) { return item.id !== itemId; }),
                loading: false
            }); }, function () {
                _this.updateItemsCache(_this.state.items);
            });
        });
    };
    AppContainer.prototype.joinShopping = function (item) {
        var _this = this;
        if (item.buyers.includes(this.state.username)) {
            return;
        }
        var buyers = item.buyers.concat(this.state.username);
        var updateItem = __assign({}, item, { buyers: buyers });
        fetch(baseUrl + "/" + item.id, { method: 'PUT', headers: headers })
            .then(function (res) { return _this.handleHTTPErrors(res); })
            .then(function (res) {
            _this.setState(function (prevState) { return ({
                err: '',
                items: prevState.items.map(function (oldItem) {
                    if (oldItem.id === item.id) {
                        return updateItem;
                    }
                    return oldItem;
                }),
                loading: false
            }); }, function () {
                _this.updateItemsCache(_this.state.items);
            });
        });
    };
    AppContainer.prototype.cancelJoining = function (item) {
        var _this = this;
        if (!item.buyers.includes(this.state.username)) {
            return;
        }
        var buyers = item.buyers.filter(function (buyer) { return buyer !== _this.state.username; });
        var updateItem = __assign({}, item, { buyers: buyers });
        fetch(baseUrl + "/" + item.id, { method: 'DELETE', headers: headers })
            .then(function (res) { return _this.handleHTTPErrors(res); })
            .then(function (res) {
            _this.setState(function (prevState) { return ({
                err: '',
                items: prevState.items.map(function (oldItem) {
                    if (oldItem.id === item.id) {
                        return updateItem;
                    }
                    return oldItem;
                }),
                loading: false
            }); }, function () {
                _this.updateItemsCache(_this.state.items);
            });
        });
    };
    AppContainer.prototype.getItems = function () {
        var _this = this;
        fetch(baseUrl, { headers: headers })
            .then(function (res) { return _this.handleHTTPErrors(res); })
            .then(function (res) { return res.json(); })
            .then(function (items) {
            _this.setState({
                items: items,
                loading: false
            }, function () {
                _this.updateItemsCache(_this.state.items);
            });
        })["catch"](function (err) {
            console.error('Something went wrong here...', err);
            window.localStorage.removeItem(CACHE_KEY);
            _this.setState({
                loading: false,
                err: err
            });
        });
    };
    AppContainer.prototype.componentDidMount = function () {
        var _this = this;
        // Get websocket options
        chrome.storage.sync.get({
            webSocket: false
        }, function (items) {
            _this.setState({ webSocket: items.webSocket });
        });
        // Check if user logged in
        var username = window.localStorage.getItem(USERNAME);
        if (!username) {
            console.log('Please login...');
            this.onLogout();
            return;
        }
        console.log('User already logged in!');
        this.setState({
            username: username
        });
        headers.append(X_AUTH, username);
        // load items from cache
        var cachedItems = window.localStorage.getItem(CACHE_KEY);
        if (cachedItems) {
            this.setState({
                items: JSON.parse(cachedItems),
                loading: false
            });
        }
        else {
            this.setState({ loading: true });
        }
        this.getItems();
    };
    AppContainer.prototype.handleHTTPErrors = function (res) {
        if (res.status === 401) {
            window.localStorage.removeItem(CACHE_KEY);
            this.setState({
                loading: false,
                username: ''
            });
            return Promise.reject('Please login...');
            ;
        }
        if (res.status >= 400) {
            return Promise.reject(res);
        }
        return Promise.resolve(res);
    };
    AppContainer.prototype.updateItemsCache = function (items) {
        window.localStorage.setItem(CACHE_KEY, JSON.stringify(items));
    };
    AppContainer.prototype.render = function () {
        return !this.state.username ?
            <Login_1["default"] onLogin={this.onLogin}/> :
            this.state.loading ?
                <div>Loading...</div> :
                this.state.err ?
                    <div style={{ fontSize: '30px' }}>We messed up...🤷</div> :
                    <App_1["default"] username={this.state.username} onLogout={this.onLogout} items={this.state.items} joinShopping={this.joinShopping} cancelJoining={this.cancelJoining} addNewItem={this.addNewItem} deleteItem={this.deleteItem}/>;
    };
    return AppContainer;
}(React.Component));
exports["default"] = AppContainer;
