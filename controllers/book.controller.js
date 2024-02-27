const { default: mongoose } = require("mongoose");
const bookModel = require("../models/book.model");

const createBook = async (req, res) => {
  try {
    const { title, image, author, genre, description } = req.body;

    if (!title || !image || !author || !genre) {
      throw new Error("Title, image, author and genre fields are required");
    }

    const book = await bookModel.create({
      title,
      image,
      author,
      genre,
      description,
    });

    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await bookModel.find({});
    res.status(200).json(books);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getABook = async (req, res) => {
  try {
    const { bookid } = req.params;

    if (!mongoose.Types.ObjectId.isValid(bookid)) {
      throw new Error("Invalid book id");
    }

    const book = await bookModel.findById(bookid);

    if (!book) {
      throw new Error("Book not found");
    }

    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateABook = async (req, res) => {
  try {
    const { bookid } = req.params;
    const { title, image, author, genre, description } = req.body;

    if (!mongoose.Types.ObjectId.isValid(bookid)) {
      throw new Error("Invalid book id");
    }

    const book = await bookModel.findById(bookid);

    if (!book) {
      throw new Error("Book not found");
    }

    const updatedBook = await bookModel.findByIdAndUpdate(
      bookid,
      { title, image, author, genre, description },
      { new: true }
    );

    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteABook = async (req, res) => {
  try {
    const { bookid } = req.params;

    if (!mongoose.Types.ObjectId.isValid(bookid)) {
      throw new Error("Invalid book id");
    }

    const book = await bookModel.findByIdAndDelete(bookid);

    res.status(200).json({ message: "Book deleted successfully!", book });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createBook,
  getAllBooks,
  getABook,
  updateABook,
  deleteABook,
};
