import React from 'react';
import FoodCard from '../components/FoodCard';
import './Menu.css';


const DUMMY_FOODS = [
  // ... (keeping existing items)
  {
    id: 1,
    name: 'Classic Burger',
    price: 12.99,
    description: 'Juicy beef patty with fresh lettuce, tomatoes, and cheese.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'Burgers'
  },
  {
    id: 2,
    name: 'Margherita Pizza',
    price: 15.99,
    description: 'Fresh mozzarella, tomatoes, and basil on a thin crust.',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'Pizza'
  },
  {
    id: 3,
    name: 'Caesar Salad',
    price: 9.99,
    description: 'Crisp romaine lettuce, croutons, parmesan, and Caesar dressing.',
    image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'Salads'
  },
  {
    id: 4,
    name: 'Sushi Platter',
    price: 24.99,
    description: 'Assorted fresh sushi rolls with soy sauce and wasabi.',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'Sushi'
  },
  {
    id: 5,
    name: 'Spicy Tacos',
    price: 11.99,
    description: 'Three soft shell tacos with spicy chicken, salsa, and lime.',
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'Mexican'
  },
  {
    id: 6,
    name: 'Chocolate Lava Cake',
    price: 8.99,
    description: 'Warm chocolate cake with a gooey molten center.',
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'Desserts'
  }
];

const SPECIAL_ITEM = {
  id: 0,
  name: 'Chef\'s Signature Lobster Roll',
  price: 29.99,
  description: 'Fresh Maine lobster tossed in herbs and lemon butter, served in a toasted brioche bun with a side of truffle fries. Our most requested dish this season!',
  image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  category: 'Specialty'
};

const Menu = ({ onAddToCart }) => {
  const handleAdd = (item) => {
    onAddToCart(item);
  };

  return (
    <div className="container" style={{paddingTop: '4rem', paddingBottom: '4rem'}}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Our <span className="text-primary">Menu</span></h1>
        <p className="text-secondary" style={{ maxWidth: '600px', margin: '0 auto' }}>
          Explore our wide variety of delicious meals, prepared fresh daily by our expert chefs.
        </p>
      </div>

      {/* Special of the Day Section */}
      <div className="special-of-the-day animate-slide-up">
        <div className="special-image-container">
          <img src={SPECIAL_ITEM.image} alt={SPECIAL_ITEM.name} className="special-image" />
        </div>
        <div className="special-content">
          <span className="special-badge">⭐ SPECIAL OF THE DAY</span>
          <h2 className="special-title">{SPECIAL_ITEM.name}</h2>
          <p className="special-description">{SPECIAL_ITEM.description}</p>
          <div className="special-footer">
            <span className="special-price">${SPECIAL_ITEM.price}</span>
            <button className="btn btn-primary" onClick={() => handleAdd(SPECIAL_ITEM)}>
              Add to Order
            </button>
          </div>
        </div>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
        gap: '2rem' 
      }}>
        {DUMMY_FOODS.map(food => (
          <FoodCard 
            key={food.id} 
            item={food} 
            onAdd={handleAdd} 
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
