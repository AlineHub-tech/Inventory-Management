import { useAuth } from '../context/AuthContext';
import '../index.css';

function Navbar() {
  const { user, logoutUser } = useAuth();
  return (
    <div className="navbar">
      <span>Welcome, {user?.name}</span>
      <button onClick={logoutUser}>Logout</button>
    </div>
  );
}

export default Navbar;