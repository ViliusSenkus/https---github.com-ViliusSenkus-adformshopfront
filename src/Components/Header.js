import { Link } from 'react-router-dom';

function Header(){
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/cart">Shopping Cart</Link></li>
          <li><Link to="/admin/products">Admin Products</Link></li>
          <li><Link to="/admin/orders">Admin Orders</Link></li>
          <li><Link to="/admin/users">Admin Users</Link></li>
          <li><Link to="/">LogOut</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header