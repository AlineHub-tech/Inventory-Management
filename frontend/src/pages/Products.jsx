
import { useState, useEffect } from 'react';
import axios from 'axios';

import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import '../index.css';

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({ name: '', price: '', quantity: '', category_id: '' });
  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const token = JSON.parse(localStorage.getItem('user'))?.token;

  // Fetch categories
  const fetchCategories = async () => {
    const res = await axios.get('http://localhost:5003/api/categories', {
      headers: { Authorization: Bearer ${token} },
    });
    setCategories(res.data.data);
  };

  // Fetch products
  const fetchProducts = async () => {
    const res = await axios.get(`http://localhost:5003/api/products?page=${page}&q=${search}, {
      headers: { Authorization: Bearer ${token} },
    }`);
    setProducts(res.data.data);
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, [page, search]);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (!form.name || !form.price || !form.quantity || !form.category_id) return alert('All fields required');

    if (editId) {
      await axios.put(`http://localhost:5003/api/products/${editId}, form, {
        headers: { Authorization: Bearer ${token} },
      }`);
      setEditId(null);
    } else {
      await axios.post('http://localhost:5003/api/products', form, {
        headers: { Authorization: Bearer ${token} },
      });
    }
    setForm({ name: '', price: '', quantity: '', category_id: '' });
    fetchProducts();
  };

  const handleEdit = (product) => {
    setForm({
      name: product.name,
      price: product.price,
      quantity: product.quantity,
      category_id: product.category_id,
    });
    setEditId(product._id);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete product?')) {
      await axios.delete(`http://localhost:5003/api/products/${id}, {
        headers: { Authorization: Bearer ${token} },
      }`);
      fetchProducts();
    }
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-main">
        <Navbar />
        <div className="dashboard-content">
          <h2>Products</h2>

          <div className="form-search">
            <input placeholder="Search" value={search} onChange={e => setSearch(e.target.value)} />
          </div>

          <div className="form-search">
            <input name="name" placeholder="Product name" value={form.name} onChange={handleChange} />
            <input name="price" type="number" placeholder="Price" value={form.price} onChange={handleChange} />
            <input name="quantity" type="number" placeholder="Quantity" value={form.quantity} onChange={handleChange} />
            <select name="category_id" value={form.category_id} onChange={handleChange}>
              <option value="">Select Category</option>
              {categories.map(cat => (
                <option key={cat._id} value={cat._id}>{cat.name}</option>
              ))}
            </select>
            <button onClick={handleSubmit}>{editId ? 'Update' : 'Add'}</button>
          </div>

          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map(prod => (
                <tr key={prod._id}>
                  <td>{prod.name}</td>
                  <td>{prod.price}</td>
                  <td>{prod.quantity}</td>
                  <td>{prod.category?.name || 'N/A'}</td>
                  <td>
                    <button onClick={() => handleEdit(prod)}>Edit</button>
                    <button onClick={() => handleDelete(prod._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pagination">
            <button onClick={() => setPage(page => Math.max(page - 1, 1))}>Prev</button>
            <span>Page {page}</span>
            <button onClick={() => setPage(page => page + 1)}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
