import { Children } from "react";
import MenuItemCard, { MenuItem } from "../../Card/MenuItemCard/MenuItemCard";
import TitleText from "../../Text/TitleText";
import { twMerge } from "tailwind-merge";

interface HMenuItemListProps {
  listData: MenuItem[];
  title?: string;
  wrapperClassName?: string;
  scrollDivCN?: string;
}
const HMenuItemList = (props: HMenuItemListProps) => {
  const { listData, title, wrapperClassName, scrollDivCN } = props;
  const finalWrapperClassName = twMerge(
    "flex w-full flex-col",
    wrapperClassName
  );

  const finalScrollDivCN = twMerge(
    "flex w-full overflow-x-scroll no-scrollbar scrolling-touch my-2 gap-x-6 rounded-xl",
    scrollDivCN
  );

  return (
    <div className={finalWrapperClassName}>
      {title && (
        <TitleText
          className="text-xl sm:text-2xl text-koz-dust mb-12"
          text={title}
        />
      )}
      <div className={finalScrollDivCN}>
        {Children.toArray(
          listData.map((item) => {
            return (
              <MenuItemCard
                menuItem={item}
                wrapperClassName={"slide-in-from-right"}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default HMenuItemList;
