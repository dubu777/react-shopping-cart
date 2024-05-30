import { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import useCartItems from "@/hooks/carts/useCartItems";
import useCouponSelections from "@/hooks/coupons/useCouponSelections";
import useShippingArea from "@/hooks/carts/useShippingArea";

import PurchaseLayout from "@/layouts/PurchaseLayout";

import ErrorFallback from "@/components/_common/ErrorFallback";
import { NavigationButton, BackButton } from "@/components/button";
import { Header, OrderConfirm, Loading } from "@/components/index";

import { ROUTE_PATH } from "@/constants/route";

const PaymentConfirmPage = () => {
  const navigate = useNavigate();

  const { reloadCartItems } = useCartItems();
  const { resetSelectedCoupons } = useCouponSelections();
  const { resetShippingArea } = useShippingArea();

  const handleMoveToHomePage = () => {
    reloadCartItems();

    resetSelectedCoupons();
    resetShippingArea();

    navigate(ROUTE_PATH.base);
  };

  return (
    <>
      <Header>
        <BackButton />
      </Header>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<Loading />}>
          <PurchaseLayout>
            <OrderConfirm />
          </PurchaseLayout>
          <NavigationButton
            buttonText="장바구니로 돌아가기"
            onButtonClick={handleMoveToHomePage}
          />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default PaymentConfirmPage;
