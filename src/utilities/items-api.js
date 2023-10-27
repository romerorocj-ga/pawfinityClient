import sendRequest from './send-request';
const BASE_URL = 'http://localhost:4741/items';

export async function getAll() {
  console.log('hi')
  return sendRequest(BASE_URL);
}

export async function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}
