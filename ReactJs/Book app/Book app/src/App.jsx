
import './App.css'
import Book from './Component/Book'
import Navbar from './Component/Navbar'
function App() {

  return (
    <>
      <Navbar />
      <Book image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh0bi3x6jLwRuEN0-eUUcCHwzQ2LjxlniVxw&s"} name = "Math" price = "340"/>
      <Book image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3aUZGccl_-lFMkufDujo05-qOVCVi6WYeQg&s"} name ="English" price = "250"/>
      <Book image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR48wb0Lf79kRp-TydB-ebU1txk_b2RKFgE9g&s"} name={"Java"} price={"500"}/>
    </>
  )
}

export default App
