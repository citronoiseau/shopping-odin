import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./SearchBar.module.css";


const SearchBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch("");
    navigate(`/shop/${search}`);  
  };
    
  return (
      <form className={styles.searchContainer} onSubmit={handleSearch} id="searchForm">
        <input className={styles.searchBar} 
          type="text" 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
          placeholder="What are you looking for?"
        />
        <div className={styles.imgContainer}> <img src="/icons/search.svg" alt="search-icon"/></div>
      </form>
 )
};

export default SearchBar;