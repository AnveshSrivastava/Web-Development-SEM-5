import React, { useState } from "react";
import "./Book.css";

export default function Book({ name, price, image }) {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);

  return (
    <div className="book-card">
      <img
        src={image || "https://via.placeholder.com/150"}
        alt={name}
        className="book-image"
      />
      <h2 className="book-title">{name}</h2>
      <p className="book-price">₹{price}</p>

      <div className="book-controls">
        <button onClick={decrement} className="btn quantity-btn">−</button>
        <span className="count-display">{count}</span>
        <button onClick={increment} className="btn quantity-btn">+</button>
      </div>

      <button className="btn buy-btn">Buy Now</button>
    </div>
  );
}
