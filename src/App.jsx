import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import Cart from './components/Cart';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart=(id)=>{
    setCartItems(prevItems=>prevItems.filter(item=>item.id!==id))

  }
 
 
   

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => setCartItems([]);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-text-primary">
        <Navbar 
          cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)} 
          onCartClick={toggleCart} 
        />
        
        <main>
          <Routes>
            <Route path="/" element={<HeroSection onAddToCart={addToCart} />} />
            <Route path="/menu" element={<Menu onAddToCart={addToCart} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route 
              path="/checkout" 
              element={
                <Checkout 
                  cartItems={cartItems} 
                  onClearCart={clearCart} 
                />
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
