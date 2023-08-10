import React from "react";
import Home from "../../modules/Home";
import {Link} from 'react-router-dom'

const Header = () => {

  const navigation=[
   {
    name:'Home',
    path:"/"
   },
   {
    name:'Products',
    path:"/products"
   }

  ]
  return (
    <header className="text-gray-600 body-font shadow-xl">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-white p-2 bg-pink-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <Link to='/' className="ml-3 text-xl">E -Commerce shop</Link>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {
            navigation.map((navigation)=>{
              return(
             <Link to={navigation.path} className="mr-5 hover:text-gray-900">{navigation.name}</Link>
              )
            })
          }
          {/* <a className="mr-5 hover:text-gray-900">First Link</a>
          <a className="mr-5 hover:text-gray-900">Second Link</a> */}
          {/* <a className="mr-5 hover:text-gray-900">Third Link</a>
          <a className="mr-5 hover:text-gray-900">Fourth Link</a> */}
        </nav>
        <Link to="/cart" className="inline-flex items-center bg-pink-400 border-0 py-1 px-3 focus:outline-none hover:bg-pink-100 rounded text-base mt-4 md:mt-0">
          Go to Cart
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </header>
  );
};

export default Header;
