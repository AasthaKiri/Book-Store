import React from "react";

function Cart() {
  return (
    <div>
      <div className="container">
        <div className="loginCreate">
          <h1>Cart Page</h1>
        </div>
        <div className="cartPage">
          <div className="head">
            <div className="title">
              My Shopping Bag (<span>3 Items</span>)
            </div>
            <div className="totalPrice">
              Total Price: <span>3000</span>
            </div>
          </div>
          <form action="">
            <div className="cartBox">
              <div className="img">
                <img
                  src="./Style-guide/HTML - TatvaSoft/images/dummy-image.png"
                  alt=""
                />
              </div>
              <div className="details">
                <div className="leftBox">
                  <div className="cartBoxTitle">Campus Sutra</div>
                  <div className="cartBoxName">Cart item name</div>
                  <div className="cartBoxBtns">
                    <button className="add">+</button>
                    <div className="numberOfItems">
                      <span>1</span>
                    </div>
                    <button className="remove">-</button>
                  </div>
                </div>
                <div className="rightBox">
                  <div className="itemPrice">
                    <span>500</span>
                  </div>
                  <div className="itemDiscount">
                    <del>1000</del>&nbsp;&nbsp;&nbsp;<span>50%</span> off
                  </div>
                  <div>
                    <a href="#">Remove</a>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="cartBox">
              <div className="img">
                <img
                  src="./Style-guide/HTML - TatvaSoft/images/dummy-image.png"
                  alt=""
                />
              </div>
              <div className="details">
                <div className="leftBox">
                  <div className="cartBoxTitle">Campus Sutra</div>
                  <div className="cartBoxName">Cart item name</div>
                  <div className="cartBoxBtns">
                    <button className="add">+</button>
                    <div className="numberOfItems">
                      <span>1</span>
                    </div>
                    <button className="remove">-</button>
                  </div>
                </div>
                <div className="rightBox">
                  <div className="itemPrice">
                    <span>500</span>
                  </div>
                  <div className="itemDiscount">
                    <del>1000</del>&nbsp;&nbsp;&nbsp;<span>50%</span> off
                  </div>
                  <div>
                    <a href="#">Remove</a>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="cartBox">
              <div className="img">
                <img
                  src="./Style-guide/HTML - TatvaSoft/images/dummy-image.png"
                  alt=""
                />
              </div>
              <div className="details">
                <div className="leftBox">
                  <div className="cartBoxTitle">Campus Sutra</div>
                  <div className="cartBoxName">Cart item name</div>
                  <div className="cartBoxBtns">
                    <button className="add">+</button>
                    <div className="numberOfItems">
                      <span>1</span>
                    </div>
                    <button className="remove">-</button>
                  </div>
                </div>
                <div className="rightBox">
                  <div className="itemPrice">
                    <span>500</span>
                  </div>
                  <div className="itemDiscount">
                    <del>1000</del>&nbsp;&nbsp;&nbsp;<span>50%</span> off
                  </div>
                  <div>
                    <a href="#">Remove</a>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="cartBox">
              <div className="img">
                <img
                  src="./Style-guide/HTML - TatvaSoft/images/dummy-image.png"
                  alt=""
                />
              </div>
              <div className="details">
                <div className="leftBox">
                  <div className="cartBoxTitle">Campus Sutra</div>
                  <div className="cartBoxName">Cart item name</div>
                  <div className="cartBoxBtns">
                    <button className="add">+</button>
                    <div className="numberOfItems">
                      <span>1</span>
                    </div>
                    <button className="remove">-</button>
                  </div>
                </div>
                <div className="rightBox">
                  <div className="itemPrice">
                    <span>500</span>
                  </div>
                  <div className="itemDiscount">
                    <del>1000</del>&nbsp;&nbsp;&nbsp;<span>50%</span> off
                  </div>
                  <div>
                    <a href="#">Remove</a>
                  </div>
                </div>
              </div>
            </div> */}
            <button type="submit" className="placeOrderBtn">
              Place Order
            </button>
          </form>
        </div>
        <div className="footer">
          <p>© 2022 Tatvasoft.com. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
