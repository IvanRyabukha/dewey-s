import { useGetFilmsQuery } from '../../app/api/filmsApi';
import { MovieItem } from './movie-item/MovieItem';
import Marquee from 'react-fast-marquee';

export function MoviesRating() {
  const { data, error, isLoading } = useGetFilmsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading films</div>;
  }

  if (!data || !data.titles || data.titles.length === 0) {
    return <div>No films available</div>;
  }

  const movies = data.titles || [];

  return (
    <div className="border-y border-neutral-700 py-1 mt-7">
      <Marquee
        gradient={true}
        speed={0}
        gradientWidth={20}
        pauseOnHover={true}
        className="bg-[#fedfef]"
      >
        {movies.map((movie) => (
          <MovieItem
            key={movie.id}
            title={movie.originalTitle}
            rataing={movie.rating?.aggregateRating || 'N/A'}
          />
        ))}
      </Marquee>
    </div>
  );
}
