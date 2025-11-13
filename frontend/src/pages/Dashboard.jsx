import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import '../index.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-main">
        <Navbar />
        <div className="dashboard-content">
          <h1>Welcome to Inventory Management</h1>
          <p>Use the sidebar to manage categories and products</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;