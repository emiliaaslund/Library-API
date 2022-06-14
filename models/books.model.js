const db = require("../database");
const res = require("express/lib/response");

// get all books
function getAll() {
  const sql = "SELECT * FROM books";

  return new Promise((resolve, reject) => {
    db.all(sql, (error, rows) => {
      if (error) {
        console.error(error.message);
        res.status(400);
        reject(error);
      }
      resolve(rows);
      res.status(200);
      console.log("All books fetched successfully");
    });
  });
}

//get by id
function getOneBook(id) {
  const sql = "SELECT * FROM books WHERE id = ?";

  return new Promise((resolve, reject) => {
    db.get(sql, id, (error, rows) => {
      if (error) {
        console.error(error.message);
        res.status(400);
        reject(error);
      }
      res.status(201);
      resolve(rows);
      console.log(`You found the book with ID: ${id}.`);
    });
  });
}

//post a new book
function createBook(book) {
  const sql = "INSERT INTO books (title, author, genre) VALUES (?,?,?)";

  return new Promise((resolve, reject) => {
    db.run(sql, [book.title, book.author, book.genre], (error) => {
      if (error) {
        console.error(error.message);
        res.status(400);
        reject(error);
      }
      res.status(200);
      resolve();
      console.log(`A new book was created`);
    });
  });
}

//put = uppdatera alla värden
function updateBook(book) {
  const sql =
    "UPDATE books SET author = $author, title = $title, genre = $genre WHERE id = $id";

  return new Promise((resolve, reject) => {
    db.run(
      sql,
      {
        $author: book.author,
        $title: book.title,
        $genre: book.genre,
        $id: book.id,
      },
      (error) => {
        if (error) {
          console.error(error.message);
          res.status(400);
          reject(error);
        }
        resolve();
        res.status(200);
        console.log(
          `Book successfully changed to title: '${book.title}', author: '${book.author}', genre: '${book.genre}'`
        );
      }
    );
  });
}

// patch - uppdatera ett värde tex
function patchOne(id, book) {
  const sql = `UPDATE books SET title = "${book}" WHERE id = ${id}`;

  return new Promise((resolve, reject) => {
    db.run(sql, (error) => {
      if (error) {
        console.error(error.message);
        res.status(400);
        reject(error);
      }
      res.status(200);
      resolve();
      console.log(`The book has been updated`);
    });
  });
}

// delete book
function deleteBook(id) {
  const sql = "DELETE FROM books WHERE id = ?";

  return new Promise((resolve, reject) => {
    db.get(sql, [id], (error) => {
      if (error) {
        console.error(error.message);
        res.status(400);
        reject(error);
      }
      res.status(204);
      resolve();
    });
    console.log(`Book with ID: ${id} is deleted.`);
  });
}

module.exports = {
  getAll,
  getOneBook,
  createBook,
  updateBook,
  patchOne,
  deleteBook,
};
