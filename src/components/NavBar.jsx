import { NavLink } from "react-router";

export function NavBar() {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/shop" end>
        Shop
      </NavLink>
      <NavLink to="/cart">Shopping Cart </NavLink>
    </nav>
  );
}