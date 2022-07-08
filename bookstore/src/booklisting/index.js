import React from 'react'
import Book from './components/Book'
import Navbar from '../pages/Navbar'

function BookListing() {
  return (
    <div>
      <Navbar />
      {/* <Search /> */}
      {/* <Currentpage /> */}
      <Book />
    </div>
  )
}

export default BookListing
