import React from 'react';
import './OrderListItem.css';

export default function OrderListItem({ order, onOrderClick, onDeleteOrder }) {
  return (
    <div className="OrderListItem" onClick={() => onOrderClick(order.orderId)}>
      <div className="order-id">Order ID: {order.orderId}</div>
      <div className="order-details">
        <div>Total Qty: {order.totalQty}</div>
        <div>Total Price: ${order.orderTotal.toFixed(2)}</div>
      </div>
      <button className="delete-btn" onClick={(e) => onDeleteOrder(e, order._id)}>
        Delete
      </button>
    </div>
  );
}
