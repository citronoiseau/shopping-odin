import { useNavigate } from 'react-router-dom';
import styles from "./ItemCard.module.css";

const itemCard = (item) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/shop/clothes/${item.item.id}`);
      };

    return (
        <button className={styles.itemContainer} onClick={handleClick}>
            <div className={styles.imageContainer}>
              <img className={styles.img} src={item.item.image} />
            </div>
            <div className={styles.itemDetails}>
              <div className={styles.title}>{item.item.title}</div>
              <div className={styles.price}>${item.item.price}</div>
            </div>
      </button>

    )
}

export default itemCard;