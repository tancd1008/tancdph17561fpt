const Nav = {
    render() {
        return /* html */`
          <nav>
            <div class="bg-[#b27b34] flex items-center justify-between">
              <ul class="flex">
                <li>
                  <a href="/" class="block py-2 px-3 text-white hover:underline underline-offset-4">Trang chủ</a>
                </li>
                <li>
                  <a href="/products" class="block py-2 px-3 text-white hover:underline underline-offset-4">Sản phẩm</a>
                </li>
                <li>
                  <a href="/signin" class="block py-2 px-3 text-white hover:underline underline-offset-4">Sign In</a>
                </li>
                <li>
                  <a href="/signup" class="block py-2 px-3 text-white hover:underline underline-offset-4">Sign Up</a>
                </li>
                <li>
                <a href="/cart" class="block py-2 px-3 text-white hover:underline underline-offset-4">Giỏ hàng</a>
              </li>
                <li>
                  <a href="/admin/dashboard" class="block py-2 px-3 text-white hover:underline underline-offset-4">Admin</a>
                </li>
                
              </ul>
              <form action="" class="block py-3 px-4 text-white ">
                  <input type="text" />
                  <button class="border-5 bg-cyan-900 px-[5px] text-white hover:bg-cyan-600">TÌM KIẾM</button>
              </form>
              
            </div>
          </nav>`;
    },
    // afterRender() {
    //     const email = document.querySelector("#email");
    //     email.innerHTML = JSON.parse(localStorage.getItem("user")).email;
    // },
};
export default Nav;