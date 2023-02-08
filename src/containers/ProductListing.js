import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductComponent } from './ProductComponent';
import axios from "axios";
import { setProducts } from '../redux/actions/productActions';
export const ProductListing = () => {
    const products=useSelector((state)=>state);
    const dispatch=useDispatch()
    
    const fecthProducts=async()=>{
      const response=await axios.get('https://fakestoreapi.com/products').catch((err)=>{console.log("Err",err)});
      dispatch(setProducts(response.data));
      console.log(response.data);
    }
    useEffect(()=>{
      fecthProducts();
    },[])

    console.log("products: ", products);
    return (
    <div className='ui grid container'> 
    <h1>Latest Products:</h1>
    <div className='row'>      
        <ProductComponent/>
        </div>
    </div>
  )
}