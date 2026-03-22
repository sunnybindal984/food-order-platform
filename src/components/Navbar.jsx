import React from 'react';
import { ShoppingBag, Menu, X, UtensilsCrossed } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ cartCount, onCartClick }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <UtensilsCrossed className="logo-icon" size={28} />
          <span>Cravey</span>
        </Link>
        
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/menu" onClick={() => setIsOpen(false)}>Menu</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>

        <div className="nav-actions">
          <button className="cart-btn" onClick={onCartClick}>
            <ShoppingBag size={24} />
            {cartCount > 0 && <span className="cart-badge animate-fade-in">{cartCount}</span>}
          </button>
          
          <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
