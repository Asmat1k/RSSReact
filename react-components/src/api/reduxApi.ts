import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { updateLoading } from '../store/reducers/dataSlice';

export const dataApi = createApi({
  reducerPath: 'searchApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/people/' }),
  endpoints: (build) => ({
    searchPeople: build.query({
      query: (
        str = `?search=${localStorage.getItem('lastSearch')!}&page=1`
      ) => ({
        url: `${str}`,
      }),
      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        dispatch(updateLoading());
        await queryFulfilled;
        dispatch(updateLoading());
      },
    }),
  }),
});

export const { useLazySearchPeopleQuery, useSearchPeopleQuery } = dataApi;
