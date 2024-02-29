const express = require("express");
const { getAllUsers, getAnUser } = require("../controllers/user.controller");
const isAuthenticated = require("../middlewares/auth.middleware");
const isAdmin = require("../middlewares/admin.middleware");

const router = express.Router();

router.get("/:userid", getAnUser);
router.get("/", isAuthenticated, isAdmin, getAllUsers); // admin

module.exports = router;
