import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
export const ProductComponent = () => {
const products=useSelector((state)=>state.allProducts.product);
// const{id,title,category}=products[0];
// console.log(`all products:`, products);

const renderList=products.map((product)=>{    
    const{id,title,category,price,image}=product;
  return (
              
        <div className='col-6 col-md-3 mb-4 product-list' key={id}>
            <Link to={`/product/${id}`}>
            
            <div className='card'>
                <div className='image'>
                    <img src={image} alt={title}/>
                </div>
                    <div className='content'>
                        <div className='header'> {title}</div>      
                        <div className=''>{price}</div> 
                        <div className=''>{category}</div>                 
                    </div>                
            </div>
            </Link>
        </div>
 
  )
});
return (
    <>
      {renderList}
    </>
  )
}
