import { createContext, useContext } from 'react';

import { useFetchConfig } from 'domains/masters/services';

const LookupContext = createContext({} as any);

export const LookupContextProvider = ({ children }) => {
  const { data, isFetching } = useFetchConfig();

  if (isFetching) {
    return <>loading...</>;
  }

  const { movies } = data;

  return <LookupContext.Provider value={{ movies }}>{children}</LookupContext.Provider>;
};

export const useLookupContext = () => {
  const context = useContext(LookupContext);

  if (context === undefined) {
    throw new Error('useLookupContext must be used within a LookupContextProvider');
  }

  return context;
};
