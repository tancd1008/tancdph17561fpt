import Footer from "../components/footer";
import Header from "../components/header";

const TinTuc = {
    render() {
        return `
        ${Header.render()}
        <h1 class="max-w-5xl mx-auto text-center">Tin Tức</h1>
        ${Footer.render()}
        `;
    },
};
export default TinTuc;