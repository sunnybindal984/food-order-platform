import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic commented out as requested
    // console.log("Form submitted!");
  };

  return (
    <div className="container" style={{paddingTop: '4rem', paddingBottom: '4rem'}}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Contact <span className="text-primary">Us</span></h1>
        <p className="text-secondary" style={{ maxWidth: '600px', margin: '0 auto' }}>
          Have a question or feedback? We'd love to hear from you.
        </p>
      </div>

      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '3rem'
      }}>
        
        {/* Contact Info */}
        <div style={{ padding: '2rem', backgroundColor: 'var(--surface)', borderRadius: '1rem', border: '1px solid var(--border)' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Get In Touch</h3>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Address:</h4>
            <p style={{ color: 'var(--text-primary)' }}>123 Food Street, Tasty City, TC 12345</p>
          </div>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Email:</h4>
            <p style={{ color: 'var(--text-primary)' }}>support@foodorder.com</p>
          </div>
          
          <div>
            <h4 style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Phone:</h4>
            <p style={{ color: 'var(--text-primary)' }}>+1 (555) 123-4567</p>
          </div>
        </div>

        {/* Contact Form */}
        <div style={{ padding: '2rem', backgroundColor: 'var(--surface)', borderRadius: '1rem', border: '1px solid var(--border)' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Name</label>
              <input 
                type="text" 
                id="name" 
                placeholder="Enter your name"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  border: '1px solid var(--border)',
                  backgroundColor: 'var(--background)',
                  color: 'var(--text-primary)',
                  outline: 'none'
                }}
              />
            </div>
            
            <div>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="yourname@example.com"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  border: '1px solid var(--border)',
                  backgroundColor: 'var(--background)',
                  color: 'var(--text-primary)',
                  outline: 'none'
                }}
              />
            </div>
            
            <div>
              <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Message</label>
              <textarea 
                id="message" 
                rows="4"
                placeholder="How can we help you?"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  border: '1px solid var(--border)',
                  backgroundColor: 'var(--background)',
                  color: 'var(--text-primary)',
                  outline: 'none',
                  resize: 'vertical'
                }}
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary"
              style={{ padding: '0.75rem', width: '100%', border: 'none', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem', borderRadius: '0.5rem' }}
            >
              Send Message
            </button>
          </form>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;
