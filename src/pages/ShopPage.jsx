import { useParams } from "react-router-dom"; 
import { useOutletContext } from "react-router-dom";

const categories = ["men", "women", "acessories"];

const ShopPage = () => {
  const { filter} = useParams(); 
  const { shopItems } = useOutletContext();
    return (
      <div>
      <h1>Shop</h1>
      {filter && <h2>Category: {filter}</h2>} 
    </div>
    );
  };
  
  export default ShopPage;