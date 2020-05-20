import React, { useState, useEffect, useCallback } from 'react';
import { fetchLoginStatus,deleteItemForUser, fetchInventoryItems} from './services';
import InventoryItemList from './InventoryItemList';
import MyCartList from './MyCartList';
import Nav from './Nav';
import Login from './Login';
import Checkout from './Checkout';
import SortList from './SortList';
import FilterList from './FilterList';
import Search from './Search';

import './App.css';
const App = () => {
const[inventoryState, setInventoryState] = useState({})
const[cartError,setCartError]=useState('');
const[invError,setInvError]=useState('');
const[itemState, setItemState] = useState({})
const [userState, setUserState] = useState({userName:'', isLoggedIn: false,error:''});
const[totalAmount,setTotalAmount]=useState(0.00);
const [sortBy, setSortBy] = useState({type:'all'});
const[checkout,setCheckout]=useState(false);
const[filterState,setFilterState] =useState('All');
const[searchState,setSearchState]=useState('');
const [selectedOption, setSelectedOption] = useState('All');


useEffect( () => {
  fetchLoginStatus()
  .then( userInfo => {
    setUserState({
      isLoggedIn: true,
      userName: userInfo.username,
    });
  })
  .catch( () => {} );
}, []);

const login = (username) => {
  setUserState({
    isLoggedIn: true,
    userName:username,
  });
};

const logout = () => {
  setUserState({
    isLoggedIn: false
  });
};

const deleteItem =({ error,status,username}) =>{
  setUserState({
    isLoggedIn: status,
    error:error,
    userName:username.userName,
  });
};


const displyError= useCallback( (status,error)=>{
  setUserState({
    isLoggedIn: status,
    error:error
  });
}, [setUserState] );

let content,inventoryItemContent,myCartListContent,checkoutContent,sortingContent,filterContent,searchContent

if(userState.isLoggedIn) {
  sortingContent=  (
  <SortList 
     sortBy={sortBy} 
     setSortBy={setSortBy} 
     setSelectedOption={setSelectedOption} 
     selectedOption={selectedOption}
  />);
  filterContent= (
  <FilterList 
     filterState={filterState} 
     setFilterState={setFilterState}
  />);
  searchContent=<Search searchState={searchState} setSearchState={setSearchState} />
  inventoryItemContent = (
  <InventoryItemList 
      user={userState} 
      inventoryItemList={inventoryState} 
      setInventoryItemList={setInventoryState} 
      setItem={setItemState}         
      sortBy={sortBy}
      cartError={cartError}
      setCartError={setCartError}
      invError={invError}
      setInvError={setInvError}
      setTotalAmount={setTotalAmount}
      setCheckout={setCheckout}
      onError={displyError}
      filterState={filterState}
      searchState={searchState}
    />);
  myCartListContent = (
  <MyCartList 
      user={userState} 
      items =  {itemState} 
      setItem={setItemState} 
      onDelete={deleteItem} 
      cartError={cartError}
      setCartError={setCartError}
      invError={invError}
      setInvError={setInvError}
      totalAmount={totalAmount} setTotalAmount={setTotalAmount}   setCheckout={setCheckout} 
      onError={displyError}    
    />);
  checkoutContent = (
  <Checkout 
      user={userState} 
      items =  {itemState} 
      totalAmount={totalAmount} 
      setTotalAmount={setTotalAmount} 
      cartError={cartError} 
      setCartError={setCartError}
      setInvError={setInvError}
      setCartError={setCartError}
      checkout={checkout}
      setCheckout={setCheckout}
      onError={displyError}
      setItem={setItemState}
    />);
 } 
 else 
 {
  content = <Login onLogin={ login } setItem={setItemState}  errorMessage={userState.error}/>;
 }

 return (
  <div className="app">
    <Nav user={userState} onLogout={logout} setItem={setItemState} setTotalAmount = {setTotalAmount} setCheckout={setCheckout} checkout={checkout}  setInvError={setInvError} setSortBy={setSortBy}
    setCartError={setCartError} setFilterState={setFilterState} setSearchState={setSearchState}/>
      {content}
      {sortingContent}
      {filterContent}
      {searchContent}
    <div className="inventory-cart-info">
      {inventoryItemContent}
      {myCartListContent}
      {checkoutContent}
      </div>
  </div>
);
};

export default App;