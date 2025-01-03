import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  getImage,
  getProfile,
  getVideoEmbed,
} from "../components/utils/movieHelpers";
import { Swiper, SwiperSlide } from "swiper/react";
const Detail = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);
  const [cast, setCast] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const myFetch = async () => {
      const apiKey = import.meta.env.VITE_API_KEY;
      try {
        let url = `https://api.themoviedb.org/3/movie/${id}`;
        url += `?api_key=${apiKey}`;
        let response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Terjadi gangguan dengan kode: ${response.status}`);
        }
        let data = await response.json();
        console.log(data);
        setItem(data);

        //fetch cast
        let castUrl = `https://api.themoviedb.org/3/movie/${id}/credits`;
        castUrl += `?api_key=${apiKey}`;
        let castResponse = await fetch(castUrl);
        if (!castResponse.ok) {
          throw new Error(`Terjadi gangguan dengan kode: ${castResponse}`);
        }
        let castData = await castResponse.json();
        setCast(castData.cast);

        //fetch video
        let videosResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&api_key=${apiKey}`
        );
        if (!videosResponse.ok)
          throw new Error("Failed to fetch video details");
        let videosData = await videosResponse.json();
        setVideos(videosData.results);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    myFetch();
  }, [id]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-EN", options);
  };

  return (
    <>
      <header>
        <nav className="fixed w-full top-0 z-10 text-xl py-2 text-white text-center bg-transparent">
          <Link className="" to={"/"}>
            Movie
          </Link>
        </nav>
        <div>
          {loading ? (
            <div className=" flex items-center justify-center w-full min-h-screen bg-gray-300 rounded  dark:bg-gray-700">
              <svg
                className="w-10 h-10 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
          ) : (
            <img
              className="max-h-screen min-h-screen w-full object-cover relative  "
              src={getImage(item, "cover")}
            />
          )}
          <div className="absolute bottom-0 ps-2 py-4 w-full h-full bg-gradient-to-t from-black rounded "></div>
          <div className="xl:ps-10 px-5 absolute xl:bottom-20 left-0 right-0 bottom-20 flex xl:gap-5 gap-2 flex-col md:flex-row shadow-lg">
            {loading ? (
              <div className="">
                <div className="animate-pulse m-auto flex items-center justify-center w-[250px] h-[350px] bg-gray-300 rounded dark:bg-gray-700">
                  <svg
                    className="w-10 h-10 m-auto text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                  </svg>
                </div>
              </div>
            ) : (
              <img
                className="xl:max-w-[500px] xl:max-h-[500px] max-w-[250px]  rounded-md m-auto md:m-0"
                src={getImage(item, "poster")}
                alt=""
              />
            )}
            <div className="flex flex-col gap-4 xl:pe-40 md:pt-20 justify-between ">
              {loading ? (
                <div className="animate-pulse min-w-[450px]">
                  <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full max-w-[290px] dark:bg-gray-700 mb-5"></div>
                  <div className="flex flex-row gap-2">
                    <div className="bg-gray-200 h-5 mb-2.5 min-w-[80px]  rounded-sm text-white text-sm"></div>
                    <div className="bg-gray-200 h-5 mb-2.5 min-w-[80px]  rounded-sm text-white text-sm"></div>
                    <div className="bg-gray-200 h-5 mb-2.5 min-w-[80px]  rounded-sm text-white text-sm"></div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <h1 className="text-white xl:text-5xl font-bold text-left">
                    {item.title}
                  </h1>
                  <p className="text-white text-justify  xl:text-lg text-sm">
                    {item.overview}
                  </p>
                  <div className="flex gap-4">
                    {item.genres &&
                      item.genres.map((genre) => (
                        <span
                          key={genre.id}
                          className="bg-slate-500 px-2 py-1 rounded text-white text-sm"
                        >
                          {genre.name}
                        </span>
                      ))}
                  </div>
                </div>
              )}
              <div>
                {loading ? (
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                ) : (
                  <h1 className="text-white text-xl">
                    Release Date :{" "}
                    <span className="font-bold">
                      {formatDate(item.release_date)}
                    </span>
                  </h1>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="mt-24">
        <h1 className="ps-4 mb-4 text-4xl text-white font-bold">Cast</h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          {cast
            .filter((person) => person.known_for_department === "Acting")
            .map((cast) => {
              return (
                <SwiperSlide
                  key={cast.id}
                  className="rounded-md border border-slate-800 max-h-[350px] max-w-[250px] shadow-lg"
                >
                  <div className="relative">
                    <img
                      src={getProfile(cast)}
                      alt=""
                      className="rounded-md  w-full"
                    />
                    <div className="absolute h-60 w-full bottom-0 bg-gradient-to-t from-black"></div>
                    <div className="absolute bottom-12 text-white text-left ps-4">
                      <h1 className="font-bold text-lg">{cast.name}</h1>
                      <h1 className="text-sm">{cast.character}</h1>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
      <div className="min-h-screen mt-20">
        <h1 className="text-center text-white font-bold text-4xl">Videos</h1>
        <div className="flex gap-5 flex-wrap m-auto justify-center">
          {videos.map((video) => {
            return getVideoEmbed(video);
          })}
        </div>
      </div>
    </>
  );
};

export default Detail;
