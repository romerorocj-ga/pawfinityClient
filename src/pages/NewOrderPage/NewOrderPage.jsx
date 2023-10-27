import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';
import './NewOrderPage.css';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import PetList from '../../components/PetList/PetList';
import CategoryList from '../../components/CategoryList/CategoryList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import sendRequest   from '../../utilities/send-request';

export default function NewOrderPage({ user, setUser }) {
  const [petItems, setPetItems] = useState([]);
  const [activeCat, setActiveCat] = useState('')
  const [cart , setCart] = useState(null)
  const categoriesRef = useRef([])
  const navigate = useNavigate() 
 
  useEffect(function() {
    async function getPetItems() {
      const petItems = await sendRequest('/items')
        setPetItems(petItems.results)
    }
    getPetItems()
  }, [])

  async function handleAddToOrder(itemId) {
    const updatedCart = await ordersAPI.addItemToCart(itemId)
    setCart(updatedCart)
  }

  async function handleChangeQty(itemId, newQty) {
    const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
    setCart(updatedCart);
  }

  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate('/orders');
  }

  return (
    <main className="NewOrderPage">
      <aside>
        <Logo />
        <CategoryList
          categories={categoriesRef.current}
          activeCat={activeCat}
          setActiveCat={setActiveCat}
        />
        <Link to="/orders" className="button btn-sm">
          PREVIOUS ORDERS
        </Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <PetList
        petItems={petItems.filter(item => item.category.name === activeCat)}
        handleAddToOrder={handleAddToOrder}
      />
      <OrderDetail
        order={cart}
        handleChangeQty={handleChangeQty}
        handleCheckout={handleCheckout}
      />
    </main>
  );
}
