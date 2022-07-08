import React from 'react'
import Cart from './components/Cart'
import './cart.css'
import Navbar from '../pages/Navbar'
import Search from '../pages/Search'

function CartPage() {
  return (
    <div>
        <Navbar />
        <Search />
      <Cart/>
    </div>
  )
}

export default CartPage
