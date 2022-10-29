import React, {useContext} from "react";
import Cart from '/Users/frankiesanchez/Desktop/BW React Final Project/react-final-project/src/svg/cart-shopping-solid.svg'
import { Link } from "react-router-dom";
import { DataContext } from "./DataProvider";

export default function Header() {

  const value = useContext(DataContext)
  const [cart] = value.cart
  
 

    

    return (
        <header>
            

            <div className="logo">
                <h1><Link to="/products">Fake Api Store</Link></h1>
            </div>
            <ul >
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/cart">Shopping Cart</Link></li>
                <li><Link to="/">Contact Us</Link></li>
                <li><Link to="/">Login / Register</Link></li>
                <li><Link to="electronics">Electronics</Link></li>
                <li><Link to="women's clothing">Women's clothing</Link></li>
                <li><Link to="men's clothing">Men's Clothing</Link></li>
                <li><Link to="jewelry">Jewelry</Link></li>
        </ul>

        <div className="cart-icon">
            <span>{cart.length}</span>
            <Link to="/cart">
                <img src={Cart} alt="" width="30" />
            </Link>

        </div>
      </header>
    );
}
