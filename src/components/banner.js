/* eslint-disable import/no-unresolved */
// import Swiper JS
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const Banner = {
    render() {
        return /* html */ `
        <div class="swiper">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide">
                    <img src="https://intphcm.com/data/upload/banner-la-gi.jpg" />
                </div>
                <div class="swiper-slide">
                    <img src="https://rubicmarketing.com/wp-content/uploads/2021/07/banner-quang-cao-facebook-3.jpg" />    
                </div>
                <div class="swiper-slide">
                    <img src="https://picsum.photos/1024/400" />    
                </div>
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-pagination"></div>
        </div>
        `;
    },
    afterRender() {
        // eslint-disable-next-line no-unused-vars
        const swiper = new Swiper(".swiper", {
            pagination: {
                el: ".swiper-pagination",
                type: "progressbar",
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    },
};
export default Banner;