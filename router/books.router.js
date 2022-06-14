const express = require("express");

//Controller för books
const bookController = require("../controllers/books.controller");

//Router för books
const router = express.Router();

router.get("/books", bookController.getBooks);

router.get("/books/:id", bookController.getOne);

router.post("/books", bookController.postBook);

router.put("/books/:id", bookController.putBook);

router.patch("/books/:id", bookController.patchBook);

router.delete("/books/:id", bookController.deleteBook);

module.exports = router;
