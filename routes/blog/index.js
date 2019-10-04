const express = require("express");
const router = express.Router();

const { getBlog, postBlog, putBlog, deleteBlog } = require("./controllers");

router.get("/", getBlog);
router.post("/", postBlog)
router.put("/", putBlog)
router.delete("/", deleteBlog)

module.exports = router;