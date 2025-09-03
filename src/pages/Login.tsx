import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Data from '../data/Users';
import { useAuth } from '../context/AuthContext';

const Login: React.FC = () =>{
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const {login} = useAuth();

  const user = Data.find(
    (u) => text === u.name && email === u.email && password === u.password
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(user){
      login(user);
      navigate('/todos');
    }
    else{
      setError("Invalid Email and Password")
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white shadow-md rounded-xl p-6 w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name</label>
          <input 
            type="text" 
            value={text} 
            required 
            placeholder="Enter Name"
            onChange={(e) => setText(e.target.value)}
            className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
          <input 
            type="email" 
            value={email} 
            required 
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
          <input 
            type="password" 
            value={password} 
            required 
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Login
        </button>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      </form>
    </div>
  )
}

export default Login
