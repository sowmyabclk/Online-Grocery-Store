const cart = {};

const addItems = ({username, item}) => {
    cart[username] = cart[username] || {};
   const itemId = item.itemId;
    cart[username][itemId] = { ...item, itemId };

};

const readAllItems = (username) => {
    if(!cart[username]) {
      return {};
    }
    return cart[username];
  };

  const readItem = ({username, itemId}) => {
    if(!cart[username] ||!cart[username][itemId] ) {
      return false;
    }
    return true;
  };

  const getItem = ({username, itemId}) => {
    if(!cart[username]) {
      return {};
    }
    return cart[username][itemId];
  };

  const removeItem = ({ username, itemId }) => {
    if(!cart[username] ||!cart[username][itemId] ) {
        return false;
    }
    delete cart[username][itemId];
    return true;
  };

  const removeAll = (username) => {
    delete cartInfo.cart[username];
  };

const cartInfo = {
    cart,
    addItems,
    readAllItems,
    readItem,
    removeItem,
    getItem,
    removeAll
    
  };
  
  module.exports = cartInfo;