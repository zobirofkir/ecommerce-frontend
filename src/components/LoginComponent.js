import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../redux/actions/LoginAction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const { error, success } = useSelector((state) => state.login);

  const handleSubmit = (e) => {
    e.preventDefault();


    dispatch(loginAction(email, password));
  };
  
  useEffect(() => {
    if (error) {
      toast.error(error);
    }

    if (success) {
      toast.success('Login Successful');
    }

  }, [error, success]);

  return (
    <>
      <ToastContainer/>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Welcome Back!</h2>
          <form onSubmit={handleSubmit}>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:outline-none"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gray-600 text-white font-bold py-2 rounded-lg hover:bg-gray-700 transition duration-300"
            >
              Login
            </button>

            <div className="mt-4 text-center">
              <p className="text-gray-600">
                Don't have an account?{' '}
                <a href="/register" className="text-gray-600 hover:underline">
                  Register
                </a>
              </p>
              <p className="text-gray-600">
                Forgot Password?{' '}
                <a href="/forgot-password" className="text-gray-600 hover:underline">
                  Reset Password
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginComponent;
