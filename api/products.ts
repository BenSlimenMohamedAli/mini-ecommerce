import type { Product } from "./dto/product.interface";

export const productsByCategory = async (
  category: string
): Promise<Product[]> => {
  const data: Product[] = await $fetch(
    "https://fakestoreapi.com/products/category/" + category
  );
  return data;
};
