const express = require("express");
const { getAllUsers, getAnUser } = require("../controllers/user.controller");

const router = express.Router();

router.get("/", getAllUsers); // admin
router.get("/:userid", getAnUser);
router.put("/:userid"); // user
router.delete("/:userid"); // user

module.exports = router;
