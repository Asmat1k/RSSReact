import { createContext } from 'react';

import { ApiProps } from '../../types/types';

interface DefaultValue {
  data: {
    response: ApiProps;
    number: number;
    isLoading: boolean;
  };
  updateLoadingState(): void;
  updateDataState(json: ApiProps | void): void;
  updateNumberState(newNum: number): void;
}

const Context = createContext<DefaultValue>({
  data: {
    response: {
      count: 0,
      next: '',
      previous: '',
      results: [],
    },
    number: 10,
    isLoading: false,
  },
  updateLoadingState() {},
  updateDataState() {},
  updateNumberState() {},
});

export default Context;
