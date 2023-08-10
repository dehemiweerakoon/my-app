import React from "react";
import { Link ,useState} from 'react';

const Products = ({ products = [] }) => {

  // const [currentPage, setCurrentPage] = useState(1);
  // const [productsPerPage] = useState(20);
 // const products=products1.slice(1,10);

  
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.map((product) => {
            const{id,title,price,description,category,thumbnail}=product;
            return (
              <a href={`/products/${id}`} className="lg:w-1/4 md:w-1/2 p-4 w-full border border-opacity-59 mb-4 cursor-pointer">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt={title}
                    className="object-contain  object-center w-full h-full block"
                    src={thumbnail}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-xl font-medium">
                    {title}
                  </h2>
                  
                  <p className="mt-1 text-md font-semibold">${price}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
