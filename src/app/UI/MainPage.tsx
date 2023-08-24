import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import ScrollableSection from "../Components/ScrollableSection";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import  getCharacters from "../../api/getCharacters";
export default function MainPage() {

    const queryClient = useQueryClient();

    const { data, isLoading, isError } = useQuery({
        queryKey: ["characters"],
        queryFn: getCharacters,
    });

    


  return (
    <>
      <Navbar />
      <Hero />
      {
            isLoading ? <h1 className="font-bold p-4">Loading...</h1> : <ScrollableSection title="Characters" data={data} />
      }      
    </>
  );
}
