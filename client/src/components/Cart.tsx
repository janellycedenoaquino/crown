import React, { useState, useEffect } from "react";
import { item } from "../store/cart";

const Cart = () => {
  let cartArr: Array<item> = [];
  let localStorageArr = JSON.parse(localStorage.getItem("cart") || "");
  const [cart, setCart] = useState<item[]>();

  const handleCart = async () => {
    if (localStorageArr[1]) {
      localStorageArr.map((item: item) => {
        cartArr.push(item);
      });
      setCart(cartArr);
      console.log(cart);
    }
  };
  useEffect(() => {
    handleCart();
  });
  return (
    <div>
      <div>
        <img src={"imgurl"} />
      </div>
      <div>
        <h4>title</h4>
        <p>price</p>
      </div>
      <div>
        <p>quantity</p>
      </div>
      <div>
        <button>increase</button>
        <button>decrease</button>
      </div>
      <div>
        <p>total items</p>
        <p>amount</p>
        <button>checkout</button>
      </div>
    </div>
    // <div className="App">
    //   {cartArr ? (
    //     <>
    //       {cartArr.map((item: item) => {
    //         <div key={item.id}>
    //           </div>;
    //       })}
    //     </>
    //   ) : (
    //     <div>no items in cart</div>
    //   )}
    // </div>
  );
};

export default Cart;
