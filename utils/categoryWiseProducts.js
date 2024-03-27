const { getData } = require("./getData");

export const getCategoryWiseProducts = (category) => {
  const allProducts = getData();
//   console.log(allProducts);
  if(category == "all") return allProducts;
  const categoryWiseProduct = allProducts.filter(pd=> pd.category.toLowerCase() == category.toLowerCase());
  return categoryWiseProduct;
};
