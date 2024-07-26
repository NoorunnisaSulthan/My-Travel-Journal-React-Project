// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar";
import Card from "./components/Card"
import data from "./data"
function App() {

  const details = data.map((loc, index) => (
    <Card key={index} item={loc} />
  ));
  
  return (
    <div className='body'>
      <Navbar/>
      <div className='cards'>
      {details}
      </div>
      
    </div>
  
  )
}

export default App
