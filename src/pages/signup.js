import toastr from "toastr";
import { signup } from "../api/user";
import "toastr/build/toastr.min.css";
import Header from "../components/header";
import Footer from "../components/footer";

const Signup = {
    render() {
        return /* html */`
        <div class="max-w-5xl mx-auto">
        ${Header.render()}
        <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div class="max-w-md w-full space-y-8">
                <div>
                <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Đăng Ký</h2>
                </div>
                <form id="formSignup" class="mt-8 space-y-6">
                    <div class="rounded-md shadow-sm -space-y-px">
                        <div>
                            <input type="email" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" id="email" placeholder="Your  email"/>
                        </div>
                        <div>
                            <input type="password" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" id="password" placeholder="Your  password"/>
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="text-sm">
                            <a href="#" class="font-medium text-indigo-600 hover:text-cyan-900">  </a>
                            </div>

                            <div class="text-sm">
                            <a href="#" class="font-medium  hover:text-indigo-500"> Bạn đã có tài khoản? </a>
                            </div>
                        </div>
                        <div>
                            <button class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-10">Đăng Ký</button>
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
        const formSignup = document.querySelector("#formSignup");
        formSignup.addEventListener("submit", async (e) => {
            e.preventDefault();
            try {
                const { data } = await signup({
                    email: document.querySelector("#email").value,
                    password: document.querySelector("#password").value,
                });
                if (data) {
                    toastr.success("Đăng ký thành công, chuyển trang sau 2s");
                    setTimeout(() => {
                        document.location.href = "/signin";
                    }, 2000);
                }
            } catch (error) {
                toastr.error(error.response.data);
            }
        });
    },
};
export default Signup;