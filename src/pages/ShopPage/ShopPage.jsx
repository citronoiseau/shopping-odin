import { useParams } from "react-router-dom"; 
import { useOutletContext } from "react-router-dom";
import ItemCard from "../../components/ItemCard/ItemCard";
import styles from "./ShopPage.module.css";

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
  const { clothingItems  } = useOutletContext();
  const correctFilter = getCorrectFilter(filter);
  const filteredItems = getFilteredItems(filter, clothingItems )
    return (
      <div className={styles.shopContainer}>
        <h1> CATALOG </h1>
          {filter && categories.includes(filter) && <h2>{correctFilter}</h2>} 
          {filter && !categories.includes(filter) && <h2>Searching: {filter}</h2>} 
          <div className={styles.itemsContainer}> 
          {filteredItems.length > 0 ? filteredItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          )) : (
            <div>No items found</div>
          )}
          </div>
    </div>
    );
  };
  
  export default ShopPage;