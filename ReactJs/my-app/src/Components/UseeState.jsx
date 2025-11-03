import React, { Component } from 'react'
export class UseeState extends Component {
  render() {
    function change() {
        //  counter
        const value = document.getElementById('abc').innerText;
        document.getElementById('abc').innerText = parseInt(value) + 1;
           
    }
    return (
      <div>
        <p id='abc'>1</p>
        <button onClick={change}>Click</button>
      </div>
    )
  }
}

export default UseeState