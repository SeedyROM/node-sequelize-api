const options = {
  'migrations-path': '../src/db/migrations',
};

module.exports = {
  development: {
    ...options,
    dialect: 'sqlite',
    storage: './db.development.sqlite',
  },
  test: {
    ...options,
    dialect: 'sqlite',
    storage: ':memory:',
  },
  production: {
    ...options,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: 'postgres',
    use_env_variable: 'DATABASE_URL',
  },
};
