import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { decreaseQuantity, increaseQuantity, removeItemInCart } from "./utils/cart";
import { reRender } from "./utils/rerender";
import { $ } from "./utils/selector";

const CartPage = {
    render() {
        let cart = [];
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
            return `
                <table>
                    <thead>
                        <tr>
                            <th>Tên sản phẩm</th>
                            <th>Giá sản phẩm</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                            ${cart.map((item) => `
                                <tr>
                                    <td>${item.name}</td>
                                    <td>${item.price}</td>
                                    <td>
                                        <button data-id="${item.id}" class="btn btn-increase">+</button>
                                        <button data-id="${item.id}" class="btn btn-decrease">-</button>
                                    </td>
                                    <td>
                                        <button data-id="${item.id}" class="btn btn-remove">Remove</button>
                                    </td>
                                </tr>
                            `).join("")}
                    </tbody>
                </table>
            `;
        }
        return `No Item`;
    },
    afterRender() {
        const btns = $(".btn");
        console.log(btns);
        btns.forEach((btn) => {
            btn.addEventListener("click", () => {
                const { id } = btn.dataset;
                if (btn.classList.contains("btn-increase")) {
                    increaseQuantity(id, () => {
                        toastr.success("Tăng số lượng thành công");
                    });
                } else if (btn.classList.contains("btn-decrease")) {
                    decreaseQuantity(id);
                    toastr.success("Giảm số lượng thành công");
                } else {
                    removeItemInCart(id, () => {
                        reRender(CartPage, "#app");
                    });
                }
            });
        });
    },
};
export default CartPage;