import axios from "axios";

export async function productData() {
    const products = await axios.get("https://api.escuelajs.co/api/v1/products?offset=10&limit=30");
    return products;
}
