import background from "../assets/img/hero.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  getImage,
  getYear,
  getTitle,
  getOverview,
  getVideoEmbed,
  getGenre,
} from "./utils/movieHelpers";
import "swiper/css";
const Header = (props) => {
  return (
    <header className="">
      <nav className="fixed w-full top-0 z-10 text-xl py-2 text-white text-center bg-transparent">
        <a className="" href="#">
          Movie
        </a>
      </nav>
      <Swiper className="">
        {props.movies.slice(0, 5).map((movie) => {
          return (
            <SwiperSlide key={movie.id}>
              <div>
                <img
                  className="max-h-screen min-h-screen w-full object-cover relative  "
                  src={getImage(movie, "cover")}
                />
                <div className="absolute xl:bottom-0 bg-black xl:min-h-50 w-full"></div>
                <div
                  className="xl:ps-10 px-5
                 absolute xl:bottom-44  bottom-44 flex flex-col gap-4"
                >
                  <h1 className="text-white xl:text-5xl font-bold text-left">
                    {getTitle(movie)}
                  </h1>
                  <p className="text-white text-justify xl:w-2/5 xl:text-lg text-sm">
                    {getOverview(movie, 300)}
                  </p>
                  <div className="flex gap-4">
                    <h3 className="text-2xl font-bold text-white">
                      {getYear(movie)}
                    </h3>
                    {getGenre(movie)}
                  </div>
                  <div className="text-left">
                    <a
                      href="#_"
                      className="relative inline-block px-6 py-2 font-medium group"
                    >
                      <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-red-600 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                      <span className="absolute inset-0 w-full h-full bg-white border-2 border-red-600 group-hover:bg-red-600"></span>
                      <span className="relative text-red-600 group-hover:text-white">
                        Detail
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </header>
  );
};

export default Header;
