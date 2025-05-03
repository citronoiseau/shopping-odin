import './App.css';
import { Outlet } from 'react-router-dom'; 
import StoreAPI from "./utils/StoreAPI";
import NavBar from './components/navbar/NavBar';
import { CartProvider } from './utils/CartData';

function App() {
  const items = StoreAPI();
  const clothingItems = items.filter(item => item.category !== "electronics");

  return (
    <>
    <CartProvider> 
      <NavBar />
      <Outlet context={{ clothingItems }} /> 
      </CartProvider>
    </>
  )
}

export default App
