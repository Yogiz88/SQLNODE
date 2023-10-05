// 1. import pg package
import pg from "pg";

// 2. Get the connection string
const connectionString = process.env.DB_CONNECTION_STRING;

// 3. Create a new pool instance
const pool = new pg.Pool({
  connectionString,
});

// 4. SENDING QUERIES

export async function seedData() {
  // Seeding authors table
  await pool.query(
    "INSERT INTO authors (first_name, last_name) VALUES ('George', 'Orwell'),('J.K.', 'Rowling'),('J.R.R.', 'Tolkien'),('Agatha', 'Christie'),('Stephen', 'King'),('Neil', 'Gaiman');"
  );

  // Seeding books table
  await pool.query(
    "INSERT INTO books (title, published_date) VALUES ('1984', '1949-06-08'),('Harry Potter and the Philosopher''s Stone', '1997-06-26'),('The Fellowship of the Ring', '1954-07-29'),('The Two Towers', '1954-11-11'),('The Return of the King', '1955-10-20'),('And Then There Were None', '1939-11-06'),('The Shining', '1977-01-28'),('It', '1986-09-15'),('Good Omens', '1990-05-01'),('Animal Farm', '1945-08-17');"
  );

  // Seeding author_book table
  await pool.query(
    "INSERT INTO author_book (author_id, book_id) VALUES (1, 1),(1, 10),(2, 2),(3, 3),(3, 4),(3, 5),(4, 6),(5, 7),(5, 8),(6, 9);"
  );

  // 5. Close the connection
  await pool.end();
}
