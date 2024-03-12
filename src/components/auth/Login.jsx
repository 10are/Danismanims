import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const { username, email, password } = formData;
  const navigate = useNavigate();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/auth/login/', {
        username,
        email,
        password
      });
      console.log(response.data);
      navigate('/');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-blue-500">Giriş Yap</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Kullanıcı Adı:</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
              className="form-input mt-1 block w-full rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="form-input mt-1 block w-full rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-gray-700">Şifre:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              className="form-input mt-1 block w-full rounded-md shadow-sm"
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Giriş Yap
          </button>
          <button type="button" onClick={() => navigate('/register')} className="w-full mt-4 bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 focus:outline-none">
            Hesabım Yok
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
