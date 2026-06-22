import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <Link
      to={`/movie/${movie.imdbID}`}
      className="group grid gap-4 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 p-4 shadow-[0_20px_40px_rgba(0,0,0,0.16)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-sky-400/30"
      aria-label={`View details for ${movie.Title}`}
    >
      <div className="aspect-[2/3] overflow-hidden rounded-[1.5rem] bg-slate-950/50">
        {movie.Poster && movie.Poster !== "N/A" ? (
          <img src={movie.Poster} alt={movie.Title} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full items-center justify-center px-4 text-center text-sm text-slate-400">No poster available</div>
        )}
      </div>
      <div className="space-y-3">
        <h2 className="text-lg font-semibold leading-tight text-white">{movie.Title}</h2>
        <p className="text-sm text-slate-300">{movie.Year}</p>
        <span className="inline-flex rounded-full bg-sky-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-sky-200">
          {movie.Type}
        </span>
      </div>
    </Link>
  );
};

export default MovieCard;
