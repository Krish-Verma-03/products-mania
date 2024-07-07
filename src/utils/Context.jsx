import {  createContext, useState, useEffect } from "react";
import axios from "./Axios";

export const ProductContext = createContext();
const Context = (props)=>{
    const isData = JSON.parse(localStorage.getItem('products'));
    console.log(isData);
    const [products , setproducts]=useState(
        JSON.parse(localStorage.getItem('products')) || null
    );

    const getproducts = async ()=>{
        try{
            const {data} = await axios("/products");
            setproducts(data);
            
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        if(!isData)
        getproducts()
    },[]);

    return(
        <ProductContext.Provider value={[products , setproducts]}>
            {props.children}
        </ProductContext.Provider>
    )
    
}
export default Context