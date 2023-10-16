interface Item {
  id: string;
  isSelected: boolean;
  title: string;
  price: string;
  count: number;
  total: string;
  image: string;
  link: string;
  weight: number;
}

interface CookieItem {
  id: string;
  title: string;
  price: string;
  count: number;
  image: string;
  link: string;
  weight: number;
}

export const getItems = (): CookieItem[] => {
  if (window !== undefined) {
    const cookieItems = localStorage.getItem("cart");
    const storedItems: CookieItem[] =
      cookieItems !== undefined && cookieItems !== null
        ? JSON.parse(cookieItems)
        : [];
    return storedItems;
  }
  return [];
};

export const pushItems = (items: CookieItem[]) => {
  localStorage.setItem("cart", JSON.stringify(items));
};
