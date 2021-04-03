import React from 'react'
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';


function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();

    return (
        <div className="Checkout">
            <div className="checkout_left">
            <img className="checkout_ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/BAU/Homemain/XCM_Manual_1500x250_1209699_1077610_1209699_in_home_28_01_20_page_5d027374_166d_466f_9f22_5789bd5e69af_jpg._CB423636511_.jpg" alt=""/>
            <div>
                <h3>Hello, {user?.email}</h3>
                <h2 className="checkout_title">
                    Your Shopping Basket</h2>
        
                    {basket.map(item => (
                        <CheckoutProduct 
                        id = {item.id}
                        title= {item.title}
                        image= {item.image}
                        price= {item.price}
                        rating= {item.rating}
                        />

                    ))}
                    

            </div>
            </div>   
            <div className="checkout_right">
                <Subtotal />
            </div>
            

        </div>
    )
}

export default Checkout
