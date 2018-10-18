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
var LoginState = (function () {
    function LoginState() {
        this.username = '';
    }
    return LoginState;
}());
var Login = (function (_super) {
    __extends(Login, _super);
    function Login(props) {
        var _this = _super.call(this, props) || this;
        _this.state = new LoginState();
        _this.onLogin = _this.onLogin.bind(_this);
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }
    Login.prototype.onChange = function (event) {
        this.setState({
            username: event.currentTarget.value
        });
    };
    Login.prototype.onLogin = function () {
        if (this.state.username) {
            // validate...
            this.props.onLogin(this.state.username);
        }
    };
    Login.prototype.render = function () {
        return (
            <  >
            <h1>Login</h1>
                ,
                    <hr />
                        ,
                            <span>Username:  </span>
                                ,
                                    <input type="text" value={this.state.username} onChange={this.onChange}/>
                                        ,
                                            <button type="button" onClick={this.onLogin}>OK</button>);
         >
        ;
        ;
    };
    return Login;
}(React.Component));
exports["default"] = Login;
