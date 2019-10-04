const express = require("express");
const router = express.Router();

const { getAdmin, postAdmin, getAdminById, deleteAdmin, putAdmin  } = require("./controllers");

router.get("/", getAdmin);
router.post("/", postAdmin)
router.get("/:id", getAdminById)
router.delete("/:id", deleteAdmin)
router.put("/:id", putAdmin)


module.exports = router;
