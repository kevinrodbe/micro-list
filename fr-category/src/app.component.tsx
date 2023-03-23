import { QueryClientProvider, QueryClient } from 'react-query';

import { Category } from './ui/Category';
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
        <Category />
      </LookupContextProvider>
    </QueryClientProvider>
  );
}
