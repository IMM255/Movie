// import imgPlaceholder from '../components/img'
const Movie = (props) => {
  const getImage = () => {
    if (props.movie.poster_path) {
      return `https://image.tmdb.org/t/p/w342${props.movie.poster_path}`;
    } else {
      // return imgPlaceholder;
    }
  };

  const getYear = () => {
    return new Date(props.movie.release_date).getFullYear();
  };

  const getTitle = () => {
    if (props.movie.title.length >= 17) {
      return props.movie.title.substring(0, 17) + "...";
    } else {
      return props.movie.title;
    }
  };

  const getOverview = () => {
    if (props.movie.overview.length >= 100) {
      return props.movie.overview.substring(0, 100) + "...";
    } else {
      return props.movie.overview;
    }
  };

  const getGenre = () => {
    const genres = [
      { id: 28, name: "Action" },
      { id: 12, name: "Adventure" },
      { id: 16, name: "Animation" },
      { id: 35, name: "Comedy" },
      { id: 80, name: "Crime" },
      { id: 99, name: "Documentary" },
      { id: 18, name: "Drama" },
      { id: 10751, name: "Family" },
      { id: 14, name: "Fantasy" },
      { id: 36, name: "History" },
      { id: 27, name: "Horror" },
      { id: 10402, name: "Music" },
      { id: 9648, name: "Mystery" },
      { id: 10749, name: "Romance" },
      { id: 878, name: "Science Fiction" },
      { id: 10770, name: "TV Movie" },
      { id: 53, name: "Thriller" },
      { id: 10752, name: "War" },
      { id: 37, name: "Western" },
    ];

    let movieGenre = [];
    genres.forEach((genre) => {
      if (props.movie.genre_ids.includes(genre.id)) {
        movieGenre.push(genre.name);
      }
    });
    return (
      <div className="flex flex-wrap gap-1 ">
        {movieGenre.map((genre) => (
          <span
            key={genre.toString()}
            className="bg-slate-500 px-2 py-1 rounded text-white text-sm"
          >
            {genre}
          </span>
        ))}
      </div>
    );
  };
  return (
    <div className="w-full group">
      {console.log(props.movie)}
      <div className="relative ">
        <img
          src={getImage()}
          alt={props.movie.title}
          className="rounded-md w-full"
        ></img>
        <span className="absolute top-0 right-0 bg-slate-600 py-1 px-2 rounded-bl-md rounded-tr-md">
          {props.movie.vote_average}
        </span>
        <div className="opacity-0 group-hover:opacity-100 transition  duration-500 ease-in-out">
          <div className="absolute bottom-0 ps-2 py-4 flex flex-col bg-gradient-to-t from-black rounded">
            <div className="flex gap-2">
              <h3 className="font-bold text-lg text-white">2018</h3>
              {getGenre()}
              {/* {getGenre().map((genres, idx) => {
                  return (
                    <span
                      key={idx}
                      className="bg-slate-500 px-2 py-1 rounded-lg  text-white"
                    >
                      {genres}
                    </span>
                  );
                })} */}
            </div>
            <p className="text-justify pe-3 text-sm">{getOverview()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
