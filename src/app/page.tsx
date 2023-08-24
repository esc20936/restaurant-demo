"use client";
import MainPage from "./UI/MainPage";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClientw = new QueryClient();

export default function Home() {
  
  return (
    <QueryClientProvider client={queryClientw}>
      <MainPage />
    </QueryClientProvider>
  );
}
