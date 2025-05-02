import { useOutletContext } from "react-router-dom";
import styles from "./HomePage.module.css";
import { useCart } from "../../components/CartData";
import { useOutletContext } from "react-router-dom";
const HomePage = () => {
  const { items } = useCart();
  

  return (
  <div>
    <div className={styles.landingContainer}> 
      <div className={styles.photoContainer}> 
        <span> Made with you in mind </span>
        <img src="/pictures/landing.jpg" alt="landing photo" />
      </div>
      <div className={styles.photoAttribution}>
      Photo by <a href="https://unsplash.com/@forcemajeure?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Force Majeure</a> on <a href="https://unsplash.com/photos/man-and-woman-in-white-and-gray-force-majeure-printed-crew-neck-t-shirts-standing-near-gray-concrete-wall-00tlC0Clfrs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
      Unsplash</a>
      </div>
    </div>
  </div>
  )
}

export default HomePage;