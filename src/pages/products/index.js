import { getAll } from "../../api/products";
import Banner from "../../components/banner";
import Footer from "../../components/footer";
import Header from "../../components/header";
import CategoryProduct from "../../components/productCate";

const ProductsPage = {
    async render() {
        const { data } = await getAll();
        return /* html */`
        <div class="max-w-5xl mx-auto"> 
            <div id="header">
                ${Header.render()}
            </div>
            <div class="banner">
              ${Banner.render()}
          </div>
          <div>
          ${await CategoryProduct.render()}
            
          </div>
            <div class="news">
            <div class="bg-white">
            <div class=" mx-auto py-10 px-14 sm:py-5 sm:px-4  lg:px-[45px]">
              <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Sản phẩm mới</h2>
                <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    ${data.map((product) =>/* html */ `
                    <div class="group relative">
                        <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                            <a href="/products/${product.id}">
                                <img src="${product.img}" alt="Front of men&#039;s Basic Tee in black." class="w-full h-full object-center object-cover lg:w-full lg:h-full">
                            </a>
                        </div>
                      <div class="mt-4 flex justify-between">
                        <div>
                          <h3 class="text-sm text-gray-700">
                            <a href="/products/${product.id}">
                              ${product.name}
                            </a>
                          </h3>
                        </div>
                        <p class="text-sm font-medium text-gray-900">${product.price}</p>
                      </div>
                    </div>
                    `).join("")}
                </div>
            </div>
          </div>
          <div class="bg-white">
            <div class=" mx-auto py-2 px-2 sm:py-3 sm:px-2  lg:px-[45px]">
              <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Sản phẩm bán chạy</h2>
                <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    ${data.map((product) =>/* html */ `
                    <div class="group relative">
                        <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                            <a href="/products/${product.id}">
                                <img src="${product.img}" alt="Front of men&#039;s Basic Tee in black." class="w-full h-full object-center object-cover lg:w-full lg:h-full">
                            </a>
                        </div>
                      <div class="mt-4 flex justify-between">
                        <div>
                          <h3 class="text-sm text-gray-700">
                            <a href="/products/${product.id}">
                              ${product.name}
                            </a>
                          </h3>
                        </div>
                        <p class="text-sm font-medium text-gray-900">${product.price}</p>
                      </div>
                    </div>
                    `).join("")}
                </div>
            </div>
          </div>
            </div>
        </div>
            <div id="footer">
            ${Footer.render()}
        </div>
        </div>
        `;
    },
    afterRender() {
        Header.afterRender();
        Banner.afterRender();
    },
};

export default ProductsPage;