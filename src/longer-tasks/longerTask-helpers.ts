const Pool = require("pg").Pool;
const pool = new Pool({
  user: process.env.USERNAME,
  host: "localhost",
  database: process.env.DATABASE,
  password: "",
  port: process.env.DBPORT,
});

export function createLongerTasks(time: number) {
  pool.query(
    "INSERT INTO time_estimation (time) VALUES ($1) RETURNING *",
    [time],
    (error: any) => {
      if (error) {
        throw error;
      }
    }
  );
  return "-1";
}
