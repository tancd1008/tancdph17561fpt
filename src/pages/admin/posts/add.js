import axios from "axios";
import $ from "jquery";
import validate from "jquery-validation";
import { add } from "../../../api/posts";
import NavAdmin from "../../../components/navadmin";

const AddPost = {
    render() {
        return /* html */`
            <div class="min-h-full">
                <div id="header">
                    ${NavAdmin.render()}
                </div>
                <header class="bg-white shadow ">
                    <div class="flex items-center justify-between">
                        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                            <h1 class="text-3xl font-bold text-gray-900">
                            Thêm mới tin tức
                            </h1>
                        </div>
                        
                    </div>
                </header>
                <main>
                    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                        <div class="px-4 py-6 sm:px-0">
                            <div class="border-4 border-dashed border-gray rounded-lg ">
                                <form id="formAddPost">
                                    <div class="shadow sm:rounded-md sm:overflow-hidden">
                                        <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                                            <div>
                                                <label for="about" class="block text-sm font-medium text-gray-700">
                                                    Tiêu đề
                                                </label>
                                            <div class="mt-1">
                                            <input type="text" class="p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 py-1 block w-full sm:text-sm border border-gray-300 rounded-md" id="title-post" name="title-post" placeholder="Title Post"/><br />
                                            </div>
                                        </div>
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700">
                                                Ảnh
                                            </label>
                                            <div class="space-y-1 text-center">
                                                <input id="img-post" type="file"  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 py-1 block w-full sm:text-sm border border-gray-300 rounded-md" >
                                            </div>
                                            <div>
                                            <img width="200" src="https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg" id="img-preview"/>                                            
                                            </div>
                                        </div>
                                        <div>
                                            <label for="about" class="block text-sm font-medium text-gray-700">
                                            Nội dung
                                            </label>
                                            <div class="mt-1">
                                                <textarea id="desc-post" class=" p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" name="desc-post" ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-5 flex lg:mt-0 lg:ml-4">
                                            <button type="submit"
                                            class=" btn m-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            Thêm mới tin tức
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
    afterRender() {
        const formAddPost = $("#formAddPost");
        const imgPreview = document.querySelector("#img-preview");
        const imgPost = document.querySelector("#img-post");
        let imgLink = "";

        const CLOUDINARY_PRESET = "jkbdphzy";
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/ecommercer2021/image/upload";

        // preview
        imgPost.addEventListener("change", (e) => {
            imgPreview.src = URL.createObjectURL(e.target.files[0]);
        });

        // validate form
        formAddPost.validate({
            rules: {
                "title-post": {
                    required: true,
                    minlength: 5,
                },
                "desc-post": {
                    required: true,
                    minlength: 5,
                },
            },
            messages: {
                "title-post": {
                    required: "Không để trống trường này!",
                    minlength: "Ít nhất phải trên 5 ký tự",
                },
                "desc-post": {
                    required: "Không để trống trường này!",
                    minlength: "Ít nhất phải trên 5 ký tự",
                },
            },
            submitHandler: () => {
                async function handleAddPost() {
                    // Lấy giá trị của input file
                    const file = document.querySelector("#img-post").files[0];
                    if (file) {
                        // Gắn vào đối tượng formData
                        const formData = new FormData();
                        formData.append("file", file);
                        formData.append("upload_preset", CLOUDINARY_PRESET);

                        // call api cloudinary, để upload ảnh lên
                        const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
                            headers: {
                                "Content-Type": "application/form-data",
                            },
                        });
                        imgLink = data.url;
                    }

                    // call API thêm bài viết
                    add({
                        title: document.querySelector("#title-post").value,
                        img: imgLink || "",
                        desc: document.querySelector("#desc-post").value,
                    }).then(() => {
                        window.location.href = "/admin/posts";
                        alert("Bạn đã thêm  thành công");
                    });
                }
                handleAddPost();
            },
        });
    },
};
export default AddPost;