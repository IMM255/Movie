import { Link } from "react-router-dom";
import {
  getImage,
  getYear,
  getTitle,
  getOverview,
  getVideoEmbed,
  getGenre,
} from "./utils/movieHelpers";
const Movie = ({ movie, videos }) => {
  const loading = !movie;
  return (
    <Link to={"movie/" + movie.id} className="w-full group">
      <div className="relative ">
        <img
          src={getImage(movie)}
          alt={movie.title}
          className="rounded-md w-full"
        ></img>
        <span className="absolute top-0 right-0 bg-slate-600 py-1 px-2 rounded-bl-md rounded-tr-md">
          {movie.vote_average.toFixed(1)}
        </span>
        <div className="opacity-0 group-hover:opacity-100 transition  duration-500 ease-in-out">
          <div className="absolute bottom-0 ps-2 py-4 flex flex-col bg-gradient-to-t from-black rounded">
            <div className="flex gap-2">
              <h3 className="font-bold text-lg text-white">{getYear(movie)}</h3>
              {getGenre(movie)}
            </div>
            <p className="text-justify pe-3 text-sm">{getOverview(movie)}</p>
          </div>
        </div>
      </div>
      <h3 className="text-left font-bold text-xl">{getTitle(movie)}</h3>
      <div className="mt-4"></div>
    </Link>
  );
};

export default Movie;
