import Navigo from "navigo";
import Footer from "./components/footer";
import Header from "./components/header";
import TrangChu from "./pages/trangchu";

const router = new Navigo("/", { linksSelector: "a" });
const print = (content) => {
    document.getElementById("header").innerHTML = Header.render();
    document.getElementById("app").innerHTML = content;
    document.getElementById("footer").innerHTML = Footer.render();
};
router.on({
    "/": () => {
        print(TrangChu.render());
    },

});

router.resolve();