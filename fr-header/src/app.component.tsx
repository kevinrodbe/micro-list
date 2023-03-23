import { QueryClientProvider, QueryClient } from 'react-query';

import { Header } from './ui/Header';
import { LookupContextProvider } from './context/LookupContext';

const queryClientConfig = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 2,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClientConfig}>
      <LookupContextProvider>
        <Header />
      </LookupContextProvider>
    </QueryClientProvider>
  );
}
