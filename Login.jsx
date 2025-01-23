import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/slices/authSlice';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate authentication
    if (credentials.username && credentials.password) {
      dispatch(login({ username: credentials.username }));
    }
  };
 

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-50">

      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">

        <h2 className="text-3xl font-bold text-center text-gray-900">Sign in</h2>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>

          <div className="rounded-md shadow-sm space-y-2">

            <div>
              <input
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300
                         placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500
                          focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              />
            </div>
            
            <div>
              <input
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300
                          placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500
                           focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              />
            </div>

          </div>

          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium
                       rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 
                       focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign in
          </button>
      
        </form>

      </div>

    </div>
  );
};

export default Login;