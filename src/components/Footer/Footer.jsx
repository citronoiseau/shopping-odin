import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div> Inspired by Levi's website</div>
      <div> Made with love by  <a href="https://github.com/citronoiseau" target="_blank" > citronoiseau </a></div>
    </footer>
  );
};

export default Footer;