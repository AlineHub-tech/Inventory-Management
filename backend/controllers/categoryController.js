
const Category =require ('../models/categoryModel.js');

export const getCategories = async (req, res) => {
  const cats = await Category.find();
  res.json(cats);
};

export const addCategory = async (req, res) => {
  const cat = new Category(req.body);
  await cat.save();
  res.json(cat);
};