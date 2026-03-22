import React from 'react';
import { Truck, ShieldCheck, BadgeDollarSign, Search, ShoppingCart, Utensils } from 'lucide-react';
import './Features.css';

const Features = () => {
  const steps = [
    { icon: <Search size={32} />, title: 'Choose Your Meal', desc: 'Browse our extensive menu and pick your favorites.' },
    { icon: <ShoppingCart size={32} />, title: 'Easy Ordering', desc: 'Add items to your cart and checkout with ease.' },
    { icon: <Utensils size={32} />, title: 'Enjoy Your Food', desc: 'We delivery fast so you can eat fresh and hot!' }
  ];

  const highlights = [
    { icon: <Truck size={40} />, title: 'Super Fast Delivery', desc: 'Get your food in under 30 minutes with our priority delivery system.' },
    { icon: <ShieldCheck size={40} />, title: 'Premium Quality', desc: 'We only use the freshest ingredients from certified local suppliers.' },
    { icon: <BadgeDollarSign size={40} />, title: 'Best Price', desc: 'Top-tier restaurant food at prices that won\'t break the bank.' }
  ];

  return (
    <div className="features-wrapper">
      <section className="highlights-section container animate-fade-in">
        <div className="section-header-top">
          <span className="badge">Why Choose Us?</span>
          <h2>We serve the best food in town</h2>
        </div>
        <div className="highlights-grid">
          {highlights.map((item, index) => (
            <div key={index} className="highlight-card">
              <div className="icon-box">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="how-it-works container animate-slide-up">
        <div className="section-header-top text-center">
          <span className="badge">How it Works</span>
          <h2>Simple Steps for Deliciousness</h2>
        </div>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-item">
              <div className="step-number">{index + 1}</div>
              <div className="step-icon">{step.icon}</div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
              {index < steps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>
      </section>

      <section className="stats-bar animate-fade-in">
        <div className="container stats-grid">
          <div className="stat-item">
            <span className="stat-number">10k+</span>
            <span className="stat-label">Happy Customers</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Expert Chefs</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">30m</span>
            <span className="stat-label">Avg. Delivery</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
