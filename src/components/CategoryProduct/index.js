import React from 'react'
import { useParams } from 'react-router'
import Products from '../Header/Products'
import { useState,useEffect } from 'react'
const CategoryProduct = () => {
    
    const {name}=useParams()
    const [products, setProduct] = useState([])
    useEffect(() => {
      const fetchProduct = async () => {
        const response = await fetch(`https://dummyjson.com/products/category/${name}`);
        const data = await response.json();
        console.log(data);
        setProduct(data.products);
      };
      fetchProduct();
    }, [])
    if(products.length===0) return <div>Loading</div>
  return (
    <Products products={products} />
  )
}

export default CategoryProduct