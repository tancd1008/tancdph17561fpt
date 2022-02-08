import Navigo from "navigo";
import Dashboard from "./pages/admin/dashboard";
import EditPage from "./pages/admin/news/edit";
import AddNewsPage from "./pages/admin/news/add";
// import Footer from "./components/footer";
// import Header from "./components/header";
import Home from "./pages/home";
import New from "./pages/news";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import TinTuc from "./pages/tintuc";
import AdminPost from "./pages/admin/news";

const router = new Navigo("/", { linksSelector: "a" });
const print = async (content, id) => {
    // document.getElementById("header").innerHTML = Header.render();
    document.getElementById("content").innerHTML = await content.render(id);
    // document.getElementById("footer").innerHTML = Footer.render();
};
router.on({
    "/": () => {
        print(Home);
    },
    "/tintuc": () => {
        print(TinTuc);
    },
    "/signin": () => {
        print(SignIn);
    },
    "/signup": () => {
        print(SignUp);
    },
    "/admin/dashboard": () => {
        print(Dashboard);
    },
    "/admin/news": () => {
        print(AdminPost);
    },
    "/admin/news/add": () => {
        print(AddNewsPage);
    },
    "/new/:id": ({ data }) => {
        const { id } = data;
        print(New, id);
    },
    "/admin/news/:id/edit": ({ data }) => {
        const { id } = data;
        print(EditPage, id);
    },

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