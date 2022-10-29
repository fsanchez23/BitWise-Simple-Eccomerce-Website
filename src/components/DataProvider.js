import React, {createContext, useState, useEffect} from 'react'

export const DataContext = createContext()

export const DataProvider = (props) => {
    const [products, setProducts] = useState([]);
    const [cart,setCart] = useState([]);

    

    //Adds to cart from products page
    const addCart = (id) => {
      const check = cart.every(item => {
        return (item.id !== id);
      } )
      //Checks if products is present
      if(check) {
        const data = products.filter(product => {
          return product.id === id;
        })
        //sets cart data if true
        setCart([...cart, ...data])
      } else {
        alert("Product has been added")
      }
    }

    //Gets local storage item
    useEffect(() => {
      const dataCart = JSON.parse(localStorage.getItem('dataCart'))
      if(dataCart) setCart(dataCart)
    },[])

    //Sets local storage item
    useEffect(() => {
      if(cart.length !== 0) {
      localStorage.setItem('dataCart', JSON.stringify(cart))
      }
    },[cart])

   
    //value object to handle cart, addCart, and products data
    const value = {
      products: [products, setProducts],
      cart: [cart,setCart],
      addCart: addCart
    }

    //Grabs api json data
    useEffect(() => {
    grabApi();
  },[])

  //sets json data to products
  const grabApi = async() => {
    const response = await fetch("https://fakestoreapi.com/products");
    const jsonData = await response.json();
      setProducts(jsonData)
  }
    return (
        <DataContext.Provider value={value}>
          {props.children}
        </DataContext.Provider>
    );
}