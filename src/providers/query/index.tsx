import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import type { QueryProviderInterface } from "./query.type";

export const QueryProvider = (props: QueryProviderInterface) => {
  const { children } = props;
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: { refetchOnWindowFocus: false, retry: false },
      },
    })
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
