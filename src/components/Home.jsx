import React, { useEffect, useState } from "react";

const Home = () => {
  const [movies, setMovies] = useState([]);

  const fetchUrl = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=f644e0dfeca2781bf18728909b6112c9"
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results || []))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchUrl();
  }, []);

  return (
    <div className="mt-20 py-6">
      <h1 className="text-white text-4xl mb-8">Welcome to Prime Video</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-gray-900 rounded-lg overflow-hidden shadow-lg p-4"
          >
            <img
              className="w-full h-64 object-cover mb-4 rounded"
              src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
              alt={movie?.title}
            />
            <h2 className="text-white text-xl font-semibold mb-2">
              {movie.title}
            </h2>
            <p className="text-gray-300 mb-2">{movie.overview}</p>
            <p className="text-yellow-400 font-bold">
              Rating: {movie.vote_average}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
