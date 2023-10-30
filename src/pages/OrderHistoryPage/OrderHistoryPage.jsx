import { useState, useEffect } from 'react';
import * as ordersAPI from '../../utilities/orders-api';
import './OrderHistoryPage.css';
import OrderDetail from '../../components/OrderDetail/OrderDetail';

export default function OrderHistoryPage() {
  const [orderHistory, setOrderHistory] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    async function fetchOrderHistory() {
      try {
        const history = await ordersAPI.getOrderHistory();
        setOrderHistory(history);
      } catch (error) {
        console.error('Error fetching order history:', error);
      }
    }

    fetchOrderHistory();
  }, []);

  const handleOrderClick = (orderId) => {
    const selected = orderHistory.find(order => order.orderId === orderId);
    setSelectedOrder(selected);
  };

  return (
    <main className="OrderHistoryPage">
      <aside>
      <div>
        <h1>Order History</h1>
        <ul>
          {orderHistory.map(order => (
            <li key={order._id} onClick={() => handleOrderClick(order.orderId)}>
              <p>Order ID: {order.orderId}</p>
              <p>Total Qty: {order.totalQty}</p>
              <p>Total Price: ${order.orderTotal.toFixed(2)}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        {selectedOrder && <OrderDetail order={selectedOrder} />}
      </div>
      </aside>
    </main>
  );
}
