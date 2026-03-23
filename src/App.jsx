import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import LoginSignup from './pages/LoginSignup';
import Cart from './components/Cart';
import ScrollToTop from './components/ScrollToTop';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) {
      removeFromCart(id);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-text-primary">
        <Navbar 
          cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)} 
          onCartClick={() => setIsCartOpen(true)}
          user={user}
          onLogout={handleLogout}
        />
        
        <main>
          <Routes>
            <Route path="/" element={<HeroSection onAddToCart={addToCart} />} />
            <Route path="/menu" element={<Menu onAddToCart={addToCart} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<LoginSignup onLogin={handleLogin} />} />
            <Route 
              path="/checkout" 
              element={
                <ProtectedRoute>
                  <Checkout 
                    cartItems={cartItems} 
                    onClearCart={clearCart} 
                  />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </main>

        <Cart 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)} 
          cartItems={cartItems}
          onRemove={removeFromCart}
          onUpdateQuantity={updateQuantity}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
