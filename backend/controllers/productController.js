const Product =require ('../models/productModel.js');

export const getProducts = async (req, res) => {
  const { page = 1, limit = 10, search = "" } = req.query;
  const query = search ? { name: { $regex: search, $options: "i" } } : {};
  const total = await Product.countDocuments(query);
  const data = await Product.find(query)
    .populate("category")
    .skip((page - 1) * limit)
    .limit(Number(limit));
  res.json({ data, meta: { total, page, limit } });
};

export const addProduct = async (req, res) => {
  const prod = new Product(req.body);
  await prod.save();
  res.json(prod);
};

export const updateProduct = async (req, res) => {
  const prod = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(prod);
};

export const deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};

