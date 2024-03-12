import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; 

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password1: '',
    password2: ''
  });

  const { username, email, password1, password2 } = formData;
  const navigate = useNavigate();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://127.0.0.1:8000/dj-rest-auth/registration/', formData);
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="md:w-1/2 bg-black text-white p-10 hidden md:block">
        <h2 className="text-3xl font-bold mb-4">Slogan veya Mesajlar</h2>
        <p className="text-lg">Buraya istediğiniz slogan veya mesajları ekleyebilirsiniz.</p>
      </div>
      <div className="md:w-1/2 flex md:items-center justify-center pt-60 md:pt-0">
        <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
          <h2 className="text-3xl font-bold mb-4 text-blue-500">Kayıt Ol</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-gray-700">Kullanıcı Adı:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={handleChange}
                required
                className="mt-1 block w-full text-4xl rounded-md shadow-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
                required
                className="mt-1 block w-full text-4xl rounded-md shadow-sm"
              />
            </div>
            <div>
              <label htmlFor="password1" className="block text-gray-700">Şifre:</label>
              <input
                type="password"
                id="password1"
                name="password1"
                value={password1}
                onChange={handleChange}
                required
                className="mt-1 block w-full text-4xl rounded-md shadow-sm"
              />
            </div>
            <div>
              <label htmlFor="password2" className="block text-gray-700">Şifre (tekrar):</label>
              <input
                type="password"
                id="password2"
                name="password2"
                value={password2}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md text-4xl shadow-sm"
              />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Kayıt Ol
            </button>
            <p className="mt-4 text-center text-gray-700">
              Zaten hesabınız var mı?{' '}
              <Link to="/login" className="text-blue-500 hover:underline">
                Giriş yapın.
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;

