import Navigo from "navigo";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./pages/home";

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

});

router.resolve();