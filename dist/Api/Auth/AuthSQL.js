"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_connections_1 = require("../../Common/System/db_connections");
class AuthSQL {
    register(data) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = {};
            try {
                yield (0, db_connections_1.dbUser)('users').insert(data);
            }
            catch (e) {
                console.log(e);
            }
            return res;
        });
    }
    loginByEmail(data) {
        return __awaiter(this, void 0, void 0, function* () {
            let vUserInfo = {};
            try {
                vUserInfo = yield (0, db_connections_1.dbUser)('users')
                    .select()
                    .where('email', data.email)
                    .andWhere('password', data.password)
                    .first();
            }
            catch (e) {
                console.log(e);
            }
            return {
                user: vUserInfo
            };
        });
    }
    getUsers(data) {
        return __awaiter(this, void 0, void 0, function* () {
            let res;
            let avUsers = [];
            try {
                avUsers = yield (0, db_connections_1.dbUser)('users')
                    .select();
            }
            catch (e) {
                console.log(e);
            }
            res = {
                users: avUsers,
            };
            return res;
        });
    }
}
const Auth = new AuthSQL;
exports.default = Auth;
//# sourceMappingURL=AuthSQL.js.map