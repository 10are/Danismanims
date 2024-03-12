// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; // Örnek olarak React Router kullanıldı, kendi projenize uygun olanı kullanın


const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;
  const navigate = useNavigate();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/auth/login/', {
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
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4  text-blue-500">Giriş Yap</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="form-input mt-1 block w-full text-4xl rounded-md shadow-sm"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700">Şifre:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
              className="form-input mt-1 block w-full text-4xl rounded-md shadow-sm"
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Giriş Yap
          </button>
          <p className="mt-4 text-center text-gray-700">
            Hesabınız yok mu?{' '}
            <Link to="/register" className="text-blue-500 hover:underline">
              Hemen kayıt olun.
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
