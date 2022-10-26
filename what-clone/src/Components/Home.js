import React from 'react'
import "./Home.css";
import Sidebar from './Sidebar'

function Home() {
  return (
    <div className="home">
        <div className="home-container">
            {}
            <Sidebar />
            {}    
            <div className="home-bg">
              <img src="./WhatsAppbg.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Home