const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
  name:{ type:String, required:true },
  price:{ type:Number, default:0 },
  quantity:{ type:Number, default:0 },
  category_id:{ type: mongoose.Schema.Types.ObjectId, ref:'Category' }
},{ timestamps:true });
module.exports = mongoose.model('Product', ProductSchema);