export const getImage = (movie, type = "poster") => {
  const path = type === "poster" ? movie.poster_path : movie.backdrop_path;
  if (movie.poster_path) {
    return `https://image.tmdb.org/t/p/original/${path}`;
  } else {
    return "/path/to/placeholder/image.jpg"; // Ganti dengan path gambar placeholder
  }
};

export const getProfile = (movie) => {
  return `https://image.tmdb.org/t/p/original/${movie.profile_path}`;
};

export const getYear = (movie) => {
  return new Date(movie.release_date).getFullYear();
};

export const getTitle = (movie) => {
  return movie.title.length >= 17
    ? movie.title.substring(0, 17) + "..."
    : movie.title;
};

export const getOverview = (movie, max = 100) => {
  return movie.overview.length >= max
    ? movie.overview.substring(0, max) + "..."
    : movie.overview;
};

export const getVideoEmbed = (videos) => {
  return (
    <iframe
      width={420}
      height={315}
      src={`https://www.youtube.com/embed/${videos.key}`}
    >
      Tonton sekarang
    </iframe>
  );
};

export const getGenre = (movie, type = "movie") => {
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

  const movieGenres = genres.filter((genre) =>
    movie.genre_ids.includes(genre.id)
  );
  return (
    <div className="flex flex-wrap gap-1">
      {movieGenres.map((genre) => (
        <span
          key={genre.id}
          className="bg-slate-500 px-2 py-1 rounded text-white text-sm"
        >
          {genre.name}
        </span>
      ))}
    </div>
  );
};
