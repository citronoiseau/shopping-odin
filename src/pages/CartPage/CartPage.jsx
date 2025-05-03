import styles from "./CartPage.module.css";
import { useCart } from "../../utils/CartData";
import { useOutletContext } from "react-router-dom"; 

const findItems = (cartItems, allClothingItems) => {
  return cartItems.map(cartItem => {
    const product = allClothingItems.find(clothingItem => clothingItem.id === cartItem.id);
    return product ? { ...product, amount: cartItem.amount } : null;
  }).filter(Boolean);
};

const CartPage = () => {
  const { items, deleteItem, increaseAmount, decreaseAmount, clearCart } = useCart(); 
  const { clothingItems } = useOutletContext();

  const cartItems = findItems(items, clothingItems);

  if (items.length === 0) {
    return (
      <div className={styles.cartPage}>
        <h1>No items in the cart</h1>
      </div>
    );
  }

  return (
    <div className={styles.cartPage}>
      <h1> SHOPPING BAG </h1>
      <div className={styles.cartContainer}> 
      <div className={styles.itemsContainer}> 
        {cartItems.map(item => (
          <div key={item.id} className={styles.itemContainer}> 
            <div className={styles.imageContainer}>
              <img src={item.image} alt={item.title} /> 
            </div>
            <div className={styles.infoContainer}>
              <h1>{item.title}</h1>
              <div>${item.price}</div>
              <div className={styles.quantity}>
                <button onClick={() => decreaseAmount(item.id)}> - </button>
                <span>{item.amount}</span>
                <button onClick={() => increaseAmount(item.id)}> + </button>
              </div>
              <button className={styles.removeBtn} onClick={() => deleteItem(item.id)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
     

      <div className={styles.checkout}> 
        <h2>Checkout</h2>
        <div> Total: ${cartItems.reduce((total, item) => total + (item.amount * item.price), 0).toFixed(2)} </div>
        <button className={styles.payBtn} onClick={() => clearCart()}> Pay </button>
      </div>
      </div>
    </div>
  );
}
export default CartPage;