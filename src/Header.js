import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{basket, user}, dispatch] = useStateValue();

    const handleAuthentication = () =>{
        if (user) {
            auth.signOut();
          } 
    }

    return (
        <div className = 'header'>
            <Link to ="/">
            <img 
                className = "header_logo"
                src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
            />
            </Link>
            
            <div className = "header_logo_prime">
                    <h4><Link to ="/">
                    prime</Link>
                    </h4>
            </div>
            <div 
                className = "Header_search">
                <input
                className= "Header_searchInput" type= "text"/>
                <SearchIcon
                className= "Header_searchIcon" />
                {/*Logo*/}
            </div>

            <div className = 'Header_Nav'>
            <Link to = {!user && "/login"} >
            <div onClick={handleAuthentication} className = "header_option"> 
                        <span className = "header_optionOne">
                            Hello {!user ? "Guest" : user.email}
                        </span>
                        <span className = "header_optionTwo">
                           {user ? "Sign out" : "Sign In"}
                        </span>
                    </div>
                </Link>

                <Link to ='/orders'>
                    <div className = "header_option">
                        <span className = "header_optionOne">Returns</span>
                        <span className = "header_optionTwo">& Orders</span>
                    </div>
                </Link>

                <div className = "header_option">
                    <span className = "header_optionOne">Your</span>
                    <span className = "header_optionTwo">Prime</span>
                </div>

                <Link to ="/checkout">
                <div className = "header_optionBasket">
                <ShoppingBasketIcon />
                <span className = "header_optionOne header_BasketCount">{basket?.length}</span>
                </div></Link>

            </div>
        </div>
    )
}
export default Header
