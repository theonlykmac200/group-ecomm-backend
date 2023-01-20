const express = require("express")
const router = express.Router()
const cartController = require("../controllers/cart")
const auth = require("../config/auth")

router.get("/", auth, cartController.index)
router.delete("/:id", auth, cartController.del)
router.put("/:id", auth, cartController.update)
router.post("/", auth, cartController.create)
router.post("/add-to-cart/", auth, cartController.addToCart)
module.exports = router;