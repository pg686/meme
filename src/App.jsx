import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import {useRef, useState, useEffect } from 'react';
function App() {
  const [wagmi, setWagmi] = useState(false);

  const toggleWagmi = (isWagmi) => {
    setWagmi(isWagmi)
  }

  return (
    <div>
     
    <Navbar />
    <div className={wagmi ? "wagmi" : "ngmi"} >
    <Home toggleWagmi={toggleWagmi} wagmi={wagmi}/>
    </div>
    <div className="object">
        <ul className='box'>
        <li> <img src="images/flyingmoney.svg"/></li>
        <li> <img src="images/flyingmoney.svg"/></li>
        <li> <img src="images/flyingmoney.svg"/></li>
        <li> <img src="images/flyingmoney.svg"/></li>
        <li> <img src="images/flyingmoney.svg"/></li>
        <li> <img src="images/money.png"/></li>
        <li> <img src="images/money.png"/></li>
        <li> <img src="images/money.png"/></li>
        <li> <img src="images/money.png"/></li>
        
        <li> <img src="images/money.png"/></li>
        </ul>
      </div>
    </div>
  )
}

export default App
