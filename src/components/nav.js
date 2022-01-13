const Nav = {
    render() {
        return /* html */`
        <nav>
        <div class="bg-[#b27b34]">
        <ul class="flex">
          <li>
            <a
              href="/"
              class="block py-2 px-3 text-white hover:underline underline-offset-4"
              >Trang chủ</a
            >
          </li>
          <li>
            <a
              href="/tuyensinh"
              class="block py-2 px-3 text-white hover:underline underline-offset-4"
              >Tuyển sinh</a
            >
          </li>
          <li>
            <a
              href=""
              class="block py-2 px-3 text-white hover:underline underline-offset-4"
              >Chương trình đào tạo</a
            >
          </li>
          <li>
            <a
              href=""
              class="block py-2 px-3 text-white hover:underline underline-offset-4"
              >Góc sinh viên</a
            >
          </li>
          <li>
            <a
              href=""
              class="block py-2 px-3 text-white hover:underline underline-offset-4"
              >Tuyển dụng</a
            >
          </li>
          <form action="" class="block py-3 px-4 text-white">
            <input type="text" />
            <button
              class="border-5 bg-cyan-900 px-[5px] text-white hover:bg-cyan-600"
            >
              TÌM KIẾM
            </button>
          </form>
        </ul>
      </div>
        </nav>`;
    },
};
export default Nav;