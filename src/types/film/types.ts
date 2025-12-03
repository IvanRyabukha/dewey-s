export interface IMoviesResponse {
  titles: IMovie[];
}

interface IMovie {
  id: string;
  originalTitle: string;
  rating?: {
    aggregateRating: string;
  };
};