const express = require("express");
const router = express.Router();

const { getAdmin, postAdmin } = require("./controllers");

router.get("/", getAdmin);
router.post("/", postAdmin)

module.exports = router;
