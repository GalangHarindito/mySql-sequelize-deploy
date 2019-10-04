const express = require("express");
const router = express.Router();

const { getBlog, postBlog } = require("./controllers");

router.get("/", getBlog);
router.post("/", postBlog)

module.exports = router;