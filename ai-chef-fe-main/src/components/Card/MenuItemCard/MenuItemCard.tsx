import { FC, useCallback } from "react";
import { twMerge } from "tailwind-merge";
import BaseText from "../../Text/BaseText";
import TitleText from "../../Text/TitleText";
import { useMenuItemInCart } from "../../../hooks/redux/useCart";
import { useAppDispatch } from "../../../hooks/redux/useRedux";
import {
  addMenuItemToCart,
  removeMenuItemFromCart,
} from "../../../store/slices/appCartSlice";
import BaseButton from "../../Button/BaseButton";

export interface MenuItem {
  id: string;
  description: string;
  price: number;
  category: string;
  name: string;
}

interface MenuItemCardProps {
  wrapperClassName?: string;
  menuItem: MenuItem;
}

const MenuItemCard: FC<MenuItemCardProps> = (props) => {
  const dispatch = useAppDispatch();
  const { wrapperClassName, menuItem } = props;
  const { description, name, id, price } = menuItem;
  const { count = 0 } = useMenuItemInCart(id) ?? {};

  const finalWrapperClassName = twMerge(
    "flex flex-col flex-shrink-0 h-[30vh] w-[12rem] sm:w-[18rem] overflow-hidden bg-koz-black bg-clip-border text-gray-700 shadow-md transition-all",
    wrapperClassName
  );

  const onAddToCart = useCallback(() => {
    dispatch(addMenuItemToCart({ id, price }));
  }, [dispatch, id, price]);

  const onRemoveFromCart = useCallback(() => {
    dispatch(removeMenuItemFromCart({ id }));
  }, [dispatch, id]);

  // ...

  return (
    <div>
      <div className="flex bg-transparent z-20 justify-center items-center mb-2">
        <div className="flex flex-row bg-lime-200 justify-center items-center">
          <div>
            <BaseButton
              text="+"
              onClick={onAddToCart}
              className="text-white mb-0 rounded-none"
            />
          </div>
          <span className="bg-transparent text-lime-600 px-2 w-8 text-center">
            {count}
          </span>
          <div>
            <BaseButton
              text="-"
              disabled={count === 0}
              onClick={onRemoveFromCart}
              className="text-white mb-0 rounded-none"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center py-2">
        <BaseText
          className="block text-md sm:text-lg text-koz-dust font-bold"
          text={`$${price}`}
        />
      </div>
      <div className={finalWrapperClassName}>
        <div className="flex basis_[65%] relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border flex-grow">
          <img
            className="w-full h-full object-cover opacity-60"
            src={`koz-images/${id}.jpg`}
            alt={name}
          />
        </div>
        <div className="flex basis_[35%] flex-col justify-center items-center p-2 text-center">
          <TitleText
            className="block text-lg sm:text-xl font-bold leading-snug"
            text={name}
          />
          <BaseText
            className="block mt-1 font-sans text-md sm:text-lg text-koz-dust antialiased leading-relaxed"
            text={description}
          />
        </div>
      </div>
    </div>
  );

  // ...
};

export default MenuItemCard;
