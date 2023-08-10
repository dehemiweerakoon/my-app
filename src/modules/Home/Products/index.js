import React, { useEffect, useState } from "react";
import Product from '../../../Product'
import Products from '../../../components/Header/Products'
import Footer from "../../../components/Header/Footer";
import FeatureCard from "../../../components/Header/FreatureCard";


const Productcard = () => {
    const [categories, setCategories] = useState([])
  useEffect(() => {
    const fetchCategory = async () => {
      const response = await fetch(`https://dummyjson.com/products/categories`);
      const data = await response.json();
      console.log(data);
      setCategories(data);
    };
    fetchCategory();
  }, [])
  if(categories.length==0){
    return <div>Loading....</div>
  }
  return (
     <><FeatureCard cards={categories} /><Products /><Footer /></>
  )
}

export default Productcard