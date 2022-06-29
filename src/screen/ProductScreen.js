import React from 'react'
import { Link } from 'react-router-dom'
import Data from '../components/Data'
import Rating from '../components/Rating'
import {useParams} from 'react-router'
function ProductScreen() {
  
   const {id} = useParams();
  const product = Data.products.find((x)=>x._id === id);
  
    //props.match.params.
    if(!product){
        return <div>Products not found</div>
    }
  return (
    <div>
        <Link to="/">Back to results</Link>
      <div className='row top'>
          <div className='col-2'>
         <img className='large' src={product.image} alt={product.name}/>
          </div>
          <div className='col-1'>
           <ul>
               <li>
                   <h1>{product.name}</h1>
               </li>
               <li>
                   <Rating rating={product.ratings} numReviews={product.numReviews} />
               </li>
               <li>
                   Price :${product.price}
               </li>
               <li>
                   Description:${product.description}
               </li>
           </ul>
          </div>
          <div className='col-1'>
             <div className='card card-body'>
                 <ul>
                     <li>
                         <div className='row'>
                             <div>Price</div>
                             <div className='price'>{product.price}</div>
                         </div>
                     </li>
                     <li>
                         <div className='row'>
                             <div>Status</div>
                             <div className='price'>{product.countInStock>0?(<span className='success'>In stock</span>):(<span className='danger'>Unavailable</span>
                              ) }
                             </div>
                         </div>
                     </li>
                     <li>
                         <button className='primary block'>
                            Add to cart
                         </button>
                     </li>
                 </ul>

             </div>
          </div>

      </div>
    </div>
  )
 }

export default ProductScreen