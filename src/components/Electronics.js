import React, {useContext} from "react";
import { DataContext } from "./DataProvider";
import { Link } from "react-router-dom";


export default function Electronics() {

    const value = useContext(DataContext)
    const [products] = value.products;
    const addCart = value.addCart
  
    //Filter categorys
    const updatedList = products.filter((x)=>x.category === "electronics");
     
    //Handles data
    return (
        <>
       <div className="products">
      {
        updatedList.map(values => (
          <div className="card" key={values.id}>
            <Link to={`/products/${values.id}`}>
              <img src={values.image} alt=""/>
            </Link>
            <div className="box">
              <h3 title={values.title}>
                <Link to={`/products/${values.id}`}>{values.title.substring(0)}</Link>
              </h3>
              {/*<p>{values.description}</p>*/}
              <h4>{"$" + values.price}</h4>
              <button onClick={() => addCart(values.id)}>
                Add to cart</button>
            </div>
          </div>
        ))
      }
      </div>
        </>
    );

}

        