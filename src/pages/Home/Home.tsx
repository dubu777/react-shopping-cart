import { Link } from "react-router-dom";
import { mainPath } from "../../constants";

export default function Home() {

  return (
      <Link to={mainPath.CART}>
        장바구니 가기
      </Link>
  ) 
}

