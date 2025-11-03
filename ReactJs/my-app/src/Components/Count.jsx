import React, { Component } from 'react'
import { useState } from 'react';
export function Count(){
    const [count, setCount] = useState(0);
    const [color , setColor] = useState("red");
    function increment() {
        setCount(count + 1);
        setColor("green");
    }
    function decrement() {
        setCount(count - 1);
        setColor("blue");
    }
    return (
      <div>
        <button style={{color: color}} onClick={increment}>+ {color}</button>
        <p>{count}</p>
        <button style={{color: color}} onClick={decrement}>- {color}</button>
        <p style={{color: color}}>The color is {color}</p>
      </div>
    )
}

export default Count