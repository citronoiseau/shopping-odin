import { NavLink } from "react-router-dom"; 
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <nav>
      <div className="main"> 
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/shop/women" end>
          Women
        </NavLink>
        <NavLink to="/shop/men" end>
          Men
        </NavLink>
        <NavLink to="/shop/acessories" end>
          Accessories
        </NavLink>
 
      </div>
      <div className="secondary">
        <SearchBar />
        <NavLink to="/account" end> 
          Profile 
        </NavLink>
        <NavLink to="/account/favorites" end> 
          Favorites
        </NavLink>
        <NavLink to="/cart">Shopping Cart </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;