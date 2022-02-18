import axios from "axios";
import { edit, get } from "../../../api/posts";
import NavAdmin from "../../../components/navadmin";

const EditPost = {
    async render(id) {
        const { data } = await get(id);
        return /* html */`
            <div class="min-h-full">
                <div id="header">
                    ${NavAdmin.render()}
                </div>
                <header class="bg-white shadow ">
                    <div class="flex items-center justify-between">
                        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                            <h1 class="text-3xl font-bold text-gray-900">
                                Cập nhật tin tức
                            </h1>
                        </div>
                        
                    </div>
                </header>
                <main>
                    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                        <div class="px-4 py-6 sm:px-0">
                            <div class="border-4 border-dashed border-gray rounded-lg ">
                                <form id="formEditPost">
                                    <div class="shadow sm:rounded-md sm:overflow-hidden">
                                        <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                                            <div>
                                                <label for="about" class="block text-sm font-medium text-gray-700">
                                                    Tiêu đề
                                                </label>
                                            <div class="mt-1">
                                                <input id="title-post" type="text" value="${data.title}"   class="p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 py-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="">
                                            </div>
                                        </div>
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700">
                                                Ảnh
                                            </label>
                                            <div class="space-y-1 text-center">
                                                <input id="img-post" type="file"  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 py-1 block w-full sm:text-sm border border-gray-300 rounded-md" >
                                            </div>
                                            <div class="space-y-1 text-center">
                                                <img src="${data.img}" class="w-1/2 h-1/2" id="img-preview"/>
                                            </div>
                                        </div>
                                        <div>
                                            <label for="about" class="block text-sm font-medium text-gray-700">
                                                Nội dung
                                            </label>
                                            <div class="mt-1">
                                                <textarea id="desc-post" name="about" rows="3" class=" p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" >${data.desc}</textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-5 flex lg:mt-0 lg:ml-4">
                                            <button type="submit"
                                            class=" btn m-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                Cập nhật tin tức
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
                                    
                                   
        `;
    },
    afterRender(id) {
        const formEditPost = document.querySelector("#formEditPost");
        const imgPost = document.querySelector("#img-post");
        const CLOUDINARY_PRESET_KEY = "sgalizop";
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/tancd/image/upload";
        formEditPost.addEventListener("submit", async (e) => {
            e.preventDefault();
            if (imgPost.value === "") {
                const { data } = await get(id);
                edit({
                    id,
                    title: document.querySelector("#title-post").value,
                    img: data.img,
                    desc: document.querySelector("#desc-post").value,
                }).then(() => {
                    alert("Bạn đã sửa  thành công");
                    document.location.href = "/admin/posts";
                });
            }
            // Lấy giá trị của input file
            const file = document.querySelector("#img-post").files[0];
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
            // call API thêm bài viết
            edit({
                id,
                title: document.querySelector("#title-post").value,
                img: data.url,
                desc: document.querySelector("#desc-post").value,
            }).then(() => {
                alert("Bạn đã sửa  thành công");
                document.location.href = "/admin/posts";
            });
        });
    },
};
export default EditPost;