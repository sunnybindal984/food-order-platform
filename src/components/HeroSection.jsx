import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import Menu from '../pages/Menu';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Features from './Features';

const HeroSection = ({ onAddToCart }) => {
  return (
    <>
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content animate-slide-up">
            <div className="hero-badge">
              <span className="badge-icon">🔥</span> Number 1 Food Delivery
            </div>
            <h1 className="hero-title">
              Hungry? We deliver <span className="text-primary">happiness</span> to your door
            </h1>
            <p className="hero-subtitle">
              Order from your favorite restaurants and track your meal in real-time. Fresh, fast, and satisfying.
            </p>
            <div className="hero-actions">
              <a href="#menu" className="btn btn-primary">
                Order Now <ArrowRight size={20} />
              </a>
              <div className="hero-rating">
                <div className="stars">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="var(--primary)" color="var(--primary)" />)}
                </div>
                <span><strong>4.9/5</strong> (10k+ reviews)</span>
              </div>
            </div>
          </div>
          <div className="hero-image-wrapper animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="hero-image-bg"></div>
            <img 
              src="https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Delicious burger" 
              className="hero-image"
            />
            <div className="floating-card c-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-send-icon lucide-send"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></svg> Fast Delivery
            </div>
            <div className="floating-card c-2">
             <Star size={24} fill="var(--primary)" color="var(--primary)" />   Top Rated
            </div>
          </div>
        </div>
      </section>

      <section id="menu">
        <Menu onAddToCart={onAddToCart} />
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default HeroSection;
