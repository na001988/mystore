// src/lib/query-client.ts
import { QueryClient } from "@tanstack/react-query";
var MEDUSA_BACKEND_URL = __BACKEND_URL__ ?? "/";
var queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 9e4,
      retry: 1
    }
  }
});

// src/lib/query-key-factory.ts
var queryKeysFactory = (globalKey) => {
  const queryKeyFactory = {
    all: [globalKey],
    lists: () => [...queryKeyFactory.all, "list"],
    list: (query) => [...queryKeyFactory.lists(), query ? { query } : void 0].filter(
      (k) => !!k
    ),
    details: () => [...queryKeyFactory.all, "detail"],
    detail: (id, query) => [...queryKeyFactory.details(), id, query ? { query } : void 0].filter(
      (k) => !!k
    )
  };
  return queryKeyFactory;
};

export {
  queryClient,
  queryKeysFactory
};
