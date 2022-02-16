import Navigo from "navigo";
import Dashboard from "./pages/admin/dashboard";
// import Footer from "./components/footer";
// import Header from "./components/header";
import Home from "./pages/home";
import New from "./pages/news";
import AdminPost from "./pages/admin/posts";
import AddPost from "./pages/admin/posts/add";
import AdminEditposts from "./pages/admin/posts/edit";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import ProductDetailPage from "./pages/products/detail";
import ProductsPage from "./pages/products";
import CartPage from "./pages/cart";

const router = new Navigo("/", { linksSelector: "a" });
// const print = async (content, id) => {
//     // document.getElementById("header").innerHTML = Header.render();
//     document.getElementById("content").innerHTML = await content.render(id);
//     if (content.afterRender) await content.afterRender();
//     // document.getElementById("footer").innerHTML = Footer.render();
// };
const print = async (content, id) => {
    document.getElementById("app").innerHTML = await content.render(id);
    if (content.afterRender) await content.afterRender(id);
};
router.on({
    "/": () => {
        print(Home);
    },
    "/products": () => print(ProductsPage),
    "/products/:id": ({ data }) => {
        const { id } = data;
        print(ProductDetailPage, id);
    },
    "/cart": () => print(CartPage),
    "/signin": () => {
        print(Signin);
    },
    "/signup": () => {
        print(Signup);
    },
    "/admin/dashboard": () => {
        print(Dashboard);
    },
    "/admin/news": () => {
        print(AdminPost);
    },
    "/admin/news/add": () => {
        print(AddPost);
    },
    "/new/:id": ({ data }) => {
        const { id } = data;
        print(New, id);
    },
    "/admin/posts/:id/edit": ({ data }) => print(AdminEditposts, data.id),

});

router.resolve();
/* callback là 1 hàm được truyền vào 1 hàm khác như 1 đối số
   sync,async : Đồng bộ và bất đồng bộ trong javascript
*/
// function loadScript(src, callback) {
//     const script = document.createElement("script");
//     script.src = src;
//     script.onload = () => {
//         callback(null, script);
//     };
//     script.onerror = () => {
//         callback("Loi roi");
//     };
//     document.head.append(script);
// }
// callback in callback
// loadScript("http://aloalo.com/index.js", (error, script) => {
//     loadScript("http://aloalo.com/index.js", (error, script) => {
//         loadScript("http://aloalo.com/index.js", (error, script) => {
//             console.log("finished");
//         });
//     });
// });

// es6 - promise: là một đối tượng đặc biệt, xử lý bất đồng bộ.
// const render = () => new Promise((resolve, reject) => {
//     const status = false;
//     setTimeout(() => {
//         if (status) {
//             resolve([1, 2, 3, 4]);
//         } else {
//             reject(new Error("Lắc đầu"));
//         }
//     }, 3000);
// });

// // render().then((result) => console.log(result));
// // render().then(() => console.log("AloAlo"));
// // render().catch((error) => console.log(error));

// // async/await: cú pháp mới es8, xử lý bất đồng bộ
// const printA = async () => {
//     try {
//         const result = await render();
//         console.log("result", result);
//         result.push(5);
//         console.log("result", result);
//     } catch (error) {
//         console.log(error);
//     }
// };
// printA();
// fetch('https://5e79b4b817314d00161333da.mockapi.io/posts')
//     .then(reponse => reponse.json());
//     .then(data => );