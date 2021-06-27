$(function () {


})
const mainLeft = new Swiper(".main-slider", {
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var mainRight = new Swiper(".bunner-slider", {
    direction: "vertical",
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: true,
});