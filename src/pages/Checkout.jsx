import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, CreditCard, Truck, ShoppingBag, CheckCircle2 } from 'lucide-react';
import './Checkout.css';

const Checkout = ({ cartItems, onClearCart }) => {
  const [isOrdered, setIsOrdered] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    card: '',
    expiry: '',
    cvv: ''
  });

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = subtotal > 0 ? 5.00 : 0;
  const finalTotal = subtotal + deliveryFee;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOrdered(true);
    onClearCart();
    // In a real app, this would send data to a backend
  };

  if (isOrdered) {
    return (
      <div className="checkout-success container animate-fade-in">
        <CheckCircle2 size={80} color="var(--primary)" />
        <h1>Order Placed Successfully!</h1>
        <p>Thank you for your order. We've received it and our chefs are already preparing your meal.</p>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="empty-checkout container animate-fade-in">
        <ShoppingBag size={64} color="var(--border)" />
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added anything to your cart yet.</p>
        <Link to="/menu" className="btn btn-primary">Go to Menu</Link>
      </div>
    );
  }

  return (
    <div className="checkout-page container animate-slide-up">
      <Link to="/menu" className="back-link">
        <ChevronLeft size={20} /> Back to Menu
      </Link>

      <h1 className="checkout-title">Checkout</h1>

      <div className="checkout-container">
        <div className="checkout-form-section">
          <form onSubmit={handleSubmit} className="checkout-form">
            <section className="form-section">
              <div className="section-header">
                <Truck size={20} />
                <h3>Delivery Information</h3>
              </div>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleInputChange} placeholder="John Doe" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleInputChange} placeholder="john@example.com" />
                </div>
                <div className="form-group full">
                  <label htmlFor="address">Address</label>
                  <input type="text" id="address" name="address" required value={formData.address} onChange={handleInputChange} placeholder="123 Food Street" />
                </div>
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input type="text" id="city" name="city" required value={formData.city} onChange={handleInputChange} placeholder="Tasty City" />
                </div>
                <div className="form-group">
                  <label htmlFor="zip">ZIP Code</label>
                  <input type="text" id="zip" name="zip" required value={formData.zip} onChange={handleInputChange} placeholder="12345" />
                </div>
              </div>
            </section>

            <section className="form-section">
              <div className="section-header">
                <CreditCard size={20} />
                <h3>Payment Details</h3>
              </div>
              <div className="form-grid">
                <div className="form-group full">
                  <label htmlFor="card">Card Number</label>
                  <input type="text" id="card" name="card" required value={formData.card} onChange={handleInputChange} placeholder="0000 0000 0000 0000" />
                </div>
                <div className="form-group">
                  <label htmlFor="expiry">Expiry Date</label>
                  <input type="text" id="expiry" name="expiry" required value={formData.expiry} onChange={handleInputChange} placeholder="MM/YY" />
                </div>
                <div className="form-group">
                  <label htmlFor="cvv">CVV</label>
                  <input type="password" id="cvv" name="cvv" required value={formData.cvv} onChange={handleInputChange} placeholder="***" />
                </div>
              </div>
            </section>

            <button type="submit" className="btn btn-primary place-order-btn">
              Place Order - ${finalTotal.toFixed(2)}
            </button>
          </form>
        </div>

        <div className="order-summary-section">
          <h3>Order Summary</h3>
          <div className="summary-items">
            {cartItems.map((item) => (
              <div key={item.id} className="summary-item">
                <div className="summary-item-info">
                  <span className="summary-item-name">{item.name}</span>
                  <span className="summary-item-qty">x {item.quantity}</span>
                </div>
                <span className="summary-item-price">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="summary-footer">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Delivery Fee</span>
              <span>${deliveryFee.toFixed(2)}</span>
            </div>
            <div className="summary-row final">
              <span>Total</span>
              <span>${finalTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
