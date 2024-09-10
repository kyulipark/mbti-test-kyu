import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GlobalStyled from "./shared/GlobalStyled";
import Router from "./shared/Router";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyled />
      <Router />
    </QueryClientProvider>
  );
};

export default App;
