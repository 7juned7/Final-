import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';


function Header() {
 
  return (
    <div className='header'>
        <Link to="/">
        <img className='header__logo' src="https://www.pinclipart.com/picdir/big/358-3584545_rolling-pin-clip-art.png" alt="" />
   
        </Link>
        
   
   <div className="header__search">
       <input 
       className="header__searchInput"
       type="text" />
       <SearchIcon className="header__searchIcon" />
       
       
       {/* Logo */}
   </div> 
    <div className="header__nav">
      <Link to='/login' >
        <div className="header__option">
            <span className='header__optionLineOne' >Hello Guest</span>
            <span className='header__optionLineTwo' >Sign In</span>


        </div></Link>
        <div className="header__option"> 
        <span className='header__optionLineOne' >Returns</span>
            <span className='header__optionLineTwo' >& Orders</span>

            </div>
            <div className="header__option">
            <span className='header__optionLineOne' >Your</span>
            <span className='header__optionLineTwo' >Prime</span>

            </div>
            <Link to="/checkout">
            <div className="header__optionBasket">
              <ShoppingBasketIcon/>
              <span className="header__optionLineTwo header__basketCount" >0
              </span>
            </div></Link>
          

            

    </div>
   <Link to="/Xiaomi" >
    <div className="header__phones">
    <div className="Xiaomi__mobile">
      <h2>Xiaomi India</h2>
    </div>
    </div>
    </Link>
    
   
   
    </div>
  )
}

export default Header
