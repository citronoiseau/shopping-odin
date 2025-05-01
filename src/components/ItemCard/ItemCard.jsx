import styles from "./ItemCard.module.css";

const itemCard = (item) => {
    return (
        <div>
            <div className={styles.imageContainer}>
                <img className={styles.img} src={item.item.image} />
            </div>
            <div> {item.item.title} </div>
            <div> {item.item.price} </div>

        </div>

    )
}

export default itemCard;