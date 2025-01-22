import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar-container">
        <ul className="sidebar-content-list">
            <li className="sidebar-contnet-list-link"><Link to="/">Home</Link></li>
            <li className="sidebar-contnet-list-link"><Link to="/about">About</Link></li>
            <li className="sidebar-contnet-list-link"><Link to="/contect">Contect</Link></li>
        </ul>
    </div>
  )
}

export default Sidebar