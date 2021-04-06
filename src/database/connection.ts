import knex from 'knex';
import databaseConfig from '../config/database';

const db = knex({
  client: 'postgres',
  connection: {
    // host: databaseConfig.host,
    // database: databaseConfig.database,
    // user: databaseConfig.user,
    // password: databaseConfig.password,
    host: "localhost",
    database: "teste02",
    user: "postgres",
    password: "raijin75716",
  },
  useNullAsDefault: true,
});

export default db;