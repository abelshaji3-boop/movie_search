import { useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";

const Home = () => {

  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  const getMovies = async () => {
    if (!search.trim()) {
      setMovies([]);
      setError("Please enter a search term.");
      return;
    }

    try {
      setError("");
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=1f2805ad&s=${encodeURIComponent(search)}`
      );

      if (response.data.Response === "False") {
        setMovies([]);
        setError(response.data.Error || "No movies found.");
      } else {
        setMovies(response.data.Search || []);
      }
    } catch (err) {
      setMovies([]);
      setError("Unable to fetch movies. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="relative w-full rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-[0_30px_80px_rgba(2,8,23,0.45)] backdrop-blur-3xl sm:p-12">
          <header className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">Movie Search</h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
              Explore films with fast search and a smooth glassmorphism interface.
            </p>
          </header>

          <div className="mt-10 grid w-full max-w-3xl grid-cols-[1fr_auto] gap-4 mx-auto sm:grid-cols-1">
            <input
              className="h-14 w-full rounded-[1.25rem] border border-white/15 bg-slate-950/60 px-5 text-base text-slate-100 outline-none ring-1 ring-transparent transition focus:border-sky-400/60 focus:ring-sky-400/20"
              type="text"
              placeholder="Search Movie..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="inline-flex h-14 items-center justify-center rounded-[1.25rem] border border-white/20 bg-white/10 px-8 text-base font-semibold text-white shadow-[0_20px_50px_rgba(255,255,255,0.08)] backdrop-blur-xl transition duration-300 hover:border-white/40 hover:bg-white/20 hover:shadow-[0_24px_70px_rgba(56,189,248,0.28)] hover:-translate-y-0.5"
              onClick={getMovies}
            >
              Search
            </button>
          </div>

          {error && <p className="mt-6 text-center text-sm text-rose-300">{error}</p>}

          <div className="mt-10 grid w-full gap-6 sm:grid-cols-2">
            {movies?.length > 0 ? (
              movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
            ) : (
              !error && search.trim() && (
                <p className="col-span-full mt-6 text-center text-slate-300">No movies found for "{search}".</p>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;