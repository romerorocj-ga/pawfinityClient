import './UserLogOut.css';
import { logOut } from '../../utilities/user-services';

export default function UserLogOut({ user, setUser }) {
  function handleLogOut() {
    logOut();
    setUser(null);
  }

  return (
    <div className="UserLogOut">
      <div>{user.name}</div>
      <div className="email">{user.email}</div>
      <button className="btn-sm" onClick={handleLogOut}>
        LOG OUT
      </button>
    </div>
  );
}
