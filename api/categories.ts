export const allCategories = async (): Promise<string[]> => {
  const data: string[] = await $fetch(
    "https://fakestoreapi.com/products/categories"
  );
  return data;
};
