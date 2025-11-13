import { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import '../index.css';

function Categories() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const token = JSON.parse(localStorage.getItem('user'))?.token;

  const fetchCategories = async () => {
    const res = await axios.get(`http://localhost:5003/api/categories?page=${page}&q=${search}, {
      headers: { Authorization: Bearer ${token} },
    }`);
    setCategories(res.data.data);
  };

  const handleCreate = async () => {
    if (!name) return alert('Name required');
    await axios.post('http://localhost:5003/api/categories', { name }, { headers: { Authorization: Bearer ${token} } });
    setName('');
    fetchCategories();
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete category?')) {
      await axios.delete(`http://localhost:5003/api/categories/${id}, { headers: { Authorization: Bearer ${token} } }`);
      fetchCategories();
    }
  };

  useEffect(() => { fetchCategories(); }, [page, search]);

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-main">
        <Navbar />
        <div className="dashboard-content">
          <h2>Categories</h2>
          <div className="form-search">
            <input placeholder="Search" value={search} onChange={e => setSearch(e.target.value)} />
            <input placeholder="New category" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={handleCreate}>Add</button>
          </div>
          <table>
            <thead><tr><th>Name</th><th>Actions</th></tr></thead>
            <tbody>
              {categories.map(cat => (
                <tr key={cat._id}>
                  <td>{cat.name}</td>
                  <td><button onClick={() => handleDelete(cat._id)}>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Categories;