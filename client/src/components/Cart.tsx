import React from "react";

const Cart: React.FunctionComponent<{}> = (props) =>  {
  console.log('this is the cart component')
  let newVar = 'now it worked'
  return (
    <div className="App">
      <h1>cart</h1>
    </div>
  );
}

export default Cart;
