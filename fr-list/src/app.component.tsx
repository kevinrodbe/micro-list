import { LookupContextProvider } from 'context/LookupContext';
import { QueryClientProvider, QueryClient } from 'react-query';
import styled from 'styled-components';

import { List } from './List';

const Container = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: 0 15px;
`;

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
        <Container>
          <List />
        </Container>
      </LookupContextProvider>
    </QueryClientProvider>
  );
}
