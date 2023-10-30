import { useState, useEffect } from 'react';
import * as ordersAPI from '../../utilities/orders-api';
import './OrderHistoryPage.css'; // Import the CSS file

export default function OrderHistoryPage() {
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    async function fetchOrderHistory() {
      try {
        const history = await ordersAPI.getOrderHistory();
        console.log('Order History:', history);
        setOrderHistory(history);
      } catch (error) {
        console.error('Error fetching order history:', error);
      }
    }

    fetchOrderHistory();
  }, []);

  return (
    <div className="OrderHistoryPage">
      <aside>
        {/* Your aside content here */}
      </aside>
      <div>
        <h1>Order History</h1>
        <ul>
          {orderHistory.map(order => (
            <li key={order._id}>
               <p>Order ID: {order.orderId}</p>
    <p>Total Qty: {order.totalQty}</p>
    <p>Total Price: ${order.orderTotal.toFixed(2)}</p>
    {/* Add any other relevant order details */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

