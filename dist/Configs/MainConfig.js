"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbUser = void 0;
exports.dbUser = {
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'dbUser',
        password: 'wryoiuiy',
        database: 'user_db',
        decimalNumbers: true,
        dateStrings: true,
        port: 3306,
    },
    pool: { min: 0, max: 10 },
    acquireConnectionTimeout: 60000,
};
//# sourceMappingURL=MainConfig.js.map