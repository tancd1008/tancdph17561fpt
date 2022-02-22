import toastr from "toastr";
import "toastr/build/toastr.min.css";
import Footer from "../components/footer";
import Header from "../components/header";
import { decreaseQuantity, increaseQuantity, removeItemInCart } from "./utils/cart";
import { reRender } from "./utils/rerender";
import { $ } from "./utils/selector";

const CartPage = {
    render() {
        let cart = [];
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
            return /* html */`
                <div id ="header"> 
                    ${Header.render()}
                </div>
                <main>
                    <div class="max-w-7xl mx-auto py-6 ">
                        <div class="px-4 py-3 sm:px-0">
                            <div class=" rounded-lg ">
                                <div class="flex flex-col max-w-5xl mx-auto">
                                    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                                <table id="tb-cart" class="min-w-full divide-y divide-gray-200">
                                                <thead class="bg-gray-50 text-center">
                                                    <tr>
                                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    STT
                                                    </th>
                                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Image
                                                    </th>
                                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Name
                                                    </th>
                                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Price
                                                    </th>
                                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Quantity
                                                    </th>
                                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                     Total
                                                    </th>
                                                    <th scope="col" class="relative px-6 py-3">
                                                        <span class="sr-only">Edit</span>
                                                    </th>
                                                    </tr>
                                                </thead>
                                                <tbody class="bg-white divide-y divide-gray-200">
                                                    ${cart.map((product, index) =>/* html */ `
                                                    <tr>
                                                        <td class="px-6 py-4 whitespace-nowrap">
                                                        <div class="text-sm text-gray-900">${index + 1}</div>
                                                        </td>
                                                        <td class="px-6 py-4 whitespace-nowrap">
                                                        <div class="flex items-center">
                                                            <div class="flex-shrink-0 h-10 w-10">
                                                            <img class="h-10 w-10 " src="${product.img}" alt="">
                                                            </div>
                                                        </div>
                                                        </td>
                                                        <td class="px-6 py-4 whitespace-nowrap">
                                                        <div class="text-sm text-gray-900">${product.name}</div>

                                                        </td>
                                                        <td class="px-6 py-4 whitespace-nowrap">
                                                        <div class="text-sm text-gray-900">${product.price}</div>

                                                        </td>
                                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                                        <button data-id="${product.id}" class="btn btn-decrease bg-red-500 text-white inline-block py-1 px-2 rounded  hover:text-indigo-900">-</button>
                                                        <span class="text-sm text-gray-900 text-center">${product.quantity}</span>
                                                        <button data-id="${product.id}" class=" btn btn-increase bg-green-500 text-white inline-block py-1 px-2 rounded  hover:text-indigo-900">+</button>
                                                        </td>
                                                        <td class="px-6 py-4 whitespace-nowrap">
                                                            <div class="text-sm text-gray-900">${product.price * product.quantity}</div>
                                                        </td>
                                                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                        <button data-id="${product.id}" class=" btn btn-remove bg-red-500 text-white inline-block py-3 px-5 rounded  hover:text-indigo-900">Remove</button>
                                                        </td>
                                                    </tr>
                                                    `).join("")}
                                                </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                ${Footer.render()}
            `;
        }
        return /* html */`
            <div id ="header"> 
                ${Header.render()}
            </div>
            <main>
                    <div class="max-w-7xl mx-auto py-6 ">
                        <div class="px-4 py-3 sm:px-0">
                            <div class=" rounded-lg ">
                                <div class="flex flex-col max-w-5xl mx-auto">
                                    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                                <h2>Bạn chưa đặt hàng</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
        `;
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
                        reRender(CartPage, "#app");
                    });
                } else if (btn.classList.contains("btn-decrease")) {
                    decreaseQuantity(id, () => {
                        toastr.success("Giảm số lượng thành công");
                        reRender(CartPage, "#app");
                    });
                } else {
                    removeItemInCart(id, () => {
                        localStorage.removeItem("cart");
                        reRender(CartPage, "#app");
                    });
                }
            });
        });
        Header.afterRender();
    },
};
export default CartPage;