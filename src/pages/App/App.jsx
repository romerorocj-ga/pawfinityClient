import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/user-services';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      {user ? (
        <Routes>
          <Route
            path="/orders/new"
            element={<NewOrderPage user={user} setUser={setUser} />}
          />
          <Route path="/orders" element={<OrderHistoryPage />} />
          <Route path="/*" element={<Navigate to="/orders/new" />} />
        </Routes>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
