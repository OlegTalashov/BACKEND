"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.AuthRouter = exports.router = void 0;
const express = __importStar(require("express"));
const AuthR_1 = require("./AuthR");
const AuthM_1 = require("./AuthM");
exports.router = express.Router();
exports.AuthRouter = exports.router;
/**
 * API Авторизации
 */
class Auth {
    constructor() {
        this.AuthM = new AuthM_1.AuthM;
    }
}
exports.router.post(AuthR_1.AuthR.register.route, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ctrl = new Auth;
    const request = req.body;
    const response = yield ctrl.AuthM.register(request);
    res.status(201).json(response);
}));
exports.router.post(AuthR_1.AuthR.loginByEmail.route, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ctrl = new Auth;
    const request = req.body;
    const response = yield ctrl.AuthM.loginByEmail(request);
    res.status(201).json(response);
}));
exports.router.post(AuthR_1.AuthR.getUsers.route, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ctrl = new Auth;
    const request = req.body;
    const response = yield ctrl.AuthM.getUsers(request);
    res.status(201).json(response);
}));
//# sourceMappingURL=Auth.js.map