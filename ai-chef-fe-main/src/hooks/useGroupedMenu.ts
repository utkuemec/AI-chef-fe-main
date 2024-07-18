import { MenuItem } from "../components/Card/MenuItemCard/MenuItemCard";

export const useGroupedMenu = (data: MenuItem[]): GroupByCategoryResult => {
  return groupByCategory(data);
};

interface GroupByCategoryResult {
  groupedItems: CategoryWithItems[];
  categories: string[];
}

const groupByCategory = (items: MenuItem[]): GroupByCategoryResult => {
  const categories: string[] = [];
  const groupedItems = items.reduce((acc, item) => {
    const category = item.category;
    const existingCategory = acc.find((c) => c.categoryName === category);
    if (existingCategory) {
      existingCategory.items.push(item);
    } else {
      acc.push({ categoryName: category, items: [item] });
      categories.push(category);
    }
    return acc;
  }, [] as CategoryWithItems[]);

  return { groupedItems, categories };
};

export interface CategoryWithItems {
  categoryName: string;
  items: MenuItem[];
}
