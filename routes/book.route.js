const express = require("express");
const {
  createBook,
  getAllBooks,
  getABook,
  updateABook,
  deleteABook,
} = require("../controllers/book.controller");

const router = express.Router();

router.post("/", createBook); // user
router.get("/", getAllBooks);
router.get("/:bookid", getABook);
router.put("/:bookid", updateABook); // user
router.delete("/:bookid", deleteABook); // user

module.exports = router;
