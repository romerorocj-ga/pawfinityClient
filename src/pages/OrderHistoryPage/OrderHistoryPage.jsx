import React, { useState, useEffect } from 'react';
import * as ordersAPI from '../../utilities/orders-api';
import './OrderHistoryPage.css';
import Logo from '../../components/Logo/Logo';
import { Link, useNavigate,} from 'react-router-dom';
import OrderDetail from '../../components/OrderDetail/OrderDetail'; 
import OrderList from '../../components/OrderList/OrderList'; 
import UserLogOut from '../../components/UserLogOut/UserLogOut'; 

export default function OrderHistoryPage({ user, setUser }) {
  const [orderHistory, setOrderHistory] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  async function fetchOrderHistory() {
    try {
      const history = await ordersAPI.getOrderHistory();
      setOrderHistory(history);
    } catch (error) {
      console.error('Error fetching order history:', error);
    }
  }
  useEffect(() => {
    fetchOrderHistory();
  }, []);

  const handleOrderClick = (orderId) => {
   const selected = orderHistory.find(order => order.orderId === orderId);
    setSelectedOrder(selected);
  };


  const onDeleteOrder = async (e, orderId) => {
     try {
      await ordersAPI.deleteOrder(orderId);
      fetchOrderHistory()
      const updatedOrderHistory = orderHistory.filter(order => order.orderId !== orderId);
      setOrderHistory(updatedOrderHistory);
      setSelectedOrder(null);
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };


  return (
    <main className="OrderHistoryPage">
      <aside>
        <Logo />
        <Link to="/orders/new" className="button btn-sm">NEW ORDER</Link>
        <UserLogOut user={user} setUser={setUser} />
        
      </aside>
        <OrderList orderHistory={orderHistory} onOrderClick={handleOrderClick} onDeleteOrder={onDeleteOrder} />
      {selectedOrder && <OrderDetail order={selectedOrder} />}
    </main>
  );
}

