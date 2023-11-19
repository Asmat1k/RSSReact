import { combineReducers, configureStore } from '@reduxjs/toolkit';
import dataReducer from '../store/reducers/dataSlice';
import { dataApi } from '../api/reduxApi';

const rootReducer = combineReducers({
  dataReducer,
  [dataApi.reducerPath]: dataApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(dataApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
