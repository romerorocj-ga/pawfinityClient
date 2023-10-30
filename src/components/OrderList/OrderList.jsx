import React from 'react';
import './OrderList.css';
import OrderListItem from '../OrderListItem/OrderListItem';

function OrderList({ orderHistory, onOrderClick, onDeleteOrder }) {
  const items = orderHistory.map(order => (
    <OrderListItem
      key={order._id}
      order={order}
      onOrderClick={onOrderClick}
      onDeleteOrder={onDeleteOrder}
    />
  ));

  return <div className="OrderList">{items}</div>;
}

export default OrderList;

