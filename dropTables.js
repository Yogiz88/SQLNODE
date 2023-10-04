//import pg package
import pg from "pg";

// Get the connection string
const connectionString = process.env.DB_CONNECTION_STRING;

// Create a new pool instance
const pool = new pg.Pool({
  connectionString,
});

// Send Query
// await pool.query("DROP Table authors");

// await pool.query("DROP Table books");

await pool.query("DROP Table author_book");
// console.log("Successful connection!");

// Close the connection
await pool.end();
