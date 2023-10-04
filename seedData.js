//import pg package
import pg from "pg";

// Get the connection string
const connectionString = process.env.DB_CONNECTION_STRING;

// Create a new pool instance
const pool = new pg.Pool({
  connectionString,
});

// Seeding Authors table
const query = {
  text: "INSERT INTO authors (first_name, last_name) VALUES 
      ('George', 'Orwell'),
      ('J.K.', 'Rowling'),
      ('J.R.R.', 'Tolkien'),
      ('Agatha', 'Christie'),
      ('Stephen', 'King'),
      ('Neil', 'Gaiman');",
};

// Send Query
await pool.query(query);

// Creating Books table
const queryBooks = {
  text: "CREATE TABLE IF NOT EXISTS books (id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,title VARCHAR(255) NOT NULL, published_date DATE);",
};

// Send Query
await pool.query(queryBooks);

// Creating author_book table
const queryAutBook = {
  text: "CREATE TABLE IF NOT EXISTS author_book (author_id INT REFERENCES authors(id), book_id INT REFERENCES books(id),PRIMARY KEY (author_id, book_id));",
};

// Send Query
await pool.query(queryAutBook);

// console.log("Successful connection!");

// Close the connection
await pool.end();
