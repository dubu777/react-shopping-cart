import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { CartPage, OrderConfirmPage } from "./pages/index.ts";
import GlobalStyle from "./GlobalStyle.tsx";
import { ROUTE_PATH } from "./constants/route.ts";

const router = createBrowserRouter(
  [
    {
      path: ROUTE_PATH.base,
      element: <CartPage />,
    },
    {
      path: ROUTE_PATH.cartConfirm,
      element: <OrderConfirmPage />,
    },
  ],
  { basename: "/react-shopping-cart" }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot>
      <GlobalStyle />
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
);
