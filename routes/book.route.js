const express = require("express");
const {
  createBook,
  getAllBooks,
  getABook,
  updateABook,
  deleteABook,
} = require("../controllers/book.controller");
const isAuthenticated = require("../middlewares/auth.middleware");

const router = express.Router();

router.get("/", getAllBooks);
router.get("/:bookid", getABook);
router.post("/", isAuthenticated, createBook); // user
router.put("/:bookid", isAuthenticated, updateABook); // user
router.delete("/:bookid", isAuthenticated, deleteABook); // user

module.exports = router;
