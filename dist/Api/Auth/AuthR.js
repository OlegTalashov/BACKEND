"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthR = void 0;
var AuthR;
(function (AuthR) {
    let register;
    (function (register) {
        register.route = '/auth/register';
    })(register = AuthR.register || (AuthR.register = {}));
    let getUsers;
    (function (getUsers) {
        getUsers.route = '/auth/get-users';
    })(getUsers = AuthR.getUsers || (AuthR.getUsers = {}));
    let loginByEmail;
    (function (loginByEmail) {
        loginByEmail.route = '/auth/login-by-email';
    })(loginByEmail = AuthR.loginByEmail || (AuthR.loginByEmail = {}));
})(AuthR || (exports.AuthR = AuthR = {}));
//# sourceMappingURL=AuthR.js.map