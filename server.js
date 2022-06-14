const express = require("express");
const port = 5000;

// Router
const booksRouter = require("./router/books.router");

const app = express();

//Middlewares
app.use(express.json());

//kör igång allt
app.use(booksRouter);

//homepage
app.get("/", (req, res) => {
  res.send("Hello, Welcome to the Library");
});

app.listen(port, () => {
  console.log(`Servern är igång i port ${port}.`);
});
