import { useParams } from "react-router-dom"; 
import { useOutletContext } from "react-router-dom";
import ItemCard from "../components/ItemCard/ItemCard";

const categories = ["men", "women", "jewelery"];

function getCorrectFilter(filter) {
  if (filter === "men") {
    return "men's clothing"
  } 
  else if (filter === "women") {
    return "women's clothing"
  }
  return "jewelery";
}

function getFilteredItems(filter, items) {
  if (filter) {
    let filteredItems;
  if (categories.includes(filter)) {
    const newFilter = getCorrectFilter(filter)
    filteredItems = items.filter(item => item.category === newFilter);
  } else {
    filteredItems = items.filter(item =>
      
      item.title.toLowerCase().includes(filter.toLowerCase())
    );
  }
    return filteredItems
  } else {
    return items
  }
 
}

const ShopPage = () => {
  const { filter} = useParams(); 
  const { shopItems } = useOutletContext();
  const filteredItems = getFilteredItems(filter, shopItems)
    return (
      <div>
      <h1>Shop</h1>
      {filter && categories.includes(filter) && <h2>Category: {filter}</h2>} 
      {filter && !categories.includes(filter) && <h2>Searching: {filter}</h2>} 
      {filteredItems.length > 0 ? filteredItems.map((item) => (
        <ItemCard key={item.id} item={item} />
      )) : (
        <div>No items found</div>
      )}
    </div>
    );
  };
  
  export default ShopPage;