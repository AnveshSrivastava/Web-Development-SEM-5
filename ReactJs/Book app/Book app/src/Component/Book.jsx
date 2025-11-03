import React from 'react'
import './Book.css'
import { useState } from 'react';
export default function Book(props) {
  const [count, useCount] = useState(0);
  function Increment() {
    useCount(count + 1);
  }
  function Decrement() {
    useCount(count - 1);
  }
  return (
    <div>
        <div id="book">
            <img src="" alt="" />
            <h1>Title : {props.name}</h1>
            <h1>{props.price}</h1>
            <button onClick={Increment}>+</button>
            <button>{count}</button>
            <button onClick={Decrement}>-</button>
            <button>Buy Now</button>
        </div>
    </div>
  )
}