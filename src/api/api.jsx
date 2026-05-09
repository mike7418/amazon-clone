import axios from "axios";

export async function productData() {
    const products = await axios.get("https://fakestoreapiserver.reactbd.org/api/amazonproducts");
    return products;
}
