import './App.css';
import { Outlet } from 'react-router-dom'; 
import StoreAPI from "./utils/StoreAPI";
import NavBar from './components/navbar/NavBar';
import { CartProvider } from './components/CartData';
function App() {
  const shopItems = StoreAPI();
  
  return (
    <>
    <CartProvider> 
      <NavBar />
      <Outlet context={{ shopItems }} /> 
      </CartProvider>
    </>
  )
}

export default App
