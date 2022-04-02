import logo from './logo.svg';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query'
import { MainLayout } from './layout'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout />
    </QueryClientProvider>
  );
}

export default App;
