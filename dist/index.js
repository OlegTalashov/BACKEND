"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
// import cors from 'cors';
const Auth_1 = require("./Api/Auth/Auth");
const app = (0, express_1.default)();
const secret = 'lalalalala';
app.get('/', (_, res) => {
    res.send('Hello, fuck!');
});
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)(secret));
// app.use(cors({
//     credentials: true, // используем кукис
//     origin: 'http://localhost:3000', // адрес фр
// }));
app.use(Auth_1.AuthRouter);
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
//# sourceMappingURL=index.js.map