import React from 'react'
import Product from '../components/Product'

function HomeScreen(props) {
  const {products} = props
  return (
    <div className="row center">
      {
      products.map(product=>(
         <Product key={product._id} product={products}/>  
        ))
      }  
      </div> 
      
      
     
  )
}

export default HomeScreen