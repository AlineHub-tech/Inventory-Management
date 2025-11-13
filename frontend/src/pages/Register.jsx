
import React, { useState } from 'react';
// import { AuthProvider, useAuth } from './context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../index.css';

export default function Register(){
  const [form,setForm] = useState({ name:'', email:'', password:''});
  const nav = useNavigate();

  const handle = e => setForm({...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/auth/register', form);
      alert('Account created. Please login.');
      nav('/');
    } catch (err) {
      alert(err.response?.data?.error || err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create Account</h2>
        <form onSubmit={submit}>
          <input name="name" placeholder="Name" value={form.name} onChange={handle} required />
          <input name="email" placeholder="Email" value={form.email} onChange={handle} required />
          <input name="password" type="password" placeholder="Password" value={form.password} onChange={handle} required />
          <button type="submit">Register</button>
        </form>
        <div className="auth-footer">
          <a href="/">Back to login</a>
        </div>
      </div>
    </div>
  );
}

