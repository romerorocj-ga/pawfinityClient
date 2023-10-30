import sendRequest from './send-request';
//const BASE_URL = 'http://localhost:4741/items';
const BASE_URL = 'https://pawfinityapi.onrender.com/items';

export async function getAll() {
   try {
   return await sendRequest(BASE_URL);
   } catch (error) {
     console.error('Error in getAll:', error);
     throw error;
   }
}

export async function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}
