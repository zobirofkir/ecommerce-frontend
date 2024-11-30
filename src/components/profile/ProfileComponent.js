import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile, logout } from '../../redux/actions/ProfileAction';
import { useNavigate } from 'react-router-dom';

const ProfileComponent = () => {
  const dispatch = useDispatch();
  const { profile, loading, error, isLoggedOut } = useSelector((state) => state.profile);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  const ordersHistory = () => {
    navigate('/orders');
  }

  const handleLogout = () => {
    dispatch(logout());
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  if (isLoggedOut) {
    localStorage.removeItem('accessToken');
    window.location.href = "/";
  }

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 mt-10">
      <h2 className="text-3xl font-semibold text-gray-700 mb-6 text-center">User Profile</h2>

      <div className="flex flex-col items-center">
        <img
          src={profile?.image || 'https://via.placeholder.com/150'}
          alt="Profile"
          className="w-32 h-32 rounded-full mb-4 object-cover shadow-lg"
        />
        <h3 className="text-xl font-semibold text-gray-800">{profile?.name}</h3>
        <p className="text-gray-600">{profile?.email}</p>
      </div>

      <div className="mt-8">
        <h4 className="text-lg font-semibold text-gray-700 border-b pb-2 mb-4">Profile Information</h4>

        <div className="w-full mb-4">
          <label className="block text-gray-600 mb-1">Username:</label>
          <p className="text-gray-800 bg-gray-100 p-2 rounded">{profile?.name}</p>
        </div>

        <div className="w-full mb-4">
          <label className="block text-gray-600 mb-1">Email:</label>
          <p className="text-gray-800 bg-gray-100 p-2 rounded">{profile?.email}</p>
        </div>

        <div className="w-full mb-4">
          <label className="block text-gray-600 mb-1">Phone:</label>
          <p className="text-gray-800 bg-gray-100 p-2 rounded">{profile?.phone || 'Not provided'}</p>
        </div>

        <div className="w-full mb-4">
          <label className="block text-gray-600 mb-1">Address:</label>
          <p className="text-gray-800 bg-gray-100 p-2 rounded">{profile?.address || 'Not provided'}</p>
        </div>
      </div>

      <div className="mt-8 flex justify-center gap-4">
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-300"
        >
          Logout
        </button>
        <button
          onClick={ordersHistory}
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
        >
          History
        </button>

      </div>
    </div>
  );
};

export default ProfileComponent;
