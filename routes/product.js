const express = require("express")
const router = express.Router()
const productController = require("../controllers/products")

router.get("/", productController.index)
router.delete("/:id", productController.del)
router.put("/:id", productController.update)
router.post("/", productController.create)
router.get("/:id", productController.show)

module.exports = router;