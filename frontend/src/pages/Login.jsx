import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

export default function Login(){
  const [email,setEmail]=useState(''), [password,setPassword]=useState('');
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try{
      const res = await api.post('/auth/login', { email, password });
      const payload = res.data.data || res.data;
      localStorage.setItem('token', payload.token);
      localStorage.setItem('user', JSON.stringify(payload));
      nav('/dashboard');
    } catch (err){
      alert(err.response?.data?.error || err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Course System Login</h2>
        <form onSubmit={submit}>
          <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required />
          <button type="submit">Login</button>
        </form>
        <div className="auth-footer">
          <a href="/register">Create account</a>
        </div>
      </div>
    </div>
  );
}

