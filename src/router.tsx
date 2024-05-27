import { createBrowserRouter } from 'react-router-dom';

import GlobalLayout from './layouts/GlobalLayout';
import CartConfirmPage from './pages/CartConfirmPage';
import CartPage from './pages/CartPage';
import PaymentConfirmPage from './pages/PaymentConfirmPage';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <GlobalLayout />,
      children: [
        {
          index: true,
          element: <CartPage />,
        },
        {
          path: 'confirm',
          element: <CartConfirmPage />,
        },
        {
          path: '/payment-confirm',
          element: <PaymentConfirmPage />,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  },
);
