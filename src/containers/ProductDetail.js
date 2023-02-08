import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom'
import {selectedProducts, removeSelectedProduct} from '../redux/actions/productActions'
import axios from 'axios'

export const ProductDetail = () => {
  const product= useSelector((state)=>state.product);
  const {productId}=useParams();
  const dispatch=useDispatch();
const {id,title,image,category, price, description}=product;
  const fetchProductDetails=async ()=>{
    const response=await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err)=>{console.log(`Error :`, err)});
    dispatch(selectedProducts(response.data))
    //console.log("Detils" , response)
  }
  useEffect(()=>{
    //fetchProductDetails()
    if(productId && productId !=="")fetchProductDetails();
    return ()=>{dispatch(removeSelectedProduct());}
  },[])
  return (
    <div className='ui grid container'>
        {Object.keys(product).length===0?(<div>Loading...</div>):(
          <div className='row detail-wrap'>
            <div className='detail-img col-md-6'>
              <img src={image}/>
            </div>
            <div className='detail-desc  col-md-6'>
                <h2>{title}</h2>
                <h5>${price}</h5>
                <h4>{category}</h4>
                <p>{description}</p>
                <div className=''>
                    <div className=''>Add to cartz</div>
                </div>
            </div>
          </div>
        )}
    </div>
  )
}