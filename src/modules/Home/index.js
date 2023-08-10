import React, { useEffect, useState } from 'react'
import Hero from '../../components/Header/Hero'
import Products from '../../components/Header/Products'
import Footer from '../../components/Header/Footer'
import Productcard from './Products'
import Paginate from '../../components/Pagination'

const Home = () => {
  const [products,setProducts]=useState([])  
     const [currentPage, setCurrentPage] = useState(2);
      const [productsPerPage,setProductsperpage] = useState(20);
  useEffect(()=>{
    const fetchProducts=async()=>{
     const lastPostIndex=currentPage*productsPerPage;
     const FirstpostIndex=lastPostIndex-productsPerPage;
     
      const response=await fetch('https://dummyjson.com/products?limit=100');
      const data=await response.json();
      console.log(data);
      //products.slice(lastPostIndex,FirstpostIndex);
     console.log(lastPostIndex+" hi"+FirstpostIndex);
      setProducts(data.products.slice(FirstpostIndex,lastPostIndex));
    }
    fetchProducts();
  },[])

  return (
     <><Hero /><h2 className="text-6xl font-bold text-center mt-20">Products</h2>
     <Productcard/>
     <Products products={products} /><div></div>
     <Paginate totalpage={100}  postsPerpage={postsPerpage}/>
     <Footer /></>
    
  
  )
}

export default Home