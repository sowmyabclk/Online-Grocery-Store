const convertNetworkError = (err) => {
  return {
    code: 'NETWORK-ERROR',
    err
  };
};

const convertServiceError = (err) => Promise.reject(err);

export const fetchLoginStatus = () => {
  return fetch('/session', {
    method: 'GET',
  })
    .catch(convertNetworkError)
    .then(response => {
      if (!response.ok) {
        return response.json().then(convertServiceError);
      }
      return response.json();
    });
};

export const fetchLogin = (username) => {
  return fetch('/session', {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json',
    }),
    body: JSON.stringify({ username }),
  })
    .catch(convertNetworkError)
    .then(response => {
      if (!response.ok) {
        return response.json().then(convertServiceError);
      }
      return response.json();
    });
};

export const fetchLogout = () => {
  return fetch('/session', {
    method: 'DELETE',
  })
    .catch(convertNetworkError)
    .then(response => {
      return response.ok;
    });
};


export const fetchInventoryItems = () => {
  return fetch('/inventory', {
    method: 'GET',
  })
    .catch(convertNetworkError)
    .then(response => {
      if (!response.ok) {
        return response.json().then(convertServiceError);
      }
      return response.json();
    });
};

export const postItem = (username, item) => {
  return fetch(`/cartItem/${username}`, {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json',
    }),
    body: JSON.stringify({ itemInfo: item }),
  })
    .catch(convertNetworkError)
    .then(response => {
      if (!response.ok) {
        return response.json().then(convertServiceError);
      }
      return response.json();
    });
};

export const updateCartItem = (username, itemId, item) => {
  return fetch(`/cartItems/${username}/${itemId}`, {
    method: 'PATCH',
    headers: new Headers({
      'content-type': 'application/json',
    }),
    body: JSON.stringify({ itemInfo: item }),
  })
    .catch(convertNetworkError)
    .then(response => {
      if (!response.ok) {
        return response.json().then(convertServiceError);
      }
      return response.json();
    });
};

export const fetchGetItems = (username) => {
  return fetch(`/cartItems/${username}`, {
    method: 'GET',
  })
    .catch(convertNetworkError)
    .then(response => {
      if (!response.ok) {
        return response.json().then(convertServiceError);
      }
      return response.json();
    });
};

export const deleteItemFromCart = (username, itemId) => {
  return fetch(`/cartItems/${username}/${itemId}`, {
    method: 'DELETE',
  })
    .catch(convertNetworkError)
    .then(response => {
      if (!response.ok) {
        return response.json().then(convertServiceError);
      }
      return response.json();
    });
};

export const deleteItemsForUser = (username) => {
  return fetch(`/cartItems/${username}`, {
    method: 'DELETE',
  })
    .catch(convertNetworkError)
    .then(response => {
      if (!response.ok) {
        return response.json().then(convertServiceError);
      }
      return
    });
};
