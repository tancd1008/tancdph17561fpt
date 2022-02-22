import { getAllCate } from "../api/products";

const CategoryProduct = {
    async render() {
        const { data } = await getAllCate();
        return /* html */`
        
        <div class="bg-white-100">
          <div class=" mx-auto px-2 sm:px-3 lg:px-4">
            <div class="max-w-2xl mx-auto py-16 sm:py-6 lg:py-6 lg:max-w-none">
              <h2 class="text-2xl font-extrabold text-gray-900">Loại Hàng</h2>
              <div class="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              ${data.map((post) =>/* html */ `
                <div class="group relative">
                  
                  <h3 class="text-center mt-6 text-xl text-gray-500">
                    <a href="/productCate/${post.id}">
                      <p class=" font-semibold text-gray-900">${post.name}</p>
                    </a>
                  </h3>
                </div>
                `).join("")}
              </div>
            </div>
          </div>
        </div>
        `;
    },
};
export default CategoryProduct;