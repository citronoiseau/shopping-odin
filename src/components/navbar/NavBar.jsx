import { NavLink } from "react-router-dom"; 
import SearchBar from "../searchbar/SearchBar";
import styles from "./NavBar.module.css";
import { useState } from "react";
import { useCart } from "../../utils/CartData";
const NavBar = () => {
  const { items } = useCart();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <button className={styles.burger} onClick={toggleMenu}>
        <img src="/icons/burger.svg" alt="small burger menu"/>
      </button>

      <div className={`${styles.main} ${isMenuOpen ? styles.active : ""}`}>
      <button className={styles.closeBtn} onClick={toggleMenu}>
      <img src="/icons/close.svg" alt="close button"/>
        </button>
        <NavLink to="/" end className={`${styles.navLink} ${styles.logo}`}>
            SAZZA
          </NavLink>
          <NavLink to="/shop/women" end className={styles.navLink}>WOMEN</NavLink>
          <NavLink to="/shop/men" end className={styles.navLink}>MEN</NavLink>
          <NavLink to="/shop/jewelery" end className={styles.navLink}>JEWELERY</NavLink>
      </div>

      <div className={styles.smallLogo}>
        <NavLink to="/" end className={styles.navLink}>S</NavLink>
      </div>

      <div className={styles.secondary}>
          <SearchBar />
          <NavLink to="/account" end className={styles.navLink}> <img src="/icons/account.svg" alt="profile link"/></NavLink>
          <NavLink to="/account/favorites" end className={styles.navLink}><img src="/icons/favorites.svg" alt="favorites link"/></NavLink>
          <NavLink to="/cart" className={styles.navLink}>
            <div className={styles.cartContainer}> 
              {items.length > 0 && 
              (<span> {items.reduce((total, item) => total + item.amount, 0)}
              </span>)}
  
              <img src="/icons/cart.svg" alt="shopping cart link"/>
            </div>
          </NavLink>
        </div>
    </nav>
  );
};

export default NavBar;
