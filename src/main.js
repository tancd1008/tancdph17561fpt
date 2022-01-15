import Navigo from "navigo";
import Dashboard from "./pages/admin/dashboard";
import EditPage from "./pages/admin/news/edit";
import AdminNewsPage from "./pages/admin/news";
import AddNewsPage from "./pages/admin/news/add";
// import Footer from "./components/footer";
// import Header from "./components/header";
import Home from "./pages/home";
import New from "./pages/news";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import TinTuc from "./pages/tintuc";

const router = new Navigo("/", { linksSelector: "a" });
const print = (content) => {
    // document.getElementById("header").innerHTML = Header.render();
    document.getElementById("app").innerHTML = content;
    // document.getElementById("footer").innerHTML = Footer.render();
};
router.on({
    "/": () => {
        print(Home.render());
    },
    "/tintuc": () => {
        print(TinTuc.render());
    },
    "/signin": () => {
        print(SignIn.render());
    },
    "/signup": () => {
        print(SignUp.render());
    },
    "/admin/dashboard": () => {
        print(Dashboard.render());
    },
    "/admin/news": () => {
        print(AdminNewsPage.render());
    },
    "/admin/news/add": () => {
        print(AddNewsPage.render());
    },
    "/new/:id": ({ data }) => {
        const { id } = data;
        print(New.render(id));
    },
    "/admin/news/:id/edit": ({ data }) => {
        const { id } = data;
        print(EditPage.render(id));
    },

});

router.resolve();