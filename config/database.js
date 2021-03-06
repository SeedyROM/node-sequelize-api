const globalConfig = {};

module.exports = {
  development: {
    ...globalConfig,
    dialect: 'sqlite',
    storage: './db.development.sqlite',
  },
  test: {
    ...globalConfig,
    dialect: 'sqlite',
    storage: ':memory:',
  },
  production: {
    ...globalConfig,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: 'postgres',
    use_env_variable: 'DATABASE_URL',
  },
};
