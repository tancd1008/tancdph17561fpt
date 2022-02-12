import toastr from "toastr";
import "toastr/build/toastr.min.css";
import Footer from "../components/footer";
import Header from "../components/header";
import { $ } from "./utils/selector";
import { signin } from "../api/user";

const SignIn = {
    render() {
        return /* html */`
            <div class="max-w-5xl mx-auto">
                ${Header.render()}
                <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div class="max-w-md w-full space-y-8">
                <div>
                    <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
                    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Sign in to your account
                    </h2>
                </div>
                <form class="mt-8 space-y-6" id="formSignin" method="POST">
                    <input type="hidden" name="remember" value="true">
                    <div class="rounded-md shadow-sm -space-y-px">
                    <div>
                        <label for="email-address" class="">Email address</label>
                        <input id="email" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address">
                    </div>
                    <div>
                        <label for="password" class="">Password</label>
                        <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
                    </div>
                    </div>
            
                    <div class="flex items-center justify-between">
                   
            
                   
                    </div>
            
                    <div>
                    <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                       
                        Sign in
                    </button>
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
                        document.location.href = "/#/admin/news";
                    } else {
                        document.location.href = "/#/";
                    }
                }, 2000);
            } catch (error) {
                // nếu lỗi thì trả về object chứa lỗi error.response.data
                toastr.error(error.response.data);
                $("#formSignin").reset();
            }
        });
    },
};
export default SignIn;