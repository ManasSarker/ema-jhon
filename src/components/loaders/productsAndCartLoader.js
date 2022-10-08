import { getStoredCart } from "../../utilities/fakedb";

export const productsAndCartLoader = async () => {
  //get Products data
  const productsData = await fetch("products.json");

  const products = await productsData.json();

  // get cart

  const savedCart = getStoredCart();
  const initialCart = [];

  for (const id in savedCart) {
    const addedProduct = products.find((product) => product.id === id); // checked from products details and my oder items and return the ordered items
    if (addedProduct) {
      const quantity = savedCart[id]; // set the quantity

      addedProduct.quantity = quantity;

      initialCart.push(addedProduct);
    }
  }
  return { products, initialCart };
};
