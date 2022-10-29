import React, {useContext, useState, useRef, useEffect} from "react";
import { DataContext} from "./DataProvider";
import { Link } from "react-router-dom";


export default function Cart(){

    const value = useContext(DataContext)
    //const [products] = value.products
    const [cart, setCart] = value.cart
    const [total, setTotal] = useState([])
    //const [counter, setCounter] = useState(1)
    //const [qty, setQty] = useState(1)
  



    // This logic was for setting qty values
    // in the items
    /*const result = cart.map((o) => ({
    ...o,
    qty: 1,
    }));
    console.log(result) */
    
    
    // if increaser is clicked 
    // increase quantity by 1
    // Assign old cart data to new cart
    // Set new products values in cart
    // qty, totalcost 
    const increaser = (id) => {
    cart.forEach(item => {
        if(item.id === id) {
            setTotal(item.price + total)
            
        }
    })
    //setCart([...cart])
}


 const itemPrice = new Set(cart.map(({ price}) => price ))

    
    // if decreaser is clicked 
    // increase quantity by 1
    // Assign old cart data to new cart
    // Set new products values in cart
    // qty, totalcost 
    const reduction = (id) => {
        cart.forEach(item => {
            if(item.id === id) {
                setTotal(total - itemPrice)
            }
        })
    //setCart([...cart])
    }



    // useEffect used for updated total cost render
    useEffect(() => {
        const arr = Array.from(itemPrice)
        const getTotal = () => {
            //adds all item prices
            const sum = arr.reduce((accumulator, current) => {
                return accumulator + current;
              }, 0);
            setTotal(sum)
        }
        getTotal()
    },[cart]) //fix dependency issue with useMemo

    // Removes product with onClick 
    const removeProduct = id => {
        if(window.confirm("Do you want to delete this product?")){
            // Removes index from cart
            cart.forEach((item,index) => {
                if(item.id === id) {
                cart.splice(index,1)
                }
            })
            setCart([...cart])
        }
    } 

    //Handles zooming and out of products
    // useRef() doesn't re-render
    const imgDiv = useRef();

    //Handles zoom of item images
    const handleMouseZoom = e => {
        const {left,top,width,height} = e.target.getBoundingClientRect();
        const x = (e.pageX - left) / width * 100;
        const y = (e.pageY - top) / height * 100;
        imgDiv.current.style.backgroundPosition = `${x}% ${y}%`
    }

    //If cart is empty return html saying cart is empty
    if(cart.length === 0) {
        return <h2 style={{textAlign: 'center', fontSize: '5rem'}}>Cart Empty</h2>
    }

    //Handles data
    return ( 
        <>
        {
            cart.map(values => (
                <div className="details cart" key={values.id}>
                    <div className="img-container" onMouseMove={handleMouseZoom} 
                    style={{backgroundImage: `url(${values.image})`}}
                    ref={imgDiv}/>
        
                
                <div className="box-details">
                    <h2 title={values.title}>{values.title}</h2>
                    <h3>{"$" + values.price}</h3>
        
                <p>{values.description}</p>
                <div className="amount">
                    <button className="count"  onClick={() => reduction(values.id)}> - </button>
                    <span>{}</span>
                    <button className="count" onClick={() => increaser(values.id)} > + </button>

                </div>
                {/*<button className="cart" onClick={() => addCart(values.id)}>
                    Add to cart</button> */}

                <div className="delete" onClick={() => removeProduct(values.id)}>X</div>
                </div>
            </div>
                
                
            
             ))

        }
        <div className="total">
            <Link to="/payment">Payment</Link>
            <h3>Total: $ {total}</h3>

        </div>
        
        </>
    ); 
    
} 