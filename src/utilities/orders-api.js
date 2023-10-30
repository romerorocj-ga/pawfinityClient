import sendRequest from './send-request';

//const BASE_URL = 'http://localhost:4741/orders';
const BASE_URL = 'https://pawfinityapi.onrender.com/orders';

export function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
}

export function addItemToCart(itemId) {
  return sendRequest(`${BASE_URL}/cart/items/${itemId}`, 'POST');
}

export function setItemQtyInCart(itemId, newQty) {
  return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { itemId, newQty });
}

export function checkout() {
  return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
}

export function getOrderHistory() {
  return sendRequest(`${BASE_URL}/history`)
    .catch(error => {
      console.error('Error fetching order history:', error);
      throw error; 
    });
}

export function deleteOrder(orderId) {
  return sendRequest(`${BASE_URL}/${orderId}`, 'DELETE');
}
