import { ReactElement, ReactNode, useMemo, useState } from 'react';

import { ApiProps } from '../../types/types';
import Context from './context';

interface ContextProvider {
  children: ReactNode;
}

interface ContextState {
  response: ApiProps;
  number: number;
  isLoading: boolean;
}

function ContextProvider({ children }: ContextProvider): ReactElement {
  const [data, setData] = useState<ContextState>({
    response: {
      count: 0,
      next: '',
      previous: '',
      results: [],
    },
    number: 10,
    isLoading: false,
  });

  const value = useMemo(() => {
    function updateLoadingState() {
      setData((prevState) => ({
        ...prevState,
        isLoading: !prevState.isLoading,
      }));
    }

    function updateDataState(json?: ApiProps | void) {
      if (json)
        setData((prevState) => {
          return {
            ...prevState,
            response: json,
          };
        });
    }

    function updateNumberState(newNum: number) {
      setData((prevState) => {
        return {
          ...prevState,
          number: newNum,
        };
      });
    }

    return {
      data,
      updateLoadingState,
      updateDataState,
      updateNumberState,
    };
  }, [data]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default ContextProvider;
