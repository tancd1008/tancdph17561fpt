import { get } from "../../api/products";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { addToCart } from "../utils/cart";
import { $ } from "../utils/selector";

const ProductDetailPage = {
    async render(id) {
        const { data } = await get(id);
        return /* html */`<div class="max-w-5xl mx-auto">
                    <div id="header">
                        ${Header.render()}
                    </div>
                    <h1>${data.name}</h1>
                    <img src="${data.img}" />
                    <p>${data.desc}</p>
                    <p>${data.price.toLocaleString("it-IT", { style: "currency", currency: "VND" })}</p>
                    <p>
                        <input type="number" id="inputValue"/>
                        <button id="btnAddToCart" class="inline-block px-4 py-3 bg-indigo-500 text-white">
                            Add To cart
                        </button>
                    </p>
                    <div id="footer">
                        ${Footer.render()}
                    </div>
                </div>`;
    },
    afterRender(id) {
        $("#btnAddToCart").addEventListener("click", async () => {
            const { data } = await get(id);
            addToCart({ ...data, quantity: $("#inputValue").value ? $("#inputValue").value : 1 });
        });
    },
};
export default ProductDetailPage;