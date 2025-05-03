import { Link } from "react-router-dom";
import styles from "./ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <div className={styles.pageContainer}> 
      <h1>Not implemented yet</h1>
      <Link to="/">
        GO BACK
      </Link>
    </div>
  );
};

export default ErrorPage;