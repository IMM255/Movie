import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Movie from "./components/Movie";

const App = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const myFetch = async () => {
      try {
        let url = `https://api.themoviedb.org/3/discover/movie`;
        url += `?api_key=957b782a28833852f66b711ed65e195f`;
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
  return (
    <>
      <Header />
      <main className="mx-5">
        <div className="container m-auto my-5 ">
          <div className=" text-white text-center">
            <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-1 ">
              {movies.map((movie) => (
                <Movie key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
