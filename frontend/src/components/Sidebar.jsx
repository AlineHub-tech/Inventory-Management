import { Link } from 'react-router-dom';
import '../index.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Inventory Dashboard</h2>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/categories">Categories</Link></li>
        <li><Link to="/products">Products</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;