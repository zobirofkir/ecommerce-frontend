import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderAction } from '../../redux/actions/OrderAction';

const OrderComponent = () => {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state) => state.orders);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    dispatch(orderAction());
  }, [dispatch]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'shipped':
        return 'bg-green-500';
      case 'pending':
        return 'bg-yellow-500';
      case 'delivered':
        return 'bg-blue-500';
      case 'cancelled':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const openModal = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
  };

  return (
    <div className="container mx-auto my-10 p-8 bg-white shadow-lg rounded-lg">

      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Order Management</h1>
        <p className="text-gray-600 text-sm">View and manage all customer orders.</p>
      </header>


      {loading && (
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
        </div>
      )}


      {error && (
        <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6 text-center">
          <strong>Error:</strong> {error}
        </div>
      )}


      {!loading && !error && (
        <>
          {orders.length > 0 ? (
            <div className="overflow-x-auto bg-gray-50 rounded-lg shadow-sm">
              <table className="min-w-full table-auto">
                <thead className="bg-gray-200 text-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium">User Name</th>
                    <th className="px-6 py-3 text-left text-sm font-medium">Total</th>
                    <th className="px-6 py-3 text-left text-sm font-medium">Date</th>
                    <th className="px-6 py-3 text-left text-sm font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800">
                  {orders.map((order) => (
                    <tr
                      key={order.id}
                      className="border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
                      onClick={() => openModal(order)} 
                    >
                      <td className="px-6 py-4 text-sm">{order.name}</td>
                      <td className="px-6 py-4 text-sm">
                        MAD {isNaN(parseFloat(order.total)) ? 'N/A' : parseFloat(order.total).toFixed(2)}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        {new Date(order.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span
                          className={`px-3 py-1 rounded-full text-white ${getStatusColor(order.status)}`}
                        >
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (

            <div className="text-center text-gray-600 p-10">
              <h2 className="text-2xl font-semibold">No Orders Found</h2>
              <p>Please check back later or refresh the page.</p>
            </div>
          )}
        </>
      )}

      {/* Modal for Contact Info */}
      {isModalOpen && selectedOrder && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4 sm:w-1/2 md:w-1/3">
            <h3 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Contact for More Info</h3>
            <p className="text-gray-600 mb-6 text-center">If you have any questions about this order, you can contact us using the details below:</p>
            <p className="flex md:flex-row flex-col gap-2 justify-center mb-4 text-center">
              <strong className="text-gray-800">Email:</strong> 
              <a href="mailto:zobirofkir19@gmail.com" className="text-blue-600 hover:text-blue-800 transition-colors duration-200 text-center">
                zobirofkir19@gmail.com
              </a>
            </p>
            <p className="flex md:flex-row flex-col gap-2 justify-center text-center">
              <strong className="text-gray-800">Phone:</strong> 
              <a href="tel:+212619920942" className="text-blue-600 hover:text-blue-800 transition-colors duration-200 text-center">
                0619920942
              </a>
            </p>
            <div className="mt-8 text-right">
              <button
                onClick={closeModal}
                className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderComponent;
