const express=require('express');
const { addCategory, getCategories }=require('../controllers/categoryController.js');
const { protect, admin }=require('../middlewares/authMiddleware.js');

const router = express.Router();
router.get("/", protect, getCategories);
router.post("/", protect, admin, addCategory);
module.exports = router;