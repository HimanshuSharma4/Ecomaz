import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, title, image, price, rating, hideButton}) {

    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket =() =>{
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className="CheckoutProduct">
            <img className ="CheckoutProduct_image" src={image} /> 

            <div className="CheckoutProduct_info">
            <p className="CheckoutProduct_title">{title}</p>
            <p className="CheckoutProduct_price">
                <big>₹</big>
                <big><strong>{price}</strong></big></p>
            <div className="CheckoutProduct_rating">
            {Array(rating)
                .fill()
                .map((_, i) => (
                    <p>⭐</p>
                ))}    
            </div>
            {!hideButton && (
                <button onClick ={removeFromBasket}>Remove from Basket</button>
            )}
                
            </div>
        </div>
    )
}

export default CheckoutProduct
