import React from 'react'
import "./Home.css";
import Product from "./Product"

function Home() {
    return (
        <div className ="home">
            <div className="home_container">
                <img 
                    className ="home_image"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
                    alt=""
                />
                <div className ="home_row">
                    <Product 
                    id="12121231"
                    title = 'The Power of Habit: Why We Do What We Do, and How to Change'
                    price = {340.00}
                    image = "https://images-na.ssl-images-amazon.com/images/I/71iEVsSP1GL.jpg"
                    rating = {5}/>
                    <Product 
                    id="12121222"
                    title = 'Wingreens Farms- Schezwan Chilli Garlic Sauce (Pack of 1-450g)'
                    price = {149.00}
                    image = "https://images-na.ssl-images-amazon.com/images/I/61Edz0ziSoL._SX679_.jpg"
                    rating = {5}/>
                    
                </div>

                <div className ="home_row">
                <Product 
                id="12121233"
                title = 'SanDisk 1TB SSD USB-C, USB 3.1, for PC & Mac & IP55 Rated'
                price = {11049.00}
                image = "https://images-na.ssl-images-amazon.com/images/I/81RUE-22B6L._SL1500_.jpg"
                rating = {5}/>
                <Product 
                id="12121234"
                title = 'Sennheiser Momentum True Wireless 2 - Bluetooth Earbuds with Active Noise Cancellation and 28-Hour Battery Life - Black'
                price = {24990.00}
                image = "https://images-na.ssl-images-amazon.com/images/I/71512ak6TsL._SL1500_.jpg"
                rating = {5}/>
                <Product 
                    id="12121235"
                title = 'The Lean Startup'
                price = {29.00}
                image = "https://images-na.ssl-images-amazon.com/images/I/91cwOSS4sDL.jpg"
                rating = {5}/>                
                </div>

                <div className ="home_row">
                <Product 
                id="12121236"
                title = 'Chocolates...'
                price = {300}
                image = "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Grocery/GW/Chocolates_PC_CC_379x304_V2._SY304_CB404777310_.jpg"
                rating = {4}/>
                </div>
            </div>
        </div>
    )
}

export default Home
