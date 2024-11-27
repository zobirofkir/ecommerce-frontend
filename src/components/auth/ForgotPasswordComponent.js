import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPasswordAction } from '../../redux/actions/ForgotPasswordAction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPasswordComponent = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const { error, success } = useSelector((state) => state.forgotPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter a valid email.');
      return;
    }

    dispatch(forgotPasswordAction(email));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }

    if (success) {
      toast.success('Password reset link sent to your email.');
    }

  }, [error, success]);

  return (
    <>
      <ToastContainer />
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 rounded shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-600 text-white font-medium py-2 px-4 rounded hover:bg-gray-700"
            >
              Send Reset Link
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordComponent;
