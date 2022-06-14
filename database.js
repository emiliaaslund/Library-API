const sqlite3 = require("sqlite3").verbose();
// const md5 = require("md5");

const DBSOURCE = "db.sqlite";

const db = new sqlite3.Database("./db.sqlite", (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message);
    console.log("error från databasen");
    throw err;
  } else {
    console.log("Connected to the SQLite database.");

    const statement = `
    CREATE TABLE books (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      author TEXT,
      genre TEXT)`;

    db.run(statement, (err) => {
      if (err) {
        // Table already created
      } else {
        // Table just created, creating some rows
        const insert =
          "INSERT INTO books (title, author, genre) VALUES (?,?,?)";

        db.run(insert, ["Book Lovers", "Emily Henry", "Romance"]);
        db.run(insert, [
          "A Court of Thorns and Roses",
          "Sarah J Maas",
          "Fantasy",
        ]);
      }
    });
  }
});

module.exports = db;
