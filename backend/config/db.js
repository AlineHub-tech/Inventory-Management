const mongoose = require('mongoose');
const connectDB = async () => {
try {
const uri = process.env.MONGODB_URI;
await mongoose.connect(uri, {
// modern mongoose will use sensible defaults; add options if needed
// useNewUrlParser: true,
// useUnifiedTopology: true,
});
console.log('MongoDB Atlas connected');
} catch (err) {
console.error('MongoDB connection error:', err.message);
process.exit(1); // crash app if cannot connect
}
};
module.exports = connectDB;