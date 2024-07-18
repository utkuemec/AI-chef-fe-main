import { Children } from "react";
import CategoryLabel from "../../Category/CategoryLabel";

interface HCategoryLabelListProps {
  categories: string[];
  selectedCategory: string | null;
  onClick: (category: string) => void;
}

const HCategoryLabelList = (props: HCategoryLabelListProps) => {
  const { categories, selectedCategory, onClick } = props;

  return (
    <div className="fade-in sticky top-0 z-50 bg-koz-black px-2 flex w-full items-start overflow-x-scroll no-scrollbar scrolling-touch gap-x-3">
      {Children.toArray(
        categories?.map((category) => (
          <CategoryLabel
            isSelected={selectedCategory == category}
            name={category}
            onClick={onClick}
          />
        ))
      )}
    </div>
  );
};

export default HCategoryLabelList;
