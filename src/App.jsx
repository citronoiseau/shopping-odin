import './App.css';
import { Outlet } from 'react-router-dom'; 
import StoreAPI from "./utils/StoreAPI";
import NavBar from './components/navbar/NavBar';

function App() {
  const shopItems = StoreAPI();
  
  return (
    <>
      <NavBar />
      <Outlet context={{ shopItems }} /> 
    </>
  )
}

export default App
