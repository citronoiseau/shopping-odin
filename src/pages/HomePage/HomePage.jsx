import styles from "./HomePage.module.css";
import { NavLink } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import ItemCard from "../../components/ItemCard/ItemCard";
const HomePage = () => {
  const { clothingItems  } = useOutletContext();

  let shuffled = clothingItems
  .map((value) => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)
  .slice(0, 5); 

  return (
  <div className={styles.homepageContainer}>
    <div className={styles.landingContainer}> 
      <div className={styles.photoContainer}> 
        <span> Made with you in mind </span>
        <img src="/pictures/landing.jpg" alt="landing photo" />
      </div>
      <div className={styles.photoAttribution}>
        Photo by <a href="https://unsplash.com/@forcemajeure?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
        Force Majeure</a> on <a href="https://unsplash.com/photos/man-and-woman-in-white-and-gray-force-majeure-printed-crew-neck-t-shirts-standing-near-gray-concrete-wall-00tlC0Clfrs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"> Unsplash </a>
      </div>
    </div>

    <div className={styles.infoContainer}> 
      <h2> STYLISH AND SIMPLE</h2>
      <NavLink to="/shop" end className={styles.navLink}>SHOP NOW</NavLink>
    </div>

    <div className={styles.trendingContainer}> 
      <h2>TRENDING</h2>
      <div className={styles.trendingItems}> 
      {shuffled.length === 0 ? (
          <div className="loading">Loading...</div>
        ) : (
          shuffled.map((item) => (
            <ItemCard item={item} key={item.id}/>
          ))
        )}
      </div>
    </div>

    <div className={styles.newCollection}> 
      <h2> NEW COLLECTION ARRIVED</h2>
      <div className={styles.photoContainer}> 
      <span> Every day, every night, every occasion </span>
        <img src="/pictures/new.png" alt="new arrivals photo" />
      </div>
      <div className={styles.photoAttribution}>
        Photo by <a href="https://unsplash.com/@forcemajeure?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
        Force Majeure</a> on <a href="https://unsplash.com/photos/Tqv3noCldRc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
      </div>
    </div>
    
  </div>
  )
}

export default HomePage;