const model = require("../models/books.model");

// GET
async function getBooks(req, res) {
  const result = await model.getAll();
  res.status(200).json(result);
}

// GET BY ID
async function getOne(req, res) {
  const id = req.params.id;
  const result = await model.getOneBook(id);
  res.status(200).json(result);
}

// POST BOOK
async function postBook(req, res) {
  const { title, author, genre } = req.body;

  if (!title || !author || !genre) {
    return res
      .status(400)
      .json({ message: "You need to send title, author and genre." });
  }
  const newBook = {
    title,
    author,
    genre,
  };
  const result = await model.createBook(newBook);
  res.status(201).json(result);
}

// PUT
async function putBook(req, res) {
  const result = await model.updateBook(req.body);
  console.log(result);
  res.status(200).json(result);
}

// PATCH
async function patchBook(req, res) {
  const { title, author, genre } = req.body;
  const id = req.params.id;
  const result = await model.patchOne(id, title, author, genre);
  res.status(200).json(result);
}

//DELETE
async function deleteBook(req, res) {
  const id = req.params.id;
  const result = await model.deleteBook(id);
  res.status(200).json(result);
}

module.exports = {
  getBooks,
  getOne,
  postBook,
  putBook,
  patchBook,
  deleteBook,
};
