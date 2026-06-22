import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    setError('');

    axios
      .get(`https://www.omdbapi.com/?apikey=1f2805ad&i=${id}&plot=full`)
      .then((response) => {
        if (response.data.Response === 'False') {
          setError(response.data.Error || 'Movie not found.');
          setMovie(null);
        } else {
          setMovie(response.data);
        }
      })
      .catch(() => {
        setError('Unable to load movie details. Please try again.');
        setMovie(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-12 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-400/30 hover:bg-white/15"
        >
          ← Back to search
        </button>

        <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-[0_30px_80px_rgba(2,8,23,0.45)] backdrop-blur-3xl sm:p-10">
          {loading ? (
            <div className="flex min-h-[320px] items-center justify-center text-slate-300">Loading movie details…</div>
          ) : error ? (
            <div className="min-h-[320px] text-center text-slate-300">{error}</div>
          ) : movie ? (
            <div className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)]">
              <div className="overflow-hidden rounded-[1.75rem] bg-slate-950/50">
                {movie.Poster && movie.Poster !== 'N/A' ? (
                  <img src={movie.Poster} alt={movie.Title} className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full min-h-[420px] items-center justify-center px-4 text-center text-sm text-slate-400">
                    No poster available
                  </div>
                )}
              </div>

              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl font-semibold text-white sm:text-5xl">{movie.Title}</h1>
                  <p className="mt-3 text-sm uppercase tracking-[0.24em] text-sky-200">{movie.Genre}</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-5">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Year</p>
                    <p className="mt-2 text-lg font-semibold text-white">{movie.Year}</p>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-5">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Runtime</p>
                    <p className="mt-2 text-lg font-semibold text-white">{movie.Runtime}</p>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-5">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Director</p>
                    <p className="mt-2 text-base text-slate-200">{movie.Director}</p>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-5">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Actors</p>
                    <p className="mt-2 text-base text-slate-200">{movie.Actors}</p>
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-6">
                  <h2 className="text-lg font-semibold text-white">Plot</h2>
                  <p className="mt-3 leading-relaxed text-slate-300">{movie.Plot}</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-5 text-center">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Rating</p>
                    <p className="mt-2 text-lg font-semibold text-white">{movie.Rated}</p>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-5 text-center">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Released</p>
                    <p className="mt-2 text-lg font-semibold text-white">{movie.Released}</p>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-5 text-center">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">IMDb</p>
                    <p className="mt-2 text-lg font-semibold text-white">{movie.imdbRating}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="min-h-[320px] text-center text-slate-300">No movie selected.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
