import { Link, useParams, useOutletContext } from "react-router-dom";
import styles from "./ItemPage.module.css";
import { useCart } from "../../utils/CartData";
import { useState } from "react";

const ItemPage = () => {
    const { addItem} = useCart();
    const { item } = useParams(); 

    const { clothingItems } = useOutletContext();
    const [amount, setAmount] = useState(1);

    const selectedItem = clothingItems.find((clothingItem) => clothingItem.id.toString() === item);
  
    if (!selectedItem) {
      return (
        <div>
          <h2>Item not found</h2>
          <Link to="/">Go back</Link>
        </div>
      );
    }
  
    return (
    <div className={styles.itemContainer}> 
        <div className={styles.imageContainer}>
            <img src={selectedItem.image} alt={selectedItem.title} /> 
        </div>
        <div className={styles.infoContainer}>
        <h1>{selectedItem.title}</h1>
        <p> {selectedItem.description} </p>
        <div>${selectedItem.price}</div>
        
          <div className={styles.quantity}>
            Select Quantity
            <button onClick={() => setAmount(prev => Math.max(prev - 1, 1))}> - </button>
            <span>{amount}</span>
            <button onClick={() => setAmount(prev => prev + 1)}> + </button>
          </div>
          <button onClick={() => addItem(selectedItem.id, amount)}>
            Add To Bag
          </button>
        </div>
    </div>

    );
  };
  
  export default ItemPage;