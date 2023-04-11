import { useSelector } from 'react-redux';

import React from 'react';
import CartItem from './Cartitem';

const Cartcontainer = () => {
  const { cartItems, amount } = useSelector((store) => store.cart);
  if (amount < 1) {
    <section>
      <h2>Your bag </h2>
      <h4>is empty</h4>
    </section>;
  }
  return (
    <section>
      <header>
        <h2>Your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => <CartItem key={item.id} {...item} />)}
      </div>
      <footer>
        <hr />
        <h2>
          Total Rs
          {amount}
        </h2>
      </footer>
    </section>

  );
};

export default Cartcontainer;
