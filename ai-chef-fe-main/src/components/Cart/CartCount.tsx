import { useCartSlice } from "../../hooks/redux/useSlices";
import { FaShoppingCart } from "react-icons/fa";
import BaseText from "../Text/BaseText";

const CartCount = () => {
  const { cart = [] } = useCartSlice();

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.count * item.price,
    0
  );

  const priceText = `${totalPrice.toFixed(2)}$`;

  return (
    <div className="flex bg-koz-dust rounded-full justify-between items-center space-x-2 p-3 min-w-[120px]">
      <FaShoppingCart size={30} className="text-koz-red" />
      <BaseText className="text-koz-red text-lg text" text={priceText} />
    </div>
  );
};

export default CartCount;
