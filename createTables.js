//import pg package
import pg from "pg";

// Get the connection string
const connectionString = process.env.DB_CONNECTION_STRING;

// Create a new pool instance
const pool = new pg.Pool({
  connectionString,
});

const query = {
  text: "CREATE TABLE authors ( id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, first_name VARCHAR(255) NOT NULL, last_name VARCHAR(255) NOT NULL );"
};
// Send Query
await pool.query(query);

// console.log("Successful connection!");

// Close the connection
await pool.end();
