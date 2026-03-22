import React from 'react';
import { Plus } from 'lucide-react';
import './FoodCard.css';

const FoodCard = ({ item, onAdd }) => {
  return (
    <div className="food-card animate-slide-up">
      <div className="card-image-container">
        <img src={item.image} alt={item.name} className="card-image" />
        <div className="card-badge">{item.category}</div>
      </div>
      <div className="card-content">
        <div className="card-header">
          <h3 className="card-title">{item.name}</h3>
          <span className="card-price">${item.price.toFixed(2)}</span>
        </div>
        <p className="card-description">{item.description}</p>
        <button className="add-btn" onClick={() => onAdd(item)}>
          <Plus size={18} /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
