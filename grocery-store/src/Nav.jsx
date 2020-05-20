import React from 'react';

import { fetchLogout } from './services';

const Nav = ({ user, onLogout ,setItem,setTotalAmount,setCheckout,setInvError,setCartError ,setSortBy,setFilterState,setSearchState}) => {

  const logout = () => {
    setTotalAmount('');
    setCheckout(false);
    setInvError('');
    setCartError('');
    setSortBy({});
    setFilterState('All');
    setSearchState('');
    fetchLogout()
    .then( () => 
        onLogout()       
        );
  };
  return (
    <div className="logout">
    <h1 className= "title">My Mart</h1>
    <ul className='nav'>
      { user.isLoggedIn &&
          <button
            className="to-logout"
            onClick={logout}
          >Logout</button> }
    </ul>
    </div>
  
  );
};

export default Nav;