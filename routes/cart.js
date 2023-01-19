const express = require("express")
const router = express.Router()
const cartController = require("../controllers/cart")
const auth = require("../middleware/auth")

router.get("/cart", cartController.index)
router.delete("/:id", cartController.del)
router.put("/:id", cartController.update)
router.post("/", cartController.create)
router.post("/", auth, cartController.addToCart)
module.exports = router;
