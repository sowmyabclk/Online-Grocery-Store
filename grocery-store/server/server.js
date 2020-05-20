const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('./session');
const auth = require('./auth');
const inventory = require('./inventory');
const cartInfo = require('./cartItems');

const app = express();
const PORT = 4000;

app.use(cookieParser());
app.use(express.static('./build'));

app.get('/session', (req, res) => {
  const sid = req.cookies.sid;
  const validSession = session.validateSession(sid);
  if (!validSession) {
    res.status(401).json({ code: 'LOGIN_REQUIRED' });
    return;
  }
  res.status(200).json(session.getSession(sid));
});

app.post('/session', express.json(), (req, res) => {
  const { username } = req.body;
  res.clearCookie('sid');
  if (!username) {
    res.status(400).json({ code: 'USERNAME_REQUIRED' });
    return;
  }
  if (!auth.isPermitted(username)) {
    res.status(403).json({ code: 'LOGIN_UNAUTHORIZED' });
    return;
  }
  const sessionInfo = session.addSession({ username });
  res.cookie('sid', sessionInfo.id);
  res.status(200).json(sessionInfo);
});

app.delete('/session', express.json(), (req, res) => {
  const sid = req.cookies.sid;
  res.clearCookie('sid');
  session.deleteSession(sid);
  res.sendStatus(200);
});


app.get('/inventory', (req, res) => {
  const sid = req.cookies.sid;
  const validSession = session.validateSession(sid);
  if (!validSession) {
    res.clearCookie('sid');
    res.status(401).json({ code: 'LOGIN_REQUIRED' });
    return;
  }
 res.json(inventory.getInventoryItem());
});

app.post('/cartItem/:username', express.json(), (req, res) => {
  const sid = req.cookies.sid;
  const username = req.params.username;
  const item = req.body.itemInfo;
  const itemId = item.itemId
  const validSession = session.validateSession(sid);
  if (!validSession) {
    res.status(401).json({ code: 'LOGIN_REQUIRED' });
    return;
  }
  const isAllowed = session.canReadUser({ sid, username });
  if (!isAllowed) {
    res.clearCookie('sid');
    res.status(403).json({ code: 'LOGIN_UNAUTHORIZED' });
    return;
  }
  if (cartInfo.readItem({ username, itemId })) {
    res.status(400).json({ code: 'ITEM_ALREADY_ADDED' });
    return;
  }

  if (inventory.inventoryItems[item.itemId].quantity == 0) {
    res.status(400).json({ code: 'NO_STOCK' });
    return;
  }

  inventory.modifyQuantity(item.itemId, item.itemQuantity * -1);
  cartInfo.addItems({ username, item });
  res.json(cartInfo.cart[username]);
});

app.patch('/cartItems/:username/:itemId', express.json(), (req, res) => {
  const sid = req.cookies.sid;
  const username = req.params.username;
  const itemId = req.params.itemId;
  const item = req.body.itemInfo;
  const quantity = item.itemQuantity;
  const totalPrice = item.totalValue;

  const validSession = session.validateSession(sid);
  if (!validSession) {
    res.status(401).json({ code: 'LOGIN_REQUIRED' });
    return;
  }
  const isAllowed = session.canReadUser({ sid, username });
  if (!isAllowed) {
    res.clearCookie('sid');
    res.status(403).json({ code: 'LOGIN_UNAUTHORIZED' });
    return;
  }

  if (!cartInfo.readItem({ username, itemId })) {
    res.status(400).json({ data: cartInfo.cart[username], code: 'ITEM_NOT_EXIST' });
    return;
  }

  if (item.type == "increase") {
    if (inventory.inventoryItems[itemId].quantity == 0) {
      res.status(400).json({ code: 'NO_STOCK' });
      return;
    }
  }
  if (item.type == "decrease") {
    if (quantity <= 0) {
      res.status(400).json({ code: 'INVALID_QUANTITY' });
      return;
    }
  }

  cartInfo.cart[username][itemId].itemQuantity = quantity;
  cartInfo.cart[username][itemId].totalValue = totalPrice;
  inventory.modifyQuantity(itemId,item.inventQuantity);
  res.json(cartInfo.cart[username]);
});


app.get('/cartItems/:username', (req, res) => {
  const sid = req.cookies.sid;
  const username = req.params.username;
  const validSession = session.validateSession(sid);
  if (!validSession) {
    res.status(401).json({ code: 'LOGIN_REQUIRED' });
    return;
  }
  const isAllowed = session.canReadUser({ sid, username });
  if (!isAllowed) {
    res.clearCookie('sid');
    res.status(403).json({ code: 'LOGIN_UNAUTHORIZED' });
    return;
  }

  res.json({ data: cartInfo.readAllItems(username) });
});

app.delete('/cartItems/:username/:itemId', (req, res) => {
  const sid = req.cookies.sid;
  const username = req.params.username;
  const itemId = req.params.itemId;
  let quantity;
  const validSession = session.validateSession(sid);
  if (!validSession) {
    res.status(401).json({ code: 'LOGIN_REQUIRED' });
    return;
  }
  const isAllowed = session.canReadUser({ sid, username });
  if (!isAllowed) {
    res.clearCookie('sid');
    res.status(403).json({ code: 'LOGIN_UNAUTHORIZED' });
    return;
  }

  if (cartInfo.readItem({ username, itemId })) {
    const itemInfo = cartInfo.getItem({ username, itemId });
    quantity = itemInfo.itemQuantity;

  }
  if (!cartInfo.readItem({ username, itemId })) {
    res.status(400).json({ data: cartInfo.readAllItems(username), code: 'ITEM_NOT_EXIST' });
    return;
  }
  if (!cartInfo.removeItem({ username, itemId })) {
    res.status(404).json({ code: 'NO_ITEMID' });
  }
  else {

    inventory.modifyQuantity(itemId, quantity);

    res.json({ data: cartInfo.readAllItems(username) });
  }
});

app.delete('/cartItems/:username/', (req, res) => {
  const sid = req.cookies.sid;
  const username = req.params.username;
  const validSession = session.validateSession(sid);
  if (!validSession) {
    res.status(401).json({ code: 'LOGIN_REQUIRED' });
    return;
  }
  const isAllowed = session.canReadUser({ sid, username });
  if (!isAllowed) {
    res.clearCookie('sid');
    res.status(403).json({ code: 'LOGIN_UNAUTHORIZED' });
    return;
  }
  cartInfo.removeAll(username);
  res.sendStatus(200);

});




app.listen(PORT, () => console.log(`http://localhost:${PORT}`));