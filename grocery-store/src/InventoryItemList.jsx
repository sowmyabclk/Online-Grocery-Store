import React, { useState, useEffect } from 'react';
import { fetchInventoryItems, postItem } from './services';
import messages from './messages';
import { sort } from './sorting';
import { totalValue } from './common-logic';


const InventoryItemList = ({
  user,
  inventoryItemList,
  setInventoryItemList,
  setItem,
  sortBy,
  setInvError,
  invError,
  setCartError,
  setTotalAmount,
  setCheckout,
  onError,
  filterState,
  searchState,
}) => {

  const [quantityState, setQuantityState] = useState("1");

  useEffect(() => {
    fetchInventoryItems()
      .then(InventoryInfo => {
        setInventoryItemList(InventoryInfo);
      })
      .catch((err) => {
        if (err.code == "LOGIN_UNAUTHORIZED" || err.code == "LOGIN_REQUIRED") {
          onError(false, messages[err.code]);
        }
        else {
          setInvError(messages[err.code] || err.code || messages['DEFAULT']);

        }
      })
  }, [onError, setInventoryItemList, setInvError]);


  const addItemToCart = (id, name, price, quantityState) => {
    let totalPrice = quantityState * parseFloat(price);

    setInvError('');
    setCartError('');
    setCheckout(false);
    setQuantityState("1");
    const item = {
      itemId: id,
      itemName: name,
      itemPrice: price,
      itemQuantity: quantityState,
      totalValue: totalPrice.toFixed(2)
    }
    postItem(user.userName, item)
      .then((itemInfo) => {
        setItem(itemInfo);
        setTotalAmount(totalValue(itemInfo));
      })
      .catch((err) => {
        if (err.code == "LOGIN_UNAUTHORIZED" || err.code == "LOGIN_REQUIRED") {
          onError(false, messages[err.code]);
        }
        else {
          setInvError(messages[err.code] || err.code || messages['DEFAULT']);

        }
      })
  };


  return (
    <div className="inventory-list">
      <ul className="inventory"> {
        sort({ by: sortBy, list: Object.values(inventoryItemList) })
          .filter(function (itemList) {
            if (filterState === 'All') {
              return Object.values(inventoryItemList)
            }
            return itemList.department.toLowerCase() === filterState.toLowerCase();
          })
          .filter(name => { return name.itemName.toLowerCase().indexOf(searchState.toLowerCase()) >= 0 })
          .map(item => (
            <li className="inventory-item" key={item.itemId}>
              <div className="inventory-items">
                <div className="image-info">
                  <img data-item-id={item.itemId} className="images" src={'./image/' + item.image} />
                  <button data-item-id={item.itemId} className="to-cart" data-inventory-id={item.itemId} onClick={() => addItemToCart(item.itemId, item.itemName, item.price, quantityState)} >Add To Cart</button>
                </div>
                <div className="item-info">
                  <span data-item-id={item.itemId} className="item-name">{item.itemName}</span>
                </div>
                <div className="price-info">
                  <label>Price</label> <span data-item-id={item.itemId} className="item-price">{parseFloat(item.price).toFixed(2)}$</span>
                </div>
                <div className="quantity-value">
                  <label>Qty</label><select data-item-id={item.itemId} className="quantity" defaultValue="1" onChange={(e) => setQuantityState(e.target.value)} >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                  <label>lb</label>
                </div>
              </div>
            </li>
          ))
      }
      </ul>
      <label className="inventory-error" >{invError}</label>
    </div>
  );
};

export default InventoryItemList;