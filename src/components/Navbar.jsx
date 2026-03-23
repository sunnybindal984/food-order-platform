import React, { useState } from 'react';
import { ShoppingCart, Menu as MenuIcon, X, User, LogOut, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ cartCount, onCartClick, user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    onLogout();
    setShowUserMenu(false);
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <Link to="/" className="logo">
          Food<span className="text-secondary">Express</span>
        </Link>

        {/* Desktop Navigation */}
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/menu" onClick={() => setIsOpen(false)}>Menu</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>

        <div className="nav-actions">
          {user ? (
            <div className="user-profile-container">
              <button 
                className="user-profile-btn"
                onClick={() => setShowUserMenu(!showUserMenu)}
              >
                <div className="user-avatar">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <span className="user-name">{user.name}</span>
                <ChevronDown size={16} />
              </button>
              
              {showUserMenu && (
                <div className="user-dropdown animate-fade-in">
                  <div className="dropdown-header">
                    <p className="dropdown-name">{user.name}</p>
                    <p className="dropdown-email">{user.email}</p>
                  </div>
                  <div className="dropdown-divider"></div>
                  <button className="dropdown-item" onClick={handleLogoutClick}>
                    <LogOut size={16} />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="btn btn-primary login-btn">
              <User size={18} />
              <span>Login</span>
            </Link>
          )}

          <button className="cart-trigger" onClick={onCartClick}>
            <ShoppingCart size={24} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
          
          <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
