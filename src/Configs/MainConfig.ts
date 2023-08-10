
export const dbUser = {
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
}
