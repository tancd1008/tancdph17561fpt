import Navigo from "navigo";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./pages/home";
import New from "./pages/news";
import TuyenSinh from "./pages/tuyensinh";

const router = new Navigo("/", { linksSelector: "a" });
const print = (content) => {
    document.getElementById("header").innerHTML = Header.render();
    document.getElementById("app").innerHTML = content;
    document.getElementById("footer").innerHTML = Footer.render();
};
router.on({
    "/": () => {
        print(Home.render());
    },
    "/tuyensinh": () => {
        print(TuyenSinh.render());
    },
    "/new/:id": ({ data }) => {
        const { id } = data;
        print(New.render(id));
    },

});

router.resolve();