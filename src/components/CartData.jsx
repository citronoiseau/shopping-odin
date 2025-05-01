import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addItem = (newId, newAmount) => {
    const existingItem = items.find(item => item.id === newId);
    if (existingItem) {
      setItems(items.map(item =>
        item.id === newId
          ? { ...item, amount: item.amount + newAmount }
          : item
      ));
    } else {
      setItems([...items, { id: newId, amount: newAmount }]);
    }
  };

  const increaseAmount = (id) => {
    setItems(items.map(item =>
      item.id === id
        ? { ...item, amount: item.amount + 1 }
        : item
    ));
  };

  const decreaseAmount = (id) => {
    setItems(items.map(item =>
      item.id === id
        ? { ...item, amount: Math.max(item.amount - 1, 1) } 
        : item
    ));
  };

  return (
    <CartContext.Provider value={{ items, addItem, deleteItem, increaseAmount, decreaseAmount }}>
      {children}
    </CartContext.Provider>
  );
}