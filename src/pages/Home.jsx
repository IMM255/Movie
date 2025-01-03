import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [videos, setVideos] = useState({});

  useEffect(() => {
    const myFetch = async () => {
      try {
        const apiKey = import.meta.env.VITE_API_KEY;
        console.log(apiKey);
        let url = `https://api.themoviedb.org/3/discover/movie`;
        url += `?api_key=${apiKey}`;
        url += `&certification_country=US`;
        url += `&certification.lte=PG-13`;
        let response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Terjadi gangguan dengan kode: ${response.status}`);
        }
        let data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    myFetch();
  }, []);
  useEffect(() => {
    const videos = async () => {
      for (const movie of movies) {
        try {
          let url = `https://api.themoviedb.org/3/movie/${movie.id}/videos?language=en-US&api_key=957b782a28833852f66b711ed65e195f`;
          let response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Terjadi gangguan dengan kode: ${response.status}`);
          }
          const data = await response.json();
          setVideos((prevVideos) => ({
            ...prevVideos,
            [movie.id]: data.results,
          }));
        } catch (error) {
          console.log(error);
        }
      }
    };
    if (movies.length > 0) {
      videos();
    }
  }, [movies]);
  return (
    <>
      <Header movies={movies} />
      <main className="mx-5">
        <div className="container m-auto my-5 ">
          <div className=" text-white text-center">
            <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-2 gap-y-8 ">
              {movies.map((movie) => (
                <Movie key={movie.id} movie={movie} videos={videos[movie.id]} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
