//import pg package
import pg from "pg";

// Get the connection string
const connectionString = process.env.DB_CONNECTION_STRING;

// Create a new pool instance
const pool = new pg.Pool({
  connectionString,
});

// Send Query
// const data = await pool.query("SELECT * FROM authors;");
// const rows = data.rows;
console.log("Successful connection!");

// Close the connection
await pool.end();
