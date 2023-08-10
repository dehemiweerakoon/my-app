import React, { useEffect, useState } from 'react'
import Hero from '../../components/Header/Hero'
import Products from '../../components/Header/Products'
import Footer from '../../components/Header/Footer'
import Productcard from './Products'
import Paginate from '../../components/Pagination'
import Search from '../../components/Search'

const Home = () => {
  const [products,setProducts]=useState([])  
     const [currentPage, setCurrentPage] = useState(1);
      const [productsPerPage,setProductsperpage] = useState(10);
  useEffect(()=>{
    const fetchProducts=async()=>{
    
     
      const response=await fetch('https://dummyjson.com/products?limit=100');
      const data=await response.json();
      console.log(data);
      //products.slice(lastPostIndex,FirstpostIndex);
     console.log(lastPostIndex+" hi"+FirstpostIndex);
      setProducts(data.products);
    }
    fetchProducts();
  },[])
    const lastPostIndex=currentPage*productsPerPage;
     const FirstpostIndex=lastPostIndex-productsPerPage;
     const products1 =products.slice(FirstpostIndex,lastPostIndex);
  return (
     <><Hero /><h2 className="text-6xl font-bold text-center mt-20">Products</h2>
     {/* <Productcard/> */}
     {/* <Search  products={products} /> */}
     <Products products={products1} /><div></div>
     <Paginate totalpage={100}  postsPerpage={10} setCurrentPage={setCurrentPage}/>
     <Footer /></>
    
  
  )
}

export default Home