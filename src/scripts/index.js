import "./modules/+";
import Swiper from "swiper";
import { Grid } from "swiper/modules";
var swiper = new Swiper(".mySwiper", {
  modules: [Grid],
  slidesPerView: 3,
  spaceBetween: 30,
  grid: {
    rows: 2,
    fill: "row",
  },
});
