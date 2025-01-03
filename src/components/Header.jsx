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
import { Link } from "react-router-dom";
const Header = (props) => {
  return (
    <header className="">
      <nav className="fixed w-full top-0 z-10 text-xl py-2 text-white text-center bg-transparent">
        <Link className="" to={"/"}>
          Movie
        </Link>
      </nav>
      {props.movies.length === 0 ? (
        <div className="relative">
          <div className=" flex items-center justify-center w-full min-h-screen bg-gray-300 rounded  dark:bg-gray-700">
            <svg
              className="w-10 h-10 text-gray-200 dark:text-gray-600 animate-pulse"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
          <div className="absolute bottom-44 ps-10 animate-pulse ">
            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[80px] mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-96 xl:w-[600px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="flex gap-2">
              <div className="h-4  bg-gray-200 rounded-sm w-32 dark:bg-gray-700 mb-5"></div>
              <div className="flex flex-row gap-2">
                <div className="bg-gray-200 h-5 mb-2.5 min-w-[80px]  rounded-sm text-white text-sm"></div>
                <div className="bg-gray-200 h-5 mb-2.5 min-w-[80px]  rounded-sm text-white text-sm"></div>
                <div className="bg-gray-200 h-5 mb-2.5 min-w-[80px]  rounded-sm text-white text-sm"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
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
                      <Link
                        to={"movie/" + movie.id}
                        className="relative inline-block px-6 py-2 font-medium group"
                      >
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-red-600 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-white border-2 border-red-600 group-hover:bg-red-600"></span>
                        <span className="relative text-red-600 group-hover:text-white">
                          Detail
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </header>
  );
};

export default Header;
