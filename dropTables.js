// 1. import pg package
import pg from "pg";

// 2. Get the connection string
const connectionString = process.env.DB_CONNECTION_STRING;

// 3. Create a new pool instance
const pool = new pg.Pool({
  connectionString,
});

// 4. SENDING QUERIES

export async function dropTable_Author_Book() {
  // Sending Query for Deleting/Droping Table author_book
  await pool.query("DROP Table IF EXISTS author_book");
}

export async function dropTable_Authors() {
  // Sending Query for Deleting/Droping Table authors
  await pool.query("DROP Table IF EXISTS authors");
}

export async function dropTable_Books() {
  // Sending Query for Deleting/Droping Table books
  await pool.query("DROP Table IF EXISTS books");
}

// // 5. Close the connection
// await pool.end();
