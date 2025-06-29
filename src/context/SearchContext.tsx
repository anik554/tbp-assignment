"use client";

import { ISearchType } from "@/interfaces/search-types";
import { createContext, useContext } from "react";
interface SearchContextProps {
  searchResult: ISearchType | null;
  setSearchResult: (data: ISearchType) => void;
}
export const SearchContext = createContext<SearchContextProps | null>(null);

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
