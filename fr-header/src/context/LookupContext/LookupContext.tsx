import { createContext, useContext } from 'react';

const LookupContext = createContext({} as any);

// TODO: reemplar por BE
const value = {
  languages: {
    default: 'es',
    en: {
      label: 'English 🇺🇸',
      value: 'en',
    },
    es: {
      label: 'Español 🇪🇸',
      value: 'es',
    },
  },
};

export const LookupContextProvider = ({ children }) => {
  return <LookupContext.Provider value={value}>{children}</LookupContext.Provider>;
};

export const useLookupContext = () => {
  const context = useContext(LookupContext);

  if (context === undefined) {
    throw new Error('useLookupContext must be used within a LookupContextProvider');
  }

  return context;
};
