
export const MYSQL_CONFIG = {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DATABASE,
    charset: "utf8mb4",
    port: process.env.DATABASE_PORT || 13306,
};

export const HTTP_CONFIG = {
    port: process.env.HTTP_PORT || 8088,
    host: process.env.HTTP_HOST || 'localhost',
    prefix: process.env.HTTP_PREFIX || '/api'
}