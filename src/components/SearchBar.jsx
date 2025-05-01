import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/shop/${search}`);  
  };
    
  return (
      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
          placeholder="Search products..."
        />
        <button type="submit">Search</button>
      </form>
 )
};

export default SearchBar;