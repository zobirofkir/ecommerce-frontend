import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderAction } from '../../redux/actions/OrderAction';

const OrderComponent = () => {
  const dispatch = useDispatch();

  const { orders, loading, error } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(orderAction());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>; 
  }

  // Mapping status to background color
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

  return (
    <div className="container mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Order List</h2>
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
              <tr key={order.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="px-6 py-4 text-sm">{order.name}</td>
                <td className="px-6 py-4 text-sm">
                MAD {isNaN(parseFloat(order.total)) ? 'N/A' : parseFloat(order.total).toFixed(2)}
                </td>
                <td className="px-6 py-4 text-sm">  {new Date(order.created_at).getFullYear()} </td>
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
    </div>
  );
};

export default OrderComponent;
