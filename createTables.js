// 1. import pg package
import pg from "pg";

// 2. Get the connection string
const connectionString = process.env.DB_CONNECTION_STRING;

// 3. Create a new pool instance
const pool = new pg.Pool({
  connectionString,
});

// 4. SENDING QUERIES

// Creating authors table
await pool.query(
  "CREATE TABLE IF NOT EXISTS authors ( id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, first_name VARCHAR(255) NOT NULL, last_name VARCHAR(255) NOT NULL );"
);

// Creating books table
await pool.query(
  "CREATE TABLE IF NOT EXISTS books (id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,title VARCHAR(255) NOT NULL, published_date DATE);"
);

// Creating author_book table
await pool.query(
  "CREATE TABLE IF NOT EXISTS author_book (author_id INT REFERENCES authors(id), book_id INT REFERENCES books(id),PRIMARY KEY (author_id, book_id));"
);

// 5. Close the connection
await pool.end();
