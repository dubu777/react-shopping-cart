import { Link } from "react-router-dom";
import { mainPath } from "../../constants";
import { useEffect } from "react";
import { Product, updateLocalStorage } from "../../utils/LocalStorage";

export default function Home() {
    useEffect(() => {
    const products: Product[] = [
      { name: 'Apple', price: 1500 },
      { name: 'Banana', price: 2500 },
      { name: 'Cherry', price: 1800 },
      { name: 'Date', price: 2200 },
      { name: 'Elderberry', price: 2000 },
    ];

    const filteredProducts = updateLocalStorage(products);

    console.log(filteredProducts);
  }, []);
  return (
      <Link to={mainPath.CART}>
        장바구니 가기
      </Link>
  ) 
}

