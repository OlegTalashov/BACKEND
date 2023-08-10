"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbUser = void 0;
const config = require("./Configs/MainConfig");
const knex_1 = require("knex");
exports.dbUser = (0, knex_1.knex)(config.dbUser);
//# sourceMappingURL=db_connections.js.map