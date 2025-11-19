import React from 'react';

function MenuItem({ name, category, price, description, isVegetarian }) {
  return (
    <div className="menu-item-card">
      <div className="item-header">
        <h3>{name}</h3>
        {isVegetarian && (
          <span className="vegetarian-badge">Vegetarian</span>
        )}
      </div>
      <p className="item-description">{description}</p>
      <div className="item-details">
        <span className="item-category">Category: {category}</span>
        <span className="item-price">${price.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default MenuItem;