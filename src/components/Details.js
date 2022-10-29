import React, {useContext, useRef} from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "./DataProvider";


export default function Details(){
    const {id} = useParams();
    const value = useContext(DataContext)
    const [products] = value.products
    const addCart = value.addCart
   

    //Handles zooming and out of products
    // useRef() doesn't re-render
    const imgDiv = useRef();

    //Handles product ids
    const details = products.filter((product, index)=> {
        return product.id == id;
    })

    //Handles zoom of item images
    const handleMouseZoom = e => {
        const {left,top,width,height} = e.target.getBoundingClientRect();
        const x = (e.pageX - left) / width * 100;
        const y = (e.pageY - top) / height * 100;
        imgDiv.current.style.backgroundPosition = `${x}% ${y}%`
    }

   
    //Handles product details data
    return ( 
        <>
        {
            details.map(values => (
                <div className="details" key={values.id}>
                    <div className="img-container" onMouseMove={handleMouseZoom} 
                    style={{backgroundImage: `url(${values.image})`}}
                    ref={imgDiv}/>
        
                
                <div className="box-details">
                    <h2 title={values.title}>{values.title}</h2>
                    <h3>{"$" + values.price}</h3>
        
                <p>{values.description}</p>
                <button className="cart" onClick={() => addCart(values.id)}>
                    Add to cart</button>
                </div>
            </div>
                
            
             ))

        }
        
        </>
    );
}