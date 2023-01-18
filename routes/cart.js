const express = require("express")
const router = express.Router()
const cartController = require("../controllers/cart")

router.get("/", cartController.index)
router.delete("/:id", cartController.del)
router.put("/:id", cartController.update)
router.post("/", cartController.create)

module.exports = router;