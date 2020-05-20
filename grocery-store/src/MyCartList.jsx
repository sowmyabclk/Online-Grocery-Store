import React, { useEffect } from 'react';
import { fetchGetItems, deleteItemFromCart, updateCartItem } from './services';
import messages from './messages';
import { totalValue } from './common-logic';

const MyCartList = ({
  user,
  items,
  setItem,
  setInvError,
  cartError,
  setCartError,
  totalAmount,
  setTotalAmount,
  setCheckout,
  onError

}) => {

  useEffect(() => {
    fetchGetItems(user.userName)
      .then(itemInfo => {
        setItem(itemInfo.data);
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
  }, [user, onError, setItem, setCartError]);


  const deleteItem = (e) => {
    setInvError('');
    setCartError('');
    setCheckout(false);
    e.preventDefault();
    deleteItemFromCart(user.userName, e.target.dataset.itemId)
      .then(itemListInfo => {
        setItem(itemListInfo.data);
        setTotalAmount(totalValue(itemListInfo.data));
      }).catch((err) => {
        if (err.code == "LOGIN_UNAUTHORIZED" || err.code == "LOGIN_REQUIRED") {
          onError(false, messages[err.code]);
        }
        else if (err.code == "ITEM_NOT_EXIST" || err.code == "NO_ITEMID") {
          setCartError(messages[err.code] || err.code || messages['DEFAULT']);
          setItem(err.data);
          setTotalAmount(totalValue(err.data));
        }
        else {
          setCartError(messages[err.code] || err.code || messages['DEFAULT']);

        }
      })
  }
  const increaseQuantity = (id, price, quantity) => {
    let quantityVal = parseInt(quantity) + 1;
    let reduceBy = -1;
    let totalPrice = quantityVal *parseFloat (price);
    setInvError('');
    setCartError('');
    setCheckout(false);
    const item = {
      itemId: id,
      itemPrice: price,
      itemQuantity: quantityVal,
      totalValue: totalPrice.toFixed(2),
      inventQuantity: reduceBy,
      type: "increase"
    }
    updateCartItem(user.userName, id, item)
      .then((itemInfo) => {
        setItem(itemInfo);
        setTotalAmount(totalValue(itemInfo));
      })
      .catch((err) => {
        if (err.code == "LOGIN_UNAUTHORIZED" || err.code == "LOGIN_REQUIRED") {
          onError(false, messages[err.code]);
        }
        else if (err.code == "ITEM_NOT_EXIST" || err.code == "NO_ITEMID") {
          setCartError(messages[err.code] || err.code || messages['DEFAULT']);
          setItem(err.data);
          setTotalAmount(totalValue(err.data));
        }
        else {
          setCartError(messages[err.code] || err.code || messages['DEFAULT']);
        }
      })
  };

  const decreaseQuantity = (id, price, quantity) => {
    let quantityVal = parseInt(quantity) - 1;
    let increaseBy = 1;
    let totalPrice = quantityVal *parseFloat(price);
    setCartError('');
    setInvError('');
    setCheckout(false);
    const item = {
      itemId: id,
      itemPrice: price,
      itemQuantity: quantityVal,
      totalValue: totalPrice.toFixed(2),
      inventQuantity: increaseBy,
      type: "decrease"
    }
    updateCartItem(user.userName, id, item)
      .then((itemInfo) => {
        setItem(itemInfo);
        setTotalAmount(totalValue(itemInfo));
      })
      .catch((err) => {
        if (err.code == "LOGIN_UNAUTHORIZED" || err.code == "LOGIN_REQUIRED") {
          onError(false, messages[err.code]);
        }
        else if (err.code == "ITEM_NOT_EXIST" || err.code == "NO_ITEMID") {
          setCartError(messages[err.code] || err.code || messages['DEFAULT']);
          setItem(err.data);
          setTotalAmount(totalValue(err.data));
        }
        else {
          setCartError(messages[err.code] || err.code || messages['DEFAULT']);
        }
      })
  };

  return (
    <div className="item-list">
      <h2 className="cart-title">My Cart</h2>
      <ul className="items"> {
        Object.values(items)
          .map(item => (
            <li key={item.itemId}>
              <div className="items-info">
                <button data-item-id={item.itemId} className="to-remove" onClick={(e) => deleteItem(e)}>X</button>
                <span data-item-id={item.itemId} className="item" >{item.itemName}</span>
                <div className="quantity-info">
                  <button data-id={item.itemId} className="increase-quantity" type="button" onClick={() => increaseQuantity(item.itemId, item.itemPrice, item.itemQuantity, item.totalValue)}>+</button>
                  <input data-item-id={item.itemId} className="item-quantity" type="number" value={item.itemQuantity} ></input>
                  <button data-id={item.itemId} className="decrease-quantity" type="button" onClick={() => decreaseQuantity(item.itemId, item.itemPrice, item.itemQuantity, item.totalValue)}>-</button>
                </div>
                <span data-item-id={item.itemId} className="item-price" >${item.totalValue}</span>
              </div>
            </li>
          ))
      }
      </ul>
      <p className="total">total value :  ${totalAmount}</p>
      <p className="tax">tax : 10%</p>
      <label className="cart-error">{cartError}</label>
    </div>
  );
};


export default MyCartList;
