import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import './styles/Layout.css'

const Layout = () => {
  return (
    <div className="layout-container">
        <div>
            <Sidebar/>
        </div>
        <main className="main-content">
            <Outlet />
        </main>
    </div>
  )
}

export default Layout