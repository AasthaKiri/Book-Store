import React, { useState, useEffect } from "react";
import "../book.css"
import searchlogo from '../../pages/Style-guide/HTML - TatvaSoft/images/search.svg'




function Book() {
  const [books, setBooks] = useState([]);
  const bookdata = async () => {
    await fetch("http://localhost:5000/api/book/list")
      .then((data) => data.json())
      .then((list) => {setBooks(list);});
  };
  useEffect(() => {
    bookdata();
  }, []);


  const [search , setSearch] = useState("")
    // console.log(search);

  
    const bookSort =  () =>{
      setBooks(books.sort((a,b) =>{
        return a.name.localeCompare(b.name)  
      }));
      console.log(books);
    };
  
  return (
    <div className="container">
      <div className="search">
                    <input type="text" placeholder="What are you looking for..." id='search' onChange={(e) => {setSearch(e.target.value)}} />
                        <div className="btns">
                            <button><img src={searchlogo} alt="" />Search</button>
                            <button>Cancel</button>
                        </div>
                </div>
      <div className="loginCreate">
        <h1>Product Listing</h1>
      </div>
      <div className="sortItems">
        <div className="prodName">
          Product Name - <span>14366</span> items
        </div>
        <div className="sortSelect">
          <p>Sort By</p>
          <select name="" id="">
            <option value="a - z" onClick={() => {bookSort()}}>a - z</option>
            <option value="A - Z" onClick={() => {bookSort()}}>A - Z</option>
          </select>
        </div>
      </div>
      <div className="gridContainer" >
        {books.filter((b) => {
          if(search === ""){
            return b
          }else if (b.name.toLowerCase().includes(search.toLowerCase())){
            return b
          }
        }).map(b => (
          <div className="gridBox" key={b.id}>
            <img
              src={b.base64image}
              alt=""
            />
            <div className="boxDetails">
              <div className="title">{b.name}</div>
              <div className="category">{b.cname}</div>
              <div className="prodDes">{b.description}</div>
              <div className="discount">
                MRP <del>1000</del> <span>20.00% OFF</span>
              </div>
              <div className="price">₹ {b.price}</div>
              <button className="addToCart" >Add to Cart</button>
            </div>
          </div>
        ))}

      </div>
      <div className="pages">
        <ul>
          <li className="disable">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
              >
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#" className="active">
              1
            </a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
          <li>
            <a href="#">4</a>
          </li>
          <li>
            <a href="#">5</a>
          </li>
          <li>
            <a href="#">...</a>
          </li>
          <li>
            <a href="#">10</a>
          </li>
          <li>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
              >
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer">
        <p>© 2022 Tatvasoft.com. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Book;
