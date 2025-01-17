const { Pool } = require("pg");

// Konfigurasi koneksi database
const pool = new Pool({
  user: "admin",
  host: "postgres_database",
  database: "docker-compose",
  password: "mysecretpassword",
  port: 5432,
});

module.exports = pool;
