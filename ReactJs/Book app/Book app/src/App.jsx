
import { useEffect, useState } from 'react'
import './App.css'
import Book from './Component/Book'
import Navbar from './Component/Navbar'
import axios from 'axios'

function App() {
  const [show, setShow] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3000/api/products").then((res)=>{
      setShow(res.data);
    }).catch((e)=>{
      console.log(e);
    })
  })
  return (
    <>
    <h2>DATA SHOW</h2>
    <div className="book">
      {show.map(item => (
  <div key={item.id}>
    <p>{item.name}</p>
    <p>{item.price}</p>
    <img src={item.img} alt={item.name} />
  </div>
))}
    </div>
      
      {/* <Navbar />
      <Book image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh0bi3x6jLwRuEN0-eUUcCHwzQ2LjxlniVxw&s"} name = "Math" price = "340"/>
      <Book image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3aUZGccl_-lFMkufDujo05-qOVCVi6WYeQg&s"} name ="English" price = "250"/>
      <Book image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR48wb0Lf79kRp-TydB-ebU1txk_b2RKFgE9g&s"} name={"Java"} price={"500"}/> */}
    </>
  )
}

export default App
