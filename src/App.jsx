import './App.css';
import { Outlet } from 'react-router-dom'; 
import StoreAPI from "./utils/StoreAPI";
import NavBar from './components/navbar/NavBar';
import { CartProvider } from './utils/CartData';
import Footer from './components/Footer/Footer';

function App() {
  const items = StoreAPI();
  const clothingItems = items.filter(item => item.category !== "electronics");

  return (
    <div className="appContainer">
      <CartProvider> 
        <NavBar />
        <main className="mainContent">
          <Outlet context={{ clothingItems }} />
        </main>
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App
