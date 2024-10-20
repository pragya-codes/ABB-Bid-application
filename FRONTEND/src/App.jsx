import { useState } from 'react'

import './App.css'
import LoginPage from './Pages/LoginPage/LoginPage'
import GenixAuctionsHomePage from './Pages/HomePage/GenixAutionsHomePage'
import AuctionItem from './Components/AutionCard/AutionItem'
import DetailsPage from './Pages/DetailsPage/Details'
import SignUpPage from './Pages/SignUpPage/SignUpPage'
import Header from './Components/Header'
import { Outlet } from 'react-router-dom'

function App() {
  

  return (
    <>
  <Header/>
  <Outlet />
 
    </>
  )
}

export default App
