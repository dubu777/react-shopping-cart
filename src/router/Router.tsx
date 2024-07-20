import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { mainPath } from "../constants";
import Root from "./Root";
import Home from "../pages/Home/Home";
import Cart from "../pages/Cart/Cart";
import Order from "../pages/Order/Order";
import Completed from "../pages/Completed/Completed";

const Router = () => {
  const orderRouter = createBrowserRouter([
    {
      path: mainPath.HOME,
      element: <Root />,
      children: [
        {
          path: mainPath.HOME,
          element: <Home />,
        },
        {
          path: mainPath.CART,
          element: <Cart />,
        },
        {
          path: mainPath.ORDER,
          element: <Order />,
        },
        {
          path: mainPath.COMPLETED,
          element: <Completed />,
        }
      ],
    },
  ]);

  return <RouterProvider router={orderRouter} />;
};

export default Router;
