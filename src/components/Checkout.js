import React from "react";
import { Link } from "react-router-dom";



export default function Cart(){

    

    return ( 
        <div> 
        <form>
            <label>
                Name:
                <input type="text" name="name" />
                Last Name: 
                <input type="text" LastName="last name" />
                Address:
                <input type="text" addres="address" />
                Credit Card: 
                <input type="text" CreditCaed="enter numbers" />
                CCV:
                <input type="text" name="ccv" />
                Exp: 
                <input type="text" ccve="expiration" />

            </label>
        <li>  <Link to="/">Submit</Link></li>
        </form>
        </div>
    )
}