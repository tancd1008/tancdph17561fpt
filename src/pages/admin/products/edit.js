import axios from "axios";
import toastr from "toastr";
import { edit, get } from "../../../api/products";
import "toastr/build/toastr.min.css";
import NavAdmin from "../../../components/navadmin";

const EditProduct = {
    async render(id) {
        const { data } = await get(id);
        return /* html */`
        ${NavAdmin.render()}
            <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 class="text-3xl font-bold text-gray-900">
                        Cập nhật Sản phẩm
                    </h1>
                </div>
            </header>
            <main>
                <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div class="px-4 py-6 sm:px-0">
                <form action="" id="formEditProduct">
                        <div class="shadow sm:rounded-md sm:overflow-hidden">
                            <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                                <div>
                                    <label for="about" class="block text-sm font-medium text-gray-700">
                                      Tên sản phẩm
                                    </label>
                                    <div class="mt-1">
                                        <input id="name-product" type="text"  class="p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 py-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="" value="${data.name}">
                                    </div>
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700">
                                        Ảnh
                                    </label>
                                    <div class="space-y-1 text-center">
                                        <input id="img-product" type="file"  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 py-1 block w-full sm:text-sm border border-gray-300 rounded-md"  >
                                    </div>
                                    
                                </div>
                                <div class="space-y-1 text-center">
                                        <img src="${data.img}" class="w-1/2 h-1/2" id="img-preview"/>
                                </div>
                                <div>
                                    <label for="about" class="block text-sm font-medium text-gray-700">
                                      Giá
                                    </label>
                                    <div class="mt-1">
                                    <input id="price-product" type="text" class="p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 py-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="" value="${data.price}">
                                    </div>
                                </div>
                                <div>
                                    <label for="about" class="block text-sm font-medium text-gray-700">
                                      Số lượng
                                    </label>
                                    <div class="mt-1">
                                    <input id="quantily-product" type="text" class="p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 py-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="" value="${data.quantily}">
                                    </div>
                                </div>
                                <div>
                                    <label for="about" class="block text-sm font-medium text-gray-700">
                                        Miêu tả
                                    </label>
                                    <div class="mt-1">
                                        <textarea id="desc-product" name="about" rows="3" class=" p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" >${data.desc}</textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-5 flex lg:mt-0 lg:ml-4">
                                  <button type="submit"
                                  class=" m-3 btn inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                  Cập nhật sản phẩm
                                  </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            </main> 
        `;
    },
    afterRender(id) {
        const formEditProduct = document.querySelector("#formEditProduct");
        const imgPost = document.querySelector("#img-product");
        const CLOUDINARY_PRESET_KEY = "sgalizop";
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/tancd/image/upload";
        formEditProduct.addEventListener("submit", async (e) => {
            e.preventDefault();
            if (imgPost.value === "") {
                const { data } = await get(id);
                edit({
                    id,
                    name: document.querySelector("#name-product").value,
                    img: data.img,
                    price: document.querySelector("#price-product").value,
                    quantily: document.querySelector("#quantily-product").value,
                    desc: document.querySelector("#desc-product").value,
                }).then(() => {
                    toastr.success("Bạn cập nhật thành công!");
                    setTimeout(() => {
                        document.location.href = "/admin/products";
                    }, 2000);
                });
            }
            // Lấy giá trị của input file
            const file = document.querySelector("#img-product").files[0];
            // Gắn vào đối tượng formData
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", CLOUDINARY_PRESET_KEY);

            // call api cloudinary, để upload ảnh lên
            const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
                headers: {
                    "Content-Type": "application/form-data",
                },
            });
            // call API cập nhật bài viết
            edit({
                id,
                name: document.querySelector("#name-product").value,
                img: data.url,
                price: document.querySelector("#price-product").value,
                quantily: document.querySelector("#quantily-product").value,
                desc: document.querySelector("#desc-product").value,
            }).then(() => {
                alert("Bạn đã sửa  thành công");
                document.location.href = "/admin/products";
            });
        });
    },
};

export default EditProduct;