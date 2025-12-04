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

export const mockFilmsData: IMoviesResponse = {
  titles: [
    {
      id: '1',
      originalTitle: 'Inception',
      rating: {
        aggregateRating: '8.8',
      },
    },
    {
      id: '2',
      originalTitle: 'The Dark Knight',
      rating: {
        aggregateRating: '9.0',
      },
    },
    {
      id: '3',
      originalTitle: 'Interstellar',
      rating: {
        aggregateRating: '8.6',
      },
    },
    {
      id: '4',
      originalTitle: 'The Matrix',
      rating: {
        aggregateRating: '8.7',
      },
    },
    {
      id: '5',
      originalTitle: 'Pulp Fiction',
      rating: {
        aggregateRating: '8.9',
      },
    },
  ],
};