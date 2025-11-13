// const express=require('express');
// const dotenv =require('dotenv');
// const cors=require ('cors');
// const connectDB =require('./config/db.js');
// const { errorHandler } =require ('./middlewares/errorMiddleware.js');
// const authRoutes =require('./routes/authRoutes.js');
// const categoryRoutes=require ('./routes/categoryRoutes.js');
// const productRoutes=require ('./routes/productRoutes.js');

require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const app = express();
connectDB();
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);

app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server on ${PORT}`));
