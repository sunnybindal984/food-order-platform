import React from 'react';

const About = () => {
  return (
    <div className="container" style={{paddingTop: '4rem', paddingBottom: '4rem'}}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>About <span className="text-primary">Us</span></h1>
        <p className="text-secondary" style={{ maxWidth: '600px', margin: '0 auto' }}>
          Delivering happiness to your doorstep since 2024.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '3rem',
        alignItems: 'center',
        marginTop: '2rem'
      }}>
        <div>
          <img 
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Restaurant Kitchen" 
            style={{ width: '100%', borderRadius: '1rem', objectFit: 'cover', height: '400px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
          />
        </div>
        
        <div>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
            Quality food, <br/> Exceptional service.
          </h2>
          <p className="text-secondary" style={{ marginBottom: '1.5rem', lineHeight: '1.7' }}>
            We believe that ordering food should be fast, easy, and enjoyable. Our platform connects you with the best local restaurants, ensuring that your favorite meals are just a few clicks away.
          </p>
          <p className="text-secondary" style={{ marginBottom: '2rem', lineHeight: '1.7' }}>
            Whether you're craving a late-night snack, a healthy lunch, or a full family dinner, our extensive network of culinary partners guarantees something for everyone.
          </p>
          
          <div style={{ display: 'flex', gap: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', fontWeight: 'bold' }}>500+</h3>
              <p className="text-secondary">Restaurants</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', fontWeight: 'bold' }}>20K+</h3>
              <p className="text-secondary">Happy Customers</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', fontWeight: 'bold' }}>99%</h3>
              <p className="text-secondary">On-Time Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
