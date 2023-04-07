import { getShoppingCart } from "../../../utilities/fakedb";

const CardProductLoader = async () => {
    const loaderProduct = await fetch("products.json");
    const products = await loaderProduct.json();

    const storedcart = getShoppingCart();
    const savedCart=[];
    console.log(storedcart);
    for (const id in storedcart) {
        const addedProduct = products.find(pd => pd.id === id);
        if (addedProduct) {
            const quantity = storedcart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }

    // console.log(products);
    return savedCart;

}
export default CardProductLoader