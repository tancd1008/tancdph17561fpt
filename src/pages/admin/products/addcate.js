import $ from "jquery";
import validate from "jquery-validation";
import { addCate } from "../../../api/products";

import NavAdmin from "../../../components/navadmin";

const AddCateProduct = {
    async render() {
        return /* html */`
        ${NavAdmin.render()}
            <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 class="text-3xl font-bold text-gray-900">
                        Thêm mới Sản phẩm
                    </h1>
                </div>
            </header>
            <main>
                <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div class="px-4 py-6 sm:px-0">
                <form action="" id="formAddCate">
                        <div class="shadow sm:rounded-md sm:overflow-hidden">
                            <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                                <div>
                                    <label for="about" class="block text-sm font-medium text-gray-700">
                                      Tên sản phẩm
                                    </label>
                                    <div class="mt-1">
                                        <input id="cate-product" name="cate-product" type="text"  class="p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 py-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="">
                                    </div>
                                </div>

                            <div class="mt-5 flex lg:mt-0 lg:ml-4">
                                  <button type="submit"
                                  class=" m-3 btn inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                  Thêm mới danh mục
                                  </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            </main> 
        `;
    },
    afterRender() {
        const formAddCate = $("#formAddCate");

        // validate form
        formAddCate.validate({
            rules: {
                "cate-product": {
                    required: true,
                    minlength: 5,
                },

            },
            messages: {
                "cate-product": {
                    required: "Không để trống trường này!",
                    minlength: "Ít nhất phải trên 5 ký tự",
                },

            },
            submitHandler: () => {
                async function handleAddPost() {
                    // Lấy giá trị của input file

                    // call API thêm bài viết
                    addCate({
                        name: document.querySelector("#cate-product").value,

                    }).then(() => {
                        window.location.href = "/admin/cateProduct";
                        alert("Bạn đã thêm  thành công");
                    });
                }
                handleAddPost();
            },
        });
    },
};

export default AddCateProduct;