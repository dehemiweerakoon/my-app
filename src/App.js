import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './modules/Home';
import {Routes,Route} from  'react-router-dom';
import Product from './Product';
import Productcard from './modules/Home/Products';
import CategoryProduct from './components/CategoryProduct';
import Cart from './components/cart';

function App() {
  return (
    <div>
      <Header/>
       <Routes>
         <Route path="/" element={<Home/>}/> 
         <Route path="/products/:id" element={<Product/>}/> 
         <Route path="/products" element={<Productcard/>}/>
         <Route path="/categories/:name" element={<CategoryProduct/>}/>
         <Route path="/cart" element={<Cart/>}/>
         {/* <Route path="/products" element={<ProductCards/>}/> */}

      </Routes> 
     
    </div>
  );
}

export default App;
