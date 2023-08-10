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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthM = void 0;
const AuthSQL_1 = __importDefault(require("./AuthSQL"));
const bcrypt_1 = __importDefault(require("bcrypt"));
class AuthM {
    register(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const vUserData = data;
            const sPasswordHashed = yield bcrypt_1.default.hash(data.password, 10);
            const sEmailHashed = yield bcrypt_1.default.hash(data.email, 10);
            vUserData.email = sEmailHashed;
            vUserData.password = sPasswordHashed;
            yield AuthSQL_1.default.register(vUserData);
            return {};
        });
    }
    loginByEmail(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const sPasswordHashed = yield bcrypt_1.default.hash(data.password, 10);
            const bPasswordCorrect = bcrypt_1.default.compare(data.password, sPasswordHashed, (err, result) => {
                if (err) {
                    console.error(err);
                }
                else {
                    return true;
                }
            });
            const vRespData = yield AuthSQL_1.default.loginByEmail({
                email: 'TODO EMAILHASHED',
                password: sPasswordHashed
            });
            return vRespData;
        });
    }
    getUsers(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const vRespData = yield AuthSQL_1.default.getUsers(data);
            return vRespData;
        });
    }
}
exports.AuthM = AuthM;
//# sourceMappingURL=AuthM.js.map