const Nav = {
    render() {
        return /* html */`
          <nav>
            <div class="bg-slate-400 flex items-center justify-between">
              <ul class="flex">
                <li>
                  <a href="/" class="block py-2 px-3 text-black hover:text-white rounded-md text-sm font-medium">Trang chủ</a>
                </li>
                <li>
                  <a href="/products" class="block py-2 px-3 text-black hover:text-white rounded-md text-sm font-medium">Sản phẩm</a>
                </li>
               
                <li>
                <a href="/cart" class="block py-2 px-3 text-black hover:text-white rounded-md text-sm font-medium">Giỏ hàng</a>
              </li>
              ${localStorage.getItem("user") ? /* hmtl */`
              <li>
              <a href="/admin/dashboard" class="block py-2 px-3 text-black hover:text-white rounded-md text-sm font-medium">Admin</a>
            </li>
              ` : ""}

               
                
              </ul>
              <form action="" class="block py-3 px-4 text-black ">
                  <input type="text" class="px-2 py-1 border border-transparent rounded-md" />
                  <button class="  text-white rounded-md text-sm font-medium border border-transparent bg-indigo-600 px-2 py-1">Tìm kiếm</button>
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