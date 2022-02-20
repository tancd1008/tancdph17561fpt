import toastr from "toastr";
import "toastr/build/toastr.min.css";
import Footer from "../components/footer";
import Header from "../components/header";
import { $ } from "./utils/selector";
import { signin } from "../api/user";

const Signin = {
    render() {
        return /* html */`
        
            <div class="max-w-5xl mx-auto">
                ${Header.render()}
                <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div class="max-w-md w-full space-y-8">
                        <div>
                        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Đăng Nhập</h2>
                        </div>
                        <form id="formSignin" class="mt-8 space-y-6">
                            <div class="rounded-md shadow-sm -space-y-px">
                                <div>
                                    <input type="email" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" id="email" placeholder="Your  email"/>
                                </div>
                                <div>
                                    <input type="password" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" id="password" placeholder="Your  password"/>
                                </div>
                                <div class="flex items-center justify-between">
                                    <div class="text-sm">
                                    <a href="#" class="font-medium text-indigo-600 hover:text-cyan-900"> Quên mật khẩu </a>
                                    </div>

                                    <div class="text-sm">
                                    <a href="#" class="font-medium  hover:text-indigo-500"> Bạn chưa có tài khoản? </a>
                                    </div>
                                </div>
                                <div>
                                    <button class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-10">Đăng nhập</button>
                                </div>
                            </div>
                            
                        </form>
                    </div>
                </div>
                ${Footer.render()}
            </div>
            
        `;
    },
    afterRender() {
        $("#formSignin").addEventListener("submit", async (e) => {
            e.preventDefault();
            try {
                // call api, nếu đăng nhập thành công sẽ trả về object data
                const { data } = await signin({
                    email: $("#email").value,
                    password: $("#password").value,
                });
                localStorage.setItem("user", JSON.stringify(data.user));
                toastr.success("Đăng nhập thành công, chuyển trang sau 2s");
                setTimeout(() => {
                    if (data.user.id === 1) {
                        document.location.href = "/admin/dashboard";
                    } else {
                        document.location.href = "/";
                    }
                }, 2000);
            } catch (error) {
                // nếu lỗi thì trả về object chứa lỗi error.response.data
                toastr.success(error.response.data);
                $("#formSignin").reset();
            }
        });
    },
};
export default Signin;