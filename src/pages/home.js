import data from "../data";

const Home = {
    render() {
        return /* html */`
        <main class="max-w-5xl mx-auto">
        <h2 class="py-2 font-bold text-blue">TIN TỨC HỌC TẬP</h2>
        
          <div class="grid grid-cols-3 gap-8 border border-black py-[10px] px-[10px] mx-auto">
            ${data.map((post) => `
            <div class="border p-4">
                            <a href="">
                                <img src="${post.img}" alt="" />
                            </a>
                            <h3 class="my-3"><a href="/new/${post.id}" class="font-semibold text-lg text-orange-500">${post.title}</a></h3>
                            <p>${post.content}</p>
                        </div>
            `).join("")}
          </div>
        

        <h2 class="py-2 font-bold text-blue">HOẠT ĐỘNG SINH VIÊN</h2>
        <div class="grid grid-cols-3 gap-8 border border-black py-[10px] px-[10px] mx-auto">
        ${data.map((post) => `
        <div class="border p-4">
                        <a href="">
                            <img src="${post.img}" alt="" />
                        </a>
                        <h3 class="my-3"><a href="/new/${post.id}" class="font-semibold text-lg text-orange-500">${post.title}</a></h3>
                        <p>${post.content}</p>
                    </div>
        `).join("")}
      </div>
        
      </main>
        `;
    },
};
export default Home;