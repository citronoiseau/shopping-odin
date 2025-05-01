import { NavLink } from "react-router-dom"; 
import SearchBar from "../SearchBar";
import styles from "./NavBar.module.css";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.burger} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className={`${styles.main} ${isMenuOpen ? styles.active : ""}`}>
      <span className={styles.closeBtn} onClick={toggleMenu}>X</span>
         <NavLink to="/" end>Zazza</NavLink>
         <NavLink to="/shop/women" end>Women</NavLink>
         <NavLink to="/shop/men" end>Men</NavLink>
         <NavLink to="/shop/jewelery" end>Jewelery</NavLink>
      </div>


      <div className={styles.secondary}>
          <SearchBar />
          <NavLink to="/account" end>Profile</NavLink>
          <NavLink to="/account/favorites" end>Favorites</NavLink>
          <NavLink to="/cart">Shopping Cart</NavLink>
        </div>
    </nav>
  );
};

export default NavBar;
