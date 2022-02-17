import toastr from "toastr";
import "toastr/build/toastr.min.css";
import Nav from "./nav";
import { reRender } from "../pages/utils/rerender";

const Header = {
    render() {
        return /* html */`
        <header class="max-w-5xl mx-auto">
            <div class="flex items-center justify-between bg-blue-800">
                <div class=" py-4">
                    <img src="https://picsum.photos/40/40" class="mx-auto px-2" />
                </div>
                <div class="text-6xl">
                    <h2 class="text-white font-mono">Javascript</h2>
                </div>
                <div class="text-sm">
                    ${localStorage.getItem("user") ?/* html */ `<ul class="flex">
                        <li class="flex items-center text-white">Xin chao <span class="block py-3 px-4 text-white" id="account_username"></span><li>
                        <li><a class="block py-3 px-4 text-white hover:bg-blue-500" id="logout">Logout</a></li>
                    </ul>` : /* html */`
                    <ul class="flex">
                        <li>
                            <a href="/signin" class="block py-2 px-3 text-black hover:text-white rounded-md text-sm font-medium">Đăng nhập</a>
                        </li>
                        <li>
                            <a href="/signup" class="block py-2 px-3 text-black hover:text-white rounded-md text-sm font-medium">Đăng ký</a>
                        </li>
                    </ul>
                    `}
                </div>
            </div>
            <div class="bg-orange-500">
                ${Nav.render()}
            </div>
        </header>`;
    },
    afterRender() {
        const accountUserName = document.querySelector("#account_username");
        if (accountUserName) {
            accountUserName.innerHTML = JSON.parse(localStorage.getItem("user")).email;
        }
        const logout = document.querySelector("#logout");
        if (logout) {
            logout.addEventListener("click", () => {
                const confirm = window.confirm("Bạn có muốn đăng xuất?");
                if (confirm) {
                    localStorage.removeItem("user");
                    toastr.success("Đăng xuất thành công!");
                    reRender(Header, "#header");
                }
            });
        }
    },
};
export default Header;