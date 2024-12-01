import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderAction } from '../../redux/actions/OrderAction';
import PaginationComponent from '../paginations/PaginationComponent';

const OrderComponent = () => {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state) => state.orders);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 5;

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

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto my-10 p-4 bg-white shadow-lg rounded-lg">
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
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {currentOrders.map((order) => (
                <div
                  key={order.id}
                  className="p-6 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 cursor-pointer"
                  onClick={() => openModal(order)}
                >
                    <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 flex items-center justify-center">
                    <img
                      src={order.products[0]?.images?.split(",")[0]?.trim()}
                      alt={order.name}
                      className="w-8 h-8 rounded-full"
                    />

                    </div>

                  <h3 className="text-lg font-semibold text-gray-800">Order by {order.name}</h3>
                  <p className="text-gray-600 mt-2">
                    <strong>Total:</strong> MAD {isNaN(parseFloat(order.total)) ? 'N/A' : parseFloat(order.total).toFixed(2)}
                  </p>
                  <p className="text-gray-600 mt-2">
                    <strong>Date:</strong> {new Date(order.created_at).toLocaleDateString()}
                  </p>
                  <p className="mt-4">
                    <span
                      className={`px-3 py-1 rounded-full text-white ${getStatusColor(order.status)}`}
                    >
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-600 p-10">
              <h2 className="text-2xl font-semibold">No Orders Found</h2>
              <p>Please check back later or refresh the page.</p>
            </div>
          )}
          <div className="flex justify-center mt-6">
            <PaginationComponent
              totalOrders={orders.length}
              ordersPerPage={ordersPerPage}
              paginate={paginate}
              currentPage={currentPage}
            />
          </div>
        </>
      )}

{isModalOpen && selectedOrder && (
  <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-4 sm:w-1/2 md:w-1/3">
      <h3 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
        Order Details
      </h3>

      {/* Order Information */}
      <div className="space-y-4 mb-6">
        <div className='flex justify-center'>
          <img src={selectedOrder.products[0]?.images?.split(",")[0]?.trim()} alt={selectedOrder.name} className="w-20 h-20 object-cover rounded-lg" />
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-gray-800">Order ID:</span>
          <span className="text-gray-600">{selectedOrder.id}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-gray-800">Customer Name:</span>
          <span className="text-gray-600">{selectedOrder.name}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-gray-800">Total Amount:</span>
          <span className="text-gray-600">
            MAD {isNaN(parseFloat(selectedOrder.total)) ? 'N/A' : parseFloat(selectedOrder.total).toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-gray-800">Order Date:</span>
          <span className="text-gray-600">{new Date(selectedOrder.created_at).toLocaleDateString()}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-gray-800">Status:</span>
          <span className={`text-gray-600 capitalize ${selectedOrder.status === 'completed' ? 'text-green-600' : 'text-red-600'}`}>
            {selectedOrder.status}
          </span>
        </div>
      </div>

      {/* Contact Information */}
      <h4 className="text-xl font-semibold text-gray-900 mb-4 text-center">
        Contact for More Info
      </h4>
      <p className="text-gray-600 mb-4 text-center">
        If you have any questions about this order, you can contact us using the details below:
      </p>
      <div className="space-y-3">
        <p className="text-center">
          <strong>Email:</strong>{' '}
          <a href="mailto:zobirofkir19@gmail.com" className="text-blue-600 hover:text-blue-800">
            zobirofkir19@gmail.com
          </a>
        </p>
        <p className="text-center">
          <strong>Phone:</strong>{' '}
          <a href="tel:+212619920942" className="text-blue-600 hover:text-blue-800">
            0619920942
          </a>
        </p>
      </div>

      {/* Close Button */}
      <div className="mt-8 text-center">
        <button
          onClick={closeModal}
          className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition duration-200"
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
