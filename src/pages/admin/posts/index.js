import { getAll, remove } from "../../../api/posts";
import NavAdmin from "../../../components/navadmin";
import { reRender } from "../../utils/rerender";

const AdminPost = {
    async render() {
        const { data } = await getAll();

        return /* html */`
        <div class="min-h-full">
            <div id="header">
                ${NavAdmin.render()}
            </div>
            <header class="bg-white shadow ">
                <div class="flex items-center justify-between">
                    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <h1 class="text-3xl font-bold text-gray-900">
                        Quản lý tin tức
                        </h1>
                    </div>
                    <div class="mt-5 flex lg:mt-0 lg:ml-4">
                        <a href="/admin/posts/add" class="sm:ml-3">
                            <button type="button"
                            class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Thêm mới
                            </button>
                        </a>
                    </div>
                </div>
            </header>
            <main>
                <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div class="px-4 py-6 sm:px-0">
                        <div class="border-4 border-dashed border-gray rounded-lg ">
                            <div class="news">
                                <table class="min-w-full divide-y divide-gray-200">
                                    <thead class="bg-gray-50 text-center">
                                        <tr>
                                            <th scope="col" >ID</th>
                                            <th scope="col" >Tên</th>
                                            <th scope="col" ></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        ${data.map((post, index) => /* html */`
                                            <tr>
                                                <td class="text-center">${index + 1}</td>
                                                <td class="text-center">${post.title}</td>
                                                <td class="text-right ">
                                                    <button data-id="${post.id}" class="btn bg-red-500 text-white inline-block py-3 px-5 rounded  hover:text-indigo-900">Remove</button>
                                                    <a href="/admin/posts/edit/${post.id}">
                                                        <button data-id="${post.id}" class="bg-indigo-900 text-white p-3 rounded  hover:text-white-900">Edit</button>
                                                    </a>
                                                    
                                                </td>
                                                
                                            </tr>
                                        `).join("")}    
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        `;
    },
    afterRender() {
        // Lấy danh sách button
        const btns = document.querySelectorAll(".btn");
        btns.forEach((btn) => {
            const { id } = btn.dataset;
            // tạo vòng lặp và lấy ra từng button
            // Viết sự kiện khi click vào button call api và xóa sản phẩm
            btn.addEventListener("click", async () => {
                const confirm = window.confirm("Bạn có chắc chắn không??");
                if (confirm) {
                    remove(id).then(() => {
                        reRender(AdminPost, "#app");
                    });
                }
            });
        });
    },
};

export default AdminPost;