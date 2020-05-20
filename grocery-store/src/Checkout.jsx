import React, { useState } from 'react';
import { fetchGetItems, deleteItemsForUser } from './services';
import messages from './messages';
import { totalValue } from './common-logic';

const Checkout = ({
  user,
  items,
  totalAmount,
  setTotalAmount,
  setInvError,
  setCartError,
  setCheckout,
  checkout,
  onError,
  setItem

}) => {

  const [price, setprice] = useState('');
  const getOrderedItemList = () => {
    fetchGetItems(user.userName)
      .then(itemInfo => {
        setprice('');
        setInvError('');
        setCartError('');
        setTotalAmount(totalValue(itemInfo.data));
      })

      .catch((err) => {
        if (err.code == "LOGIN_UNAUTHORIZED" || err.code == "LOGIN_REQUIRED") {
          onError(false, messages[err.code]);
        }
        else {
          setCartError(messages[err.code] || err.code || messages['DEFAULT']);

        }
      })
    if (totalAmount != 0) {
      deleteItemsForUser(user.userName)
        .then(() => {
          setItem({});
          setprice(parseFloat(totalAmount)+totalAmount*(10/100));

          setTotalAmount(parseFloat(0.00).toFixed(2));
          setCheckout(true);
        })
    }
    else {
      setCheckout(true);

    }

  }

  return (
    <div>
      <button className="to-checkout" onClick={() => getOrderedItemList(items)} >Checkout</button>
      {checkout && price != 0 && <p className="order-info">Your order has been placed for the value ${price.toFixed(2)} and the copy has been sent to {user.userName}@abc.com </p>}
      {checkout && price == 0 && <p className="no-order-info">Please Add items to cart</p>}

    </div>
  );
};


export default Checkout;
