const express=require ('express');
const { getProducts, addProduct, updateProduct, deleteProduct }=require ('../controllers/productController.js');
const { protect, admin }=require ('../middlewares/authMiddleware.js');

const router = express.Router();
router.get("/", protect, getProducts);
router.post("/", protect, admin, addProduct);
router.put("/:id", protect, admin, updateProduct);
router.delete("/:id", protect, admin, deleteProduct);

module.exports = router;