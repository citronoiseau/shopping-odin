import App from "./App";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import CartPage from "./pages/CartPage/CartPage";
import ItemPage from "./pages/ItemPage/ItemPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "shop",
        element: <ShopPage />,
        children: [
          { path: ":filter", element: <ShopPage /> },
        ],
      },
      { path: "shop/clothes/:item", element: <ItemPage /> },
      { path: "cart", element: <CartPage /> },
    ],
  },
];
export default routes;
