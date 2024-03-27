const { getData } = require("./getData");

export const getDetailProduct = (productId) => {
  const allProducts = getData();
//   console.log(allProducts);
  const singleProduct = allProducts.find(pd=> pd.id == productId);
  return singleProduct;
};
