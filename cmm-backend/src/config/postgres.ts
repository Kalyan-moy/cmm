import { Pool } from "pg";

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: Number(process.env.POSTGRES_PORT),
});

const connectPostgres = (): void => {
  pool.connect((err) => {
    if (err) {
      console.error("PostgreSQL connection error", err);
    } else {
      console.log("Connected to PostgreSQL");
    }
  });
};

export default connectPostgres;
