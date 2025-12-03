import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IMoviesResponse } from '../../types/film/types';

export const filmsApi = createApi({
  reducerPath: 'filmsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.imdbapi.dev/' }),
  endpoints: (builder) => ({
    getFilms: builder.query<IMoviesResponse, void>({
      query: () => 'titles',
    }),
  }),
});

export const { useGetFilmsQuery } = filmsApi;