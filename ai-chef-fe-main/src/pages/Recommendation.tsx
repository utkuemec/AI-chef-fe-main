import { Children, useEffect, useMemo, useState } from "react";
import HCategoryLabelList from "../components/List/Horizontal/HCategoryLabelList";
import { Element } from "react-scroll";
import HMenuItemList from "../components/List/Horizontal/HMenuItemList";
import TitleText from "../components/Text/TitleText";
import { useGroupedMenu } from "../hooks/useGroupedMenu";
import { PageDataType } from "./Home";
import { MenuItem } from "../components/Card/MenuItemCard/MenuItemCard";
import { useLocation } from "react-router-dom";
import Divider from "../components/Divider/Divider";
import CookingEggLottie from "../components/Loader/CookingEggLottie";
import { useRecommendMutation } from "../store/endpoints/recommend";
import CartCount from "../components/Cart/CartCount";

function processItems(items: MenuItem[]): MenuItem[] {
  const seen = new Set();
  return items
    .map((item) => ({
      ...item,
      name: item.name.replace(/ *\([^)]*\) */g, ""), // Remove parentheses
    }))
    .filter((item) => {
      const duplicate = seen.has(item.name);
      seen.add(item.name);
      return !duplicate;
    });
}

export interface RecommendRes {
  recommended_drinks: MenuItem[];
  recommended_foods: MenuItem[];
}

const Recommendation = () => {
  const { state } = useLocation();
  const { food, drink } = state;

  const [recommend, { data, isLoading }] = useRecommendMutation();

  const [selectedCategory, setselectedCategory] = useState<string | null>(null);

  const onCategoryClick = (category: string) => {
    setselectedCategory(category);
  };

  const listData = useMemo(() => {
    if (!data) return null;

    const processedFoods = processItems(data?.recommended_foods ?? []);
    const processedDrinks = processItems(data?.recommended_drinks ?? []);

    return {
      recommended_foods: processedFoods,
      recommended_drinks: processedDrinks,
    } as RecommendRes;
  }, [data]);
  const aiTop3Food = listData?.recommended_foods.slice(0, 3) ?? [];
  const aiTop3Drinks = listData?.recommended_drinks.slice(0, 3) ?? [];

  const { groupedItems: foodItems, categories: foodCategories } =
    useGroupedMenu(listData?.recommended_foods ?? []);
  const { groupedItems: drinksItems, categories: drinkCategories } =
    useGroupedMenu(listData?.recommended_drinks ?? []);

  const allCategories = [...foodCategories, ...drinkCategories];

  const allParsedData: PageDataType[] = [
    {
      header: "Foods",
      categoryWithItems: foodItems,
    },
    {
      header: "Drinks",
      categoryWithItems: drinksItems,
    },
  ];

  const animationClass = "fade-in";

  useEffect(() => {
    if (food && drink) {
      recommend({ food, drink });
    }
  }, [food, drink, recommend]);

  useEffect(() => {}, [data]);

  if (isLoading) {
    return (
      <div
        className={`flex h-[100vh] justify-center items-center bg-koz-black-secondary`}
      >
        <div className={animationClass}>
          <CookingEggLottie />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-koz-black-secondary pl-2 lg:pl-0">
      <HCategoryLabelList
        categories={allCategories}
        selectedCategory={selectedCategory}
        onClick={onCategoryClick}
      />
      <div className="mb-20">
        <TitleText
          className={`${animationClass} text-center mt-4 sm:mt-8`}
          text="AI Recommendations"
        />
        <div
          className={`${animationClass} flex w-full justify-center items-center flex-col mt-4 gap-y-12`}
        >
          <HMenuItemList
            title="Top 3 Foods"
            listData={aiTop3Food}
            wrapperClassName="text-center"
            scrollDivCN="md:justify-center"
          />
          <HMenuItemList
            title="Top 3 Drinks"
            listData={aiTop3Drinks}
            wrapperClassName="text-center"
            scrollDivCN="md:justify-center"
          />
        </div>
      </div>
      <Divider />
      <div className="mt-[6rem] md:pl-2">
        {Children.toArray(
          allParsedData?.map(({ header, categoryWithItems }) => {
            return (
              <div className="w-full justify-center">
                <TitleText className="text-center my-12" text={header} />
                <div>
                  {Children.toArray(
                    categoryWithItems.map((category) => {
                      return (
                        <Element name={category.categoryName}>
                          <div className="my-12">
                            <HMenuItemList
                              title={category.categoryName}
                              listData={category.items}
                            />
                          </div>
                        </Element>
                      );
                    })
                  )}
                </div>
                <Divider />
              </div>
            );
          })
        )}
      </div>
      <div className="fixed bottom-20 right-20">
        <CartCount />
      </div>
    </div>
  );
};

export default Recommendation;
