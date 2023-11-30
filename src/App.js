import logo from './logo.svg';
import './App.css';
import Login from './Component/app/Login/Login';
import Nav from './Component/app/Navigation/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Component/app/Footer/Footer';
import Register from './Component/app/Register/Register';
import Payment from './Component/app/Payment/Payment';
import Cart from './Component/app/Cart/Cart';
import Order from './Component/app/Order/Order';
import CartCheckout from './Component/app/CartCheckout/CartCheckout';
import ProductDetail from './Component/app/ProductDetail/ProductDetail';
import Product from './Component/app/Product/Product';
import HomePage from './Component/app/HomePage/HomePage';
import { AuthProvider } from './Component/Context/Context';
import Update from './Component/app/Update/Update';
import { useState } from 'react';
import CartEmpty from './Component/app/CartEmpty/CartEmpty';

function App() {

  const [isLogin, setIsLogin] = useState(false);
  const handleLogin = () => {
    setIsLogin(true)
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Nav isLogin = {isLogin} onLogin = {handleLogin}/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path='/payment' element={<Payment/>}/>
          <Route path='/order' element={<Order/>}/>
          <Route path='/cart/checkout' element={<CartCheckout/>}/>
          <Route path='/product/detail' element={<ProductDetail/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/product/banh_ngot' element={<Product/>}/>
          <Route path='/product/banh_trang_mieng' element={<Product/>}/>
          <Route path='/product/banh_kho' element={<Product/>}/>
          <Route path='/cart/empty' element={<CartEmpty/>}/>
          <Route path='/story' element = {<Update/>}/>
          <Route path='/news' element = {<Update/>}/>
          <Route path='/contact' element = {<Update/>}/>
          <Route path='/bell' element= {<Update/>}/>
          <Route path="*" element={'404 NOT FOUND'}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
