import './App.css';
import { NavBar } from './components/NavBar';
import { Outlet } from 'react-router-dom'; 

function App() {

  return (
    <>
      <h1>Hello World</h1>
      <NavBar />
      <Outlet />
    </>
  )
}

export default App
